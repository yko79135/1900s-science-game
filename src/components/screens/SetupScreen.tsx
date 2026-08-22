import { useState } from 'react';

export interface SetupConfig {
  playerCount: number;
  gameLength: 'short' | 'full';
  seed: number;
  tutorial: boolean;
}

export interface SetupScreenProps {
  onContinue: (config: SetupConfig) => void;
  onBack: () => void;
}

export function SetupScreen({ onContinue, onBack }: SetupScreenProps) {
  const [playerCount, setPlayerCount] = useState(1);
  const [gameLength, setGameLength] = useState<'short' | 'full'>('full');
  const [seedText, setSeedText] = useState('');
  const [tutorial, setTutorial] = useState(false);

  function handleContinue() {
    const seed = seedText.trim() ? hashSeed(seedText.trim()) : Math.floor(Math.random() * 2 ** 31);
    onContinue({ playerCount, gameLength, seed, tutorial });
  }

  return (
    <div className="screen setup-screen">
      <h1>New Game</h1>
      <p className="setup-screen__intro">
        Choose how many people are playing hot-seat, and how much of each life you want to play through.
      </p>

      <fieldset className="setup-screen__field">
        <legend>Players</legend>
        <div className="setup-screen__options">
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              type="button"
              className={`btn ${playerCount === n ? 'btn-primary' : ''}`}
              aria-pressed={playerCount === n}
              onClick={() => setPlayerCount(n)}
            >
              {n} Player{n > 1 ? 's' : ''}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="setup-screen__field">
        <legend>Game Length</legend>
        <div className="setup-screen__options">
          <button type="button" className={`btn ${gameLength === 'short' ? 'btn-primary' : ''}`} aria-pressed={gameLength === 'short'} onClick={() => setGameLength('short')}>
            Short Game (Breakthrough → Legacy)
          </button>
          <button type="button" className={`btn ${gameLength === 'full' ? 'btn-primary' : ''}`} aria-pressed={gameLength === 'full'} onClick={() => setGameLength('full')}>
            Full Biography (all six chapters)
          </button>
        </div>
      </fieldset>

      <fieldset className="setup-screen__field">
        <legend>Seed (optional)</legend>
        <label className="visually-hidden" htmlFor="seed-input">
          Custom random seed
        </label>
        <input
          id="seed-input"
          type="text"
          className="setup-screen__seed-input"
          placeholder="Leave blank for a random game"
          value={seedText}
          onChange={(e) => setSeedText(e.target.value)}
        />
        <p className="setup-screen__hint">The same seed always produces the same sequence of random events.</p>
      </fieldset>

      <fieldset className="setup-screen__field">
        <legend>Tutorial</legend>
        <label className="setup-screen__checkbox">
          <input type="checkbox" checked={tutorial} onChange={(e) => setTutorial(e.target.checked)} />
          Show the interactive tutorial at the start of the game
        </label>
      </fieldset>

      <div className="title-screen__actions">
        <button type="button" className="btn" onClick={onBack}>
          Back
        </button>
        <button type="button" className="btn btn-primary" onClick={handleContinue} data-testid="continue-setup-btn">
          Choose Characters
        </button>
      </div>
    </div>
  );
}

function hashSeed(text: string): number {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (Math.imul(31, hash) + text.charCodeAt(i)) | 0;
  }
  return hash >>> 0;
}
