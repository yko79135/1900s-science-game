export interface TitleScreenProps {
  hasSavedGame: boolean;
  onNewGame: () => void;
  onResume: () => void;
  onOpenCompendium: () => void;
  onOpenRules: () => void;
}

export function TitleScreen({ hasSavedGame, onNewGame, onResume, onOpenCompendium, onOpenRules }: TitleScreenProps) {
  return (
    <div className="screen title-screen">
      <div className="title-screen__ornament" aria-hidden="true">
        ✦
      </div>
      <h1 className="title-screen__title">The Shape of a Century</h1>
      <p className="title-screen__subtitle">Lives, Ideas, Consequences</p>
      <p className="title-screen__blurb">
        Guide a scientist or mathematician through the major stages of a twentieth-century life —
        choosing where to live, whom to collaborate with, what to research, and how to answer the
        century's crises — on a living map of the institutions that shaped modern science.
      </p>
      <div className="title-screen__actions">
        <button type="button" className="btn btn-primary" onClick={onNewGame} data-testid="new-game-btn">
          New Game
        </button>
        <button type="button" className="btn" onClick={onResume} disabled={!hasSavedGame} data-testid="resume-btn">
          Resume Game
        </button>
        <button type="button" className="btn" onClick={onOpenCompendium}>
          Historical Compendium
        </button>
        <button type="button" className="btn" onClick={onOpenRules}>
          Rules &amp; Tutorial
        </button>
      </div>
      <p className="title-screen__footnote">
        Twelve lives, six chapters each — Curie, Einstein, Noether, Ramanujan, Oppenheimer, Hilbert,
        Johnson, Gödel, von Neumann, Franklin, Turing, and Bohr.
      </p>
    </div>
  );
}
