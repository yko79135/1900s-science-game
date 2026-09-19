import { useEffect, useEffectEvent, useRef, useState } from 'react';
import type { GameState } from '../../types';
import type { StoryAction } from '../../types/story';
import { CHARACTERS } from '../../data/content';
import { getActiveStoryView } from '../../engine/story';
import { Portrait } from '../portraits/Portrait';
import {
  removeCachedStoryImage,
  requestStoryImage,
  storyImageCacheKey,
} from '../../engine/storyImage';
import '../../styles/story.css';

/**
 * A scene, arriving over the year rather than instead of it.
 *
 * 수험생 키우기 never takes a player off the day: a scene slides over it — a title
 * bar, a picture, a name and a line — and when it ends the day is still there
 * underneath, unchanged. That continuity is most of why its story lands, so
 * this is an overlay rather than a screen, and the board keeps rendering behind
 * it.
 *
 * The picture is whichever of three exists: an illustration if one has been
 * generated, the speaker's drawn portrait otherwise, and a lettered plate when
 * the scene has no one in it.
 */

export interface StoryScreenProps {
  state: GameState;
  dispatch: (action: StoryAction) => void;
}

export function StoryScreen({ state, dispatch }: StoryScreenProps) {
  const view = getActiveStoryView(state);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageStatus, setImageStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [showBacklog, setShowBacklog] = useState(false);

  const character = view ? CHARACTERS[view.player.characterId] : null;
  const imageContext = view
    ? { scene: view.scene, variant: view.variant, player: view.player, cacheKey: storyImageCacheKey(view.scene, view.variant, view.player) }
    : null;
  const cacheKey = imageContext?.cacheKey ?? '';

  const loadCurrentImage = useEffectEvent((isCancelled: () => boolean) => {
    if (!imageContext) return;
    void requestStoryImage(imageContext.scene, imageContext.variant, imageContext.player).then((result) => {
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
    loadCurrentImage(() => cancelled);
    return () => {
      cancelled = true;
    };
  }, [cacheKey]);

  // Skipping runs to the end of the scene's pages, the way the reference's
  // double-chevron does — never past a choice, which is the player's to make.
  function skipAhead() {
    if (!view || view.page.choices?.length) return;
    dispatch({ type: 'STORY_NEXT' });
  }

  if (!view || !character) return null;

  // Whoever is speaking is who we draw; narration keeps the life whose year it is.
  const speakerId = (view.variant.image.characters ?? []).find((id) => CHARACTERS[id]?.name === view.page.speaker);
  const facedId = speakerId ?? view.player.characterId;
  const hasChoices = Boolean(view.page.choices?.length);

  const classificationLabel =
    view.scene.classification === 'Documented'
      ? 'Documented'
      : view.scene.classification === 'Plausible'
        ? 'Dramatized'
        : 'Speculative';

  const backlog = (state.narrative?.chronicle ?? []).slice(-14).reverse();

  return (
    <div className="scene" role="dialog" aria-modal="true" aria-label={view.variant.title}>
      <div className="scene__frame">
        {/* ---- title bar ---- */}
        <header className="scene__bar">
          <p className="scene__where">
            {view.variant.locationLabel ?? 'Somewhere'}
            {view.variant.yearLabel ? ` · ${view.variant.yearLabel}` : ` · ${view.player.currentYear}`}
          </p>
          <h1 ref={headingRef} tabIndex={-1} className="scene__title">
            {view.variant.title}
          </h1>
          <span className={`scene__basis scene__basis--${view.scene.classification.toLowerCase()}`}>
            {classificationLabel}
          </span>
        </header>

        {/* ---- the picture ---- */}
        <div className="scene__art" aria-label={view.variant.image.alt} aria-busy={imageStatus === 'loading'}>
          {imageUrl ? (
            <img
              className="scene__photo"
              src={imageUrl}
              alt={view.variant.image.alt}
              onError={() => {
                void removeCachedStoryImage(cacheKey);
                setImageUrl(null);
                setImageStatus('error');
              }}
            />
          ) : (
            <div className="scene__drawn">
              <Portrait characterId={facedId} size={340} className="scene__figure" />
              <p className="scene__setting">{view.variant.image.setting}</p>
            </div>
          )}
        </div>

        {/* ---- what is said ---- */}
        <div className="scene__say" data-testid="story-page">
          {view.page.speaker && <span className="scene__name">{view.page.speaker}</span>}
          <div className="scene__text">
            {view.page.narration && <p className="scene__narration">{view.page.narration}</p>}
            {view.page.dialogue && <p className="scene__line">“{view.page.dialogue}”</p>}
          </div>

          {hasChoices && (
            <div className="scene__choices" aria-label="What to do">
              {view.page.choices?.map((choice) => (
                <button
                  type="button"
                  className="story-choice scene__choice"
                  key={choice.id}
                  onClick={() => dispatch({ type: 'STORY_CHOOSE', choiceId: choice.id })}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ---- controls ---- */}
        <footer className="scene__controls">
          <button
            type="button"
            className="scene__round"
            aria-label="Back one page"
            disabled={view.pageIndex === 0}
            onClick={() => dispatch({ type: 'STORY_BACK' })}
          >
            ‹
          </button>
          <button
            type="button"
            className="scene__round"
            aria-label="Skip ahead"
            disabled={hasChoices}
            onClick={skipAhead}
          >
            ≫
          </button>

          <div className="scene__dots" aria-label={`Page ${view.pageIndex + 1} of ${view.pageCount}`}>
            {Array.from({ length: Math.min(view.pageCount, 12) }, (_, index) => (
              <span key={index} className={index === view.pageIndex ? 'is-current' : ''} aria-hidden="true" />
            ))}
          </div>

          {!hasChoices && (
            <button
              type="button"
              className="btn btn-primary scene__go"
              data-testid="story-continue"
              onClick={() => dispatch({ type: 'STORY_NEXT' })}
            >
              Continue
            </button>
          )}

          <button
            type="button"
            className="scene__round"
            aria-label="What has happened so far"
            aria-expanded={showBacklog}
            onClick={() => setShowBacklog((open) => !open)}
          >
            ≡
          </button>
        </footer>

        {showBacklog && (
          <aside className="scene__backlog" aria-label="What has happened so far">
            {backlog.length ? (
              <ul>
                {backlog.map((entry, index) => (
                  <li key={`${entry.sceneId}-${index}`}>
                    <span>{entry.year}</span> <strong>{entry.title}</strong> {entry.summary}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nothing has been written down yet.</p>
            )}
            <details className="scene__basis-note">
              <summary>Historical basis</summary>
              <p>
                <strong>{classificationLabel}.</strong>{' '}
                {view.variant.historicalNote ??
                  'Narration and dialogue are dramatized from the historical situation unless explicitly identified as a sourced quotation.'}
              </p>
              {view.scene.sourceIds.length > 0 && <p>Source keys: {view.scene.sourceIds.join(', ')}</p>}
            </details>
          </aside>
        )}
      </div>
    </div>
  );
}
