import type { GameState } from '../../types';
import { CHARACTERS } from '../../data/content';

export function StoryChronicle({ state, onClose }: { state: GameState; onClose: () => void }) {
  const entries = state.narrative?.chronicle ?? [];

  return (
    <div className="scrim" role="dialog" aria-modal="true" aria-label="Story chronicle">
      <section className="modal card story-chronicle">
        <header className="story-chronicle__header">
          <div>
            <p className="story-copy__eyebrow">This playthrough</p>
            <h2>Chronicle</h2>
          </div>
          <button type="button" className="btn" onClick={onClose}>
            Close
          </button>
        </header>
        {entries.length === 0 ? (
          <p>No completed story scenes yet. Chapter openings, discoveries, encounters, and major historical moments will appear here.</p>
        ) : (
          <ol className="story-chronicle__list">
            {entries.map((entry) => (
              <li key={`${entry.sceneId}:${entry.variantId}`}>
                <div className="story-chronicle__meta">
                  <span>{CHARACTERS[entry.characterId]?.name ?? entry.characterId}</span>
                  <span>{entry.locationLabel ?? 'Historical setting'}</span>
                  <span>{entry.year}</span>
                  <span>{entry.classification}</span>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.summary}</p>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
