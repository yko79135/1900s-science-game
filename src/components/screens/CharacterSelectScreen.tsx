import { useState } from 'react';
import type { CharacterId } from '../../types';
import { CHARACTER_LIST, LOCATIONS } from '../../data/content';

export interface CharacterSelectScreenProps {
  playerCount: number;
  onConfirm: (characterIds: CharacterId[]) => void;
  onBack: () => void;
}

export function CharacterSelectScreen({ playerCount, onConfirm, onBack }: CharacterSelectScreenProps) {
  const [selections, setSelections] = useState<(CharacterId | null)[]>(Array(playerCount).fill(null));
  const [focusedId, setFocusedId] = useState<CharacterId | null>(null);

  const activeSlot = selections.findIndex((s) => s === null);
  const allChosen = activeSlot === -1;

  function pick(id: CharacterId) {
    if (selections.includes(id)) return;
    if (activeSlot === -1) return;
    const next = [...selections];
    next[activeSlot] = id;
    setSelections(next);
  }

  function clearSlot(index: number) {
    const next = [...selections];
    next[index] = null;
    setSelections(next);
  }

  const focused = CHARACTER_LIST.find((c) => c.id === focusedId) ?? null;

  return (
    <div className="screen select-screen">
      <h1>Choose Your Scientists</h1>
      <p className="select-screen__intro">
        {allChosen
          ? 'All players have chosen. Review your roster, or start the game.'
          : `Player ${activeSlot + 1}: choose a character.`}
      </p>

      <div className="select-screen__roster">
        {selections.map((id, i) => (
          <div key={i} className={`select-screen__slot ${i === activeSlot ? 'is-active' : ''}`}>
            <span className="select-screen__slot-label">Player {i + 1}</span>
            {id ? (
              <>
                <span className="select-screen__slot-name">{CHARACTER_LIST.find((c) => c.id === id)?.name}</span>
                <button type="button" className="btn" onClick={() => clearSlot(i)}>
                  Change
                </button>
              </>
            ) : (
              <span className="select-screen__slot-empty">Choosing…</span>
            )}
          </div>
        ))}
      </div>

      <div className="select-screen__grid">
        {CHARACTER_LIST.map((character) => {
          const taken = selections.includes(character.id);
          const location = LOCATIONS[character.startingLocationId];
          return (
            <button
              key={character.id}
              type="button"
              className={`character-card ${taken ? 'is-taken' : ''}`}
              style={{ '--character-color': character.color } as React.CSSProperties}
              data-testid={`char-${character.id}`}
              onClick={() => pick(character.id)}
              onFocus={() => setFocusedId(character.id)}
              onMouseEnter={() => setFocusedId(character.id)}
              disabled={taken}
              aria-pressed={taken}
            >
              <span className="character-card__monogram">{character.monogram}</span>
              <span className="character-card__name">{character.name}</span>
              <span className="character-card__field">{character.field}</span>
              <span className="character-card__dates">
                {character.bornYear}–{character.diedYear ?? ''}
              </span>
              <span className={`tag character-card__difficulty character-card__difficulty--${character.difficulty.toLowerCase()}`}>{character.difficulty}</span>
              <span className="character-card__location">Starts in {location.name}</span>
            </button>
          );
        })}
      </div>

      {focused && (
        <div className="select-screen__detail card" aria-live="polite">
          <h2>{focused.name}</h2>
          <p className="select-screen__detail-field">
            {focused.field} · {focused.bornYear}–{focused.diedYear ?? 'present'}
          </p>
          <p>
            <strong>Ability — {focused.ability.name}:</strong> {focused.ability.description}
          </p>
          <p>
            <strong>Central tension:</strong> {focused.tension}
          </p>
          <p className="select-screen__detail-bio">{focused.shortBio}</p>
        </div>
      )}

      <div className="title-screen__actions">
        <button type="button" className="btn" onClick={onBack}>
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onConfirm(selections as CharacterId[])}
          disabled={!allChosen}
          data-testid="begin-game-btn"
        >
          Begin the Century
        </button>
      </div>
    </div>
  );
}
