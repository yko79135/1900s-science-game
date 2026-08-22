import type { GameAction } from '../../engine/reducer';
import type { ContextCard } from '../../types';
import { SOURCES } from '../../data/content';

export interface ContextCardOverlayProps {
  cards: ContextCard[];
  dispatch: (action: GameAction) => void;
}

export function ContextCardOverlay({ cards, dispatch }: ContextCardOverlayProps) {
  if (cards.length === 0) return null;
  return (
    <div className="scrim" role="dialog" aria-modal="true" aria-label="Context cards">
      <div className="modal card context-card-overlay">
        {cards.map((card) => (
          <article key={card.id} className="context-card">
            <p className="context-card__meta">
              {card.year} · <span className={`tag ${card.type === 'historical' ? 'tag-documented' : ''}`}>{card.type === 'historical' ? 'Historical Event' : 'Personal Milestone'}</span>
            </p>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
            <p className="context-card__source">
              Source:{' '}
              <a href={SOURCES[card.sourceId]?.url} target="_blank" rel="noreferrer">
                {SOURCES[card.sourceId]?.label}
              </a>
            </p>
          </article>
        ))}
        <button type="button" className="btn btn-primary" data-testid="context-card-continue" onClick={() => dispatch({ type: 'ACK_CONTEXT_CARDS' })} autoFocus>
          Continue
        </button>
      </div>
    </div>
  );
}
