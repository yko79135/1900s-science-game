import type { GameState } from '../../types';
import { computeFinalScore, getCharacter, summarizeConsequences } from '../../engine/rules';

export function EndgameScreen({ state, onNewGame, onExit }: { state: GameState; onNewGame: () => void; onExit: () => void }) {
  return (
    <div className="screen endgame-screen" data-testid="endgame-screen">
      <h1>The Century Ends</h1>
      <p>Here is how each life came to be told.</p>
      <div className="endgame-screen__grid">
        {state.players.map((player) => {
          const character = getCharacter(player.characterId);
          const summary = computeFinalScore(player);
          const consequences = summarizeConsequences(player);
          const consequenceKeys = Object.keys(consequences);
          return (
            <article key={player.id} className="card endgame-card">
              <h2 style={{ borderBottom: `3px solid ${character.color}` }}>{character.name}</h2>
              <p className="endgame-card__legacy">
                Legacy: <strong>{summary.totalLegacy}</strong> / benchmark {summary.benchmark} ({Math.round(summary.benchmarkRatio * 100)}%)
              </p>
              <p>Canon alignment: {summary.canonAlignment} points</p>
              <p>
                Completed {player.completedProjectIds.length} project{player.completedProjectIds.length === 1 ? '' : 's'}.
              </p>
              <h3>Final Resources</h3>
              <ul className="endgame-card__resources">
                <li>Funds: {player.resources.funds}</li>
                <li>Wellbeing: {player.resources.wellbeing}</li>
                <li>Health: {player.resources.health}</li>
                <li>Standing: {player.resources.standing}</li>
                <li>Network: {player.resources.network}</li>
                <li>Exposure: {player.resources.exposure}</li>
              </ul>
              <h3>Unresolved Consequences</h3>
              {consequenceKeys.length === 0 ? (
                <p>None recorded.</p>
              ) : (
                <ul className="endgame-card__consequences">
                  {consequenceKeys.map((key) => (
                    <li key={key}>
                      {key}: {consequences[key]}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
      <div className="title-screen__actions">
        <button type="button" className="btn btn-primary" onClick={onNewGame}>
          New Game
        </button>
        <button type="button" className="btn" onClick={onExit}>
          Title Screen
        </button>
      </div>
    </div>
  );
}
