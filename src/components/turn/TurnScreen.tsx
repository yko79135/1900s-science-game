import { useMemo, useState } from 'react';
import type { GameState } from '../../types';
import type { GameAction } from '../../engine/reducer';
import type { Change, TurnOption } from '../../engine/turn';
import { companyHere, researchTotal, turnOptions } from '../../engine/turn';
import { activeBeat } from '../../engine/beats';
import { goalsFor } from '../../engine/goals';
import { standingOf } from '../../engine/standing';
import { Portrait } from '../portraits/Portrait';
import { GoalList } from './GoalList';
import { CHAPTERS_BY_CHARACTER, CHARACTERS, LOCATIONS } from '../../data/content';
import { pendingContextCards } from '../../engine/reducer';
import '../../styles/turn.css';

/**
 * One screen, one year, one decision — the shape 수험생 키우기 uses, carrying this
 * game's own material.
 *
 * The reference puts everything a player needs in a single unscrolled column:
 * the date and the countdown at the top, the person in the middle, what they
 * are aiming at just under them, what they are made of as a row of numbers, and
 * the year's choices as cards that each state their own cost. Nothing is behind
 * a menu, because a decision made from a remembered number is a guess.
 */

export interface TurnScreenProps {
  state: GameState;
  dispatch: (action: GameAction) => void;
  onOpenMap: () => void;
  onOpenChronicle: () => void;
}

const GROUP_LABEL: Record<string, string> = {
  research: 'At the desk',
  living: 'Getting by',
  people: 'People',
  travel: 'Elsewhere',
};

const TOKEN_ROW = [
  { key: 'theory', label: 'Theory' },
  { key: 'proof', label: 'Proof' },
  { key: 'evidence', label: 'Evidence' },
  { key: 'computation', label: 'Comput.' },
  { key: 'engineering', label: 'Engin.' },
] as const;

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
  const goals = useMemo(() => goalsFor(state, player), [state, player]);
  const standing = useMemo(() => standingOf(state, player), [state, player]);
  const company = companyHere(state, player);

  const yearsLeft = player.timeActionsRemaining;
  const age = player.currentYear - character.bornYear;
  const wellbeing = player.resources.wellbeing;
  const wellbeingPercent = Math.round((wellbeing / 10) * 100);

  // What this life is aiming at right now — the reference's 이 주의 목표.
  const aims = goals.filter((goal) => goal.state !== 'done').slice(0, 2);

  function take(optionItem: TurnOption) {
    if (!optionItem.enabled) return;
    setLastTurn({ label: optionItem.label, changes: optionItem.changes });
    dispatch(optionItem.action);
  }

  const groups: TurnOption['group'][] = ['research', 'living', 'people', 'travel'];

  return (
    <main className="turn" aria-label={`${character.name}, ${player.currentYear}`}>
      {/* ---- status bar: the year, the countdown, what the life has ---- */}
      <header className="status">
        <button type="button" className="status__icon" onClick={onOpenChronicle} aria-label="Chronicle">
          ☰
        </button>
        <div className="status__cell status__cell--date">
          <strong>{player.currentYear}</strong>
          <small>
            {yearsLeft > 0 ? `${yearsLeft} ${yearsLeft === 1 ? 'year' : 'years'} left` : 'last year'}
          </small>
        </div>
        <div className="status__cell status__cell--age">
          <strong>{age}</strong>
          <small>age</small>
        </div>
        <div className="status__cell">
          <strong>{player.resources.funds}</strong>
          <small>funds</small>
        </div>
        <div className={`status__cell${wellbeing <= 2 ? ' status__cell--low' : ''}`}>
          <strong>♥ {wellbeing}</strong>
          <small>wellbeing</small>
        </div>
        <button type="button" className="status__icon" onClick={onOpenMap} aria-label="Look at the map">
          ⊕
        </button>
      </header>

      <p className="turn__place">{location?.name ?? 'Somewhere'}</p>

      {/* ---- the person ---- */}
      <section className="stage">
        <Portrait characterId={player.characterId} size={260} className="stage__portrait" />
        <div className="stage__rank">
          <span className="stage__level">Rank {standing.level}</span>
          <strong>{standing.title}</strong>
          <span className="stage__xp">
            {standing.progress} / {standing.target}
          </span>
          <div className="stage__xp-bar" aria-hidden="true">
            <span style={{ width: `${standing.fraction * 100}%` }} />
          </div>
        </div>
        <p className="stage__chapter">{chapter?.label ?? 'A life'}</p>
        {cards.length > 0 && (
          <button
            type="button"
            className="stage__mail"
            data-testid="turn-read-cards"
            onClick={() => dispatch({ type: 'ACK_CONTEXT_CARDS' })}
          >
            <strong>{cards.length}</strong>
            <span>{cards.length === 1 ? 'has happened' : 'have happened'}</span>
          </button>
        )}
      </section>

      <div className="turn__side">
      {/* ---- what this life is aiming at ---- */}
      <GoalList goals={aims} dispatch={dispatch} />

      {/* ---- what the life is made of ---- */}
      <dl className="tokens" aria-label="Research">
        {TOKEN_ROW.map((token) => (
          <div key={token.key}>
            <dt>{token.label}</dt>
            <dd>{player.resources.tokens[token.key] ?? 0}</dd>
          </div>
        ))}
        <div className="tokens__total">
          <dt>Standing</dt>
          <dd>{player.resources.standing}</dd>
        </div>
      </dl>

      <div className="vitality" aria-label={`Wellbeing ${wellbeing} of 10`}>
        <span className="vitality__heart">♥</span>
        <div className="vitality__bar">
          <span
            className={wellbeing <= 2 ? 'vitality__fill vitality__fill--low' : 'vitality__fill'}
            style={{ width: `${wellbeingPercent}%` }}
          />
        </div>
        <span className="vitality__count">{wellbeingPercent}%</span>
        <span className="vitality__aside">({researchTotal(player)} research)</span>
      </div>
      </div>

      {/* ---- what just happened ---- */}
      {(lastTurn || beat || company) && (
        <section className="turn__ledger" aria-live="polite">
          {lastTurn && (
            <p className="turn__last">
              <strong>{lastTurn.label}.</strong>{' '}
              {lastTurn.changes.length ? (
                lastTurn.changes.map((c) => <ChangeChip key={c.key} change={c} />)
              ) : (
                <em>Nothing measurable changed.</em>
              )}
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

      {wellbeing <= 2 && (
        <p className="turn__warning" role="status">
          {wellbeing === 0
            ? 'There is no more work in this year. Rest, or the rest of the life goes with it.'
            : 'The work is taking more than it gives back. A year off would put it right.'}
        </p>
      )}

      {/* ---- the year's choices ---- */}
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
                      className={`turn-option turn-option--${item.group}`}
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
                          {item.years} {item.years === 1 ? 'yr' : 'yrs'}
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
