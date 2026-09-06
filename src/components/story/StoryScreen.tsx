import { useEffect, useEffectEvent, useRef, useState } from 'react';
import type { GameState } from '../../types';
import type { StoryAction } from '../../types/story';
import { CHARACTERS } from '../../data/content';
import { getActiveStoryView } from '../../engine/story';
import {
  removeCachedStoryImage,
  requestStoryImage,
  storyImageCacheKey,
} from '../../engine/storyImage';
import { buildStoryImagePrompt } from '../../engine/storyImagePrompt';
import '../../styles/story.css';

export interface StoryScreenProps {
  state: GameState;
  dispatch: (action: StoryAction) => void;
}

export function StoryScreen({ state, dispatch }: StoryScreenProps) {
  const view = getActiveStoryView(state);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageStatus, setImageStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [retryRequest, setRetryRequest] = useState({ cacheKey: '', count: 0 });

  const character = view ? CHARACTERS[view.player.characterId] : null;
  const imageContext = view
    ? { scene: view.scene, variant: view.variant, player: view.player, cacheKey: storyImageCacheKey(view.scene, view.variant, view.player) }
    : null;
  const visibleCharacters = view
    ? (view.variant.image.characters ?? [view.player.characterId]).map((id) => CHARACTERS[id]).filter(Boolean)
    : [];
  const prompt = view
    ? buildStoryImagePrompt(view.variant.image, visibleCharacters, { sceneYear: view.player.currentYear })
    : '';
  const cacheKey = imageContext?.cacheKey ?? '';
  const loadCurrentImage = useEffectEvent((isCancelled: () => boolean, forceRefresh: boolean) => {
    if (!imageContext) return;
    void requestStoryImage(imageContext.scene, imageContext.variant, imageContext.player, { forceRefresh }).then((result) => {
      if (isCancelled()) return;
      setImageUrl(result?.url ?? null);
      setImageStatus(result ? 'ready' : 'error');
    });
  });

  useEffect(() => {
    headingRef.current?.focus();
  }, [view?.scene.id, view?.pageIndex]);

  useEffect(() => {
    let cancelled = false;
    setImageUrl(null);
    if (!cacheKey) return () => undefined;
    setImageStatus('loading');
    loadCurrentImage(
      () => cancelled,
      retryRequest.cacheKey === cacheKey && retryRequest.count > 0,
    );
    return () => {
      cancelled = true;
    };
  }, [cacheKey, retryRequest]);

  if (!view || !character) return null;

  const classificationLabel =
    view.scene.classification === 'Documented'
      ? 'Documented setting'
      : view.scene.classification === 'Plausible'
        ? 'Plausible dramatization'
        : 'Speculative timeline';

  return (
    <main className="story-screen" aria-live="polite">
      <section className="story-frame" aria-label={`${view.variant.title} story scene`}>
        <div className="story-art" role="img" aria-label={view.variant.image.alt} aria-busy={imageStatus === 'loading'}>
          {imageUrl ? (
            <img
              className="story-art__image"
              src={imageUrl}
              alt={view.variant.image.alt}
              onError={() => {
                void removeCachedStoryImage(cacheKey);
                setImageUrl(null);
                setImageStatus('error');
              }}
            />
          ) : (
            <div className="story-art__fallback" data-loading={imageStatus === 'loading' ? 'true' : 'false'}>
              <div className="story-art__year">{view.variant.yearLabel ?? view.player.currentYear}</div>
              <div className="story-art__monogram" aria-hidden="true">
                {character.monogram}
              </div>
              <div className="story-art__setting">{view.variant.image.setting}</div>
              <div className="story-art__mood" role="status">
                {imageStatus === 'loading'
                  ? 'Painting this historical moment…'
                  : imageStatus === 'error'
                    ? 'Live illustration unavailable. The story continues with archival artwork.'
                    : view.variant.image.mood}
              </div>
              {imageStatus === 'error' && (
                <button
                  type="button"
                  className="story-art__retry"
                  onClick={() => setRetryRequest((current) => ({
                    cacheKey,
                    count: current.cacheKey === cacheKey ? current.count + 1 : 1,
                  }))}
                >
                  Retry illustration
                </button>
              )}
            </div>
          )}
        </div>

        <div className="story-copy">
          <header className="story-copy__header">
            <div>
              <p className="story-copy__eyebrow">
                {view.variant.locationLabel ?? 'Life story'}
                {view.variant.yearLabel ? ` · ${view.variant.yearLabel}` : ` · ${view.player.currentYear}`}
              </p>
              <h1 ref={headingRef} tabIndex={-1} className="story-copy__title">
                {view.variant.title}
              </h1>
            </div>
            <span className={`story-basis story-basis--${view.scene.classification.toLowerCase()}`}>{classificationLabel}</span>
          </header>

          <div className="story-page" data-testid="story-page">
            {view.page.narration && <p className="story-page__narration">{view.page.narration}</p>}
            {view.page.dialogue && (
              <div className="story-dialogue">
                {view.page.speaker && <div className="story-dialogue__speaker">{view.page.speaker}</div>}
                <p>{view.page.dialogue}</p>
              </div>
            )}

            {view.page.choices && (
              <div className="story-choices" aria-label="Story choices">
                {view.page.choices.map((choice) => (
                  <button
                    type="button"
                    className="story-choice"
                    key={choice.id}
                    onClick={() => dispatch({ type: 'STORY_CHOOSE', choiceId: choice.id })}
                  >
                    {choice.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <details className="story-history">
            <summary>Historical basis</summary>
            <p>
              <strong>{classificationLabel}.</strong>{' '}
              {view.variant.historicalNote ??
                'Narration and dialogue are dramatized from the historical situation unless explicitly identified as a sourced quotation.'}
            </p>
            {view.scene.sourceIds.length > 0 && <p>Source keys: {view.scene.sourceIds.join(', ')}</p>}
          </details>

          <details className="story-history story-history--prompt">
            <summary>Illustration details</summary>
            <p>{prompt}</p>
          </details>

          <footer className="story-nav">
            <button
              type="button"
              className="btn"
              disabled={view.pageIndex === 0}
              onClick={() => dispatch({ type: 'STORY_BACK' })}
            >
              Back
            </button>
            <div className="story-nav__progress" aria-label={`Page ${view.pageIndex + 1} of ${view.pageCount}`}>
              {Array.from({ length: view.pageCount }, (_, index) => (
                <span key={index} className={index === view.pageIndex ? 'is-current' : ''} aria-hidden="true" />
              ))}
              <small>
                {view.pageIndex + 1} / {view.pageCount}
              </small>
            </div>
            {!view.page.choices && (
              <button type="button" className="btn btn-primary" data-testid="story-continue" onClick={() => dispatch({ type: 'STORY_NEXT' })}>
                Continue
              </button>
            )}
          </footer>
        </div>
      </section>
    </main>
  );
}
