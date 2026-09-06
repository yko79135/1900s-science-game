import { useMemo, useState } from 'react';
import type { GameState } from '../../types';
import type { GameAction } from '../../engine/reducer';
import type { Change, TurnOption } from '../../engine/turn';
import { companyHere, researchTotal, turnOptions } from '../../engine/turn';
import { activeBeat } from '../../engine/beats';
import { CHAPTERS_BY_CHARACTER, CHARACTERS, LOCATIONS } from '../../data/content';
import { pendingContextCards } from '../../engine/reducer';
import '../../styles/turn.css';

export interface TurnScreenProps {
  state: GameState;
  dispatch: (action: GameAction) => void;
  onOpenMap: () => void;
  onOpenChronicle: () => void;
}

const GROUP_LABEL: Record<string, string> = {
  research: 'The work',
  living: 'Getting by',
  people: 'People',
  travel: 'Elsewhere',
};

function ChangeChip({ change }: { change: Change }) {
  const sign = change.amount > 0 ? '+' : '';
  return (
    <span className={`chip chip--${change.amount > 0 ? 'up' : 'down'}`}>
      {sign}
      {change.amount}
      {change.varies ? '–4' : ''} {change.label}
    </span>
  );
}

export function TurnScreen({ state, dispatch, onOpenMap, onOpenChronicle }: TurnScreenProps) {
  const player = state.players[state.activePlayerIndex];
  const [lastTurn, setLastTurn] = useState<{ label: string; changes: Change[] } | null>(null);

  const character = CHARACTERS[player.characterId];
  const chapter = CHAPTERS_BY_CHARACTER[player.characterId]?.[player.chapterIndex];
  const location = LOCATIONS[player.currentLocationId];
  const cards = pendingContextCards(player);

  const options = useMemo(() => turnOptions(state, player), [state, player]);
  const beat = useMemo(() => activeBeat(state), [state]);
  const company = companyHere(state, player);

  const yearsLeft = player.timeActionsRemaining;
  const chapterSpan = chapter ? chapter.yearEnd - chapter.yearStart + 1 : 1;
  const progress = Math.max(0, Math.min(1, 1 - yearsLeft / chapterSpan));

  function take(optionItem: TurnOption) {
    if (!optionItem.enabled) return;
    setLastTurn({ label: optionItem.label, changes: optionItem.changes });
    dispatch(optionItem.action);
  }

  const groups: TurnOption['group'][] = ['research', 'living', 'people', 'travel'];

  return (
    <main className="turn" aria-label={`${character.name}, ${player.currentYear}`}>
      <header className="turn__head">
        <div>
          <p className="turn__chapter">
            {chapter?.label ?? 'A life'} · {location?.name ?? 'Somewhere'}
          </p>
          <h1 className="turn__year">{player.currentYear}</h1>
          <p className="turn__left">
            {yearsLeft} {yearsLeft === 1 ? 'year' : 'years'} left in this chapter
          </p>
          <div className="turn__progress" aria-hidden="true">
            <span style={{ width: `${progress * 100}%` }} />
          </div>
        </div>

        <dl className="turn__stats">
          <div><dt>Research</dt><dd>{researchTotal(player)}</dd></div>
          <div><dt>Funds</dt><dd>{player.resources.funds}</dd></div>
          <div><dt>Wellbeing</dt><dd>{player.resources.wellbeing}</dd></div>
          <div><dt>Health</dt><dd>{player.resources.health}</dd></div>
          <div><dt>Standing</dt><dd>{player.resources.standing}</dd></div>
        </dl>
      </header>

      {(lastTurn || beat || company) && (
        <section className="turn__ledger" aria-live="polite">
          {lastTurn && (
            <p className="turn__last">
              <strong>{lastTurn.label}.</strong>{' '}
              {lastTurn.changes.length ? lastTurn.changes.map((c) => <ChangeChip key={c.key} change={c} />) : <em>Nothing measurable changed.</em>}
            </p>
          )}
          {beat && (
            <p className="turn__beat">
              {beat.speaker ? (
                <>
                  <span className="turn__speaker">{beat.speaker}</span> “{beat.text}”
                </>
              ) : (
                beat.text
              )}
            </p>
          )}
          {company && !beat && <p className="turn__company">{company}</p>}
        </section>
      )}

      {cards.length > 0 && (
        <section className="turn__interrupt">
          <p>{cards.length === 1 ? 'Something has happened.' : `${cards.length} things have happened.`}</p>
          <button type="button" className="btn btn-primary" onClick={() => dispatch({ type: 'ACK_CONTEXT_CARDS' })}>
            Read it
          </button>
        </section>
      )}

      <div className="turn__groups">
        {groups.map((group) => {
          const inGroup = options.filter((o) => o.group === group);
          if (!inGroup.length) return null;
          return (
            <section key={group} className="turn__group">
              <h2>{GROUP_LABEL[group]}</h2>
              <ul className="turn__options">
                {inGroup.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className="turn-option"
                      data-testid={`turn-${item.id}`}
                      disabled={!item.enabled}
                      title={item.blockedReason}
                      onClick={() => take(item)}
                    >
                      <span className="turn-option__label">{item.label}</span>
                      {item.detail && <span className="turn-option__detail">{item.detail}</span>}
                      <span className="turn-option__changes">
                        {item.changes.map((c) => (
                          <ChangeChip key={`${item.id}-${c.key}`} change={c} />
                        ))}
                        <span className="chip chip--time">
                          {item.years} {item.years === 1 ? 'year' : 'years'}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <footer className="turn__foot">
        <button type="button" className="btn" onClick={onOpenMap}>
          Look at the map
        </button>
        <button type="button" className="btn" onClick={onOpenChronicle}>
          Chronicle
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-testid="turn-end-chapter"
          disabled={cards.length > 0}
          onClick={() => dispatch({ type: 'END_CHAPTER' })}
        >
          {yearsLeft > 0 ? `Move on, and lose ${yearsLeft} ${yearsLeft === 1 ? 'year' : 'years'}` : 'Move on'}
        </button>
      </footer>
    </main>
  );
}
