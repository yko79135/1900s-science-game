import type { GameState } from '../../types';
import { CENTURY_KNOWLEDGE, SOURCES } from '../../data/content';
import { getCharacter } from '../../engine/rules';

export function KnowledgeBoardPanel({ state, onClose }: { state: GameState; onClose: () => void }) {
  const entries = Object.values(CENTURY_KNOWLEDGE);
  return (
    <div className="scrim" role="dialog" aria-modal="true" aria-label="Century Knowledge Board">
      <div className="modal card knowledge-board">
        <h2>The Century Knowledge Board</h2>
        <p>
          Foundational discoveries enter public knowledge here once published. If no one publishes an indispensable
          discovery by its historical deadline, the Century does not wait: an NPC researcher publishes it instead, and
          downstream work remains possible — but the credit is lost.
        </p>
        <ul className="knowledge-board__list">
          {entries.map((entry) => {
            const boardState = state.knowledgeBoard[entry.id];
            const status = !boardState
              ? 'Not yet published'
              : boardState.npcFallbackTriggered
                ? `Published by independent researchers in ${boardState.publishedYear} (deadline reached)`
                : `Published by ${getCharacter(boardState.publishedByCharacterId!).name} in ${boardState.publishedYear}`;
            return (
              <li key={entry.id} className="knowledge-board__entry">
                <h3>{entry.name}</h3>
                <p>{entry.description}</p>
                <p className="knowledge-board__status">{status}</p>
                <p className="knowledge-board__deadline">
                  Canonically associated with {getCharacter(entry.canonicalCharacterId).name} · historical deadline {entry.deadlineYear}
                </p>
                <p className="context-card__source">
                  Source:{' '}
                  <a href={SOURCES[entry.sourceId]?.url} target="_blank" rel="noreferrer">
                    {SOURCES[entry.sourceId]?.label}
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
        <button type="button" className="btn btn-primary" onClick={onClose} autoFocus>
          Close
        </button>
      </div>
    </div>
  );
}
