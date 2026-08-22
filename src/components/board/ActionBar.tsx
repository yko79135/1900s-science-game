import type { GameAction } from '../../engine/reducer';
import { pendingContextCards } from '../../engine/reducer';
import type { GameState, PlayerState } from '../../types';
import { getCharacter } from '../../engine/rules';

export interface ActionBarProps {
  state: GameState;
  player: PlayerState;
  dispatch: (action: GameAction) => void;
}

export function ActionBar({ state, player, dispatch }: ActionBarProps) {
  const character = getCharacter(player.characterId);
  const blockedByCard = pendingContextCards(player).length > 0;
  const noTime = player.timeActionsRemaining < 1;

  const showConvert = character.ability.id === 'structural-insight' || character.ability.id === 'universal-method';
  const showBohrInvite = character.ability.id === 'copenhagen-network' && player.completedProjectIds.includes('bohr-founding-institute');

  return (
    <footer className="action-bar" aria-label="Time actions and timeline">
      <div className="action-bar__timeline">
        <strong>{character.name}</strong>
        <span>Time actions remaining: {player.timeActionsRemaining} / 4</span>
      </div>
      <div className="action-bar__actions">
        <button className="btn" data-testid="action-study" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'GENERATE_TOKEN', kind: 'study' })}>
          Study (+Theory)
        </button>
        <button className="btn" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'GENERATE_TOKEN', kind: 'research' })}>
          Research (+Proof)
        </button>
        <button className="btn" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'GENERATE_TOKEN', kind: 'calculate' })}>
          Calculate (+Computation)
        </button>
        <button className="btn" data-testid="action-experiment-evidence" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'GENERATE_TOKEN', kind: 'experimentEvidence' })}>
          Experiment (+Evidence)
        </button>
        <button className="btn" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'GENERATE_TOKEN', kind: 'experimentEngineering' })}>
          Build Apparatus (+Engineering)
        </button>
        <button className="btn" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'COLLABORATE' })}>
          Collaborate
        </button>
        <button className="btn" data-testid="action-teach-or-earn" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'TEACH_OR_EARN' })}>
          Teach / Earn
        </button>
        <button className="btn" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'SEEK_FUNDING' })}>
          Seek Funding
        </button>
        <button className="btn" data-testid="action-rest" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'REST_AND_FAMILY' })}>
          Rest &amp; Family
        </button>
        <button className="btn" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'ADVOCACY' })}>
          Public Service / Advocacy
        </button>
        <button className="btn" disabled={blockedByCard || noTime} onClick={() => dispatch({ type: 'BUILD_INSTITUTION' })}>
          Build an Institution
        </button>
        {showConvert && (
          <button
            className="btn"
            disabled={blockedByCard || player.abilityUsedThisChapter}
            onClick={() => dispatch({ type: 'CONVERT_TOKEN', from: 'proof', to: 'computation' })}
          >
            {character.ability.name}: Convert Proof → Computation
          </button>
        )}
        {showBohrInvite && (
          <BohrInviteControl state={state} player={player} dispatch={dispatch} disabled={blockedByCard} />
        )}
        <button
          className="btn btn-primary action-bar__end-chapter"
          data-testid="end-chapter-btn"
          disabled={blockedByCard}
          onClick={() => dispatch({ type: 'END_CHAPTER' })}
        >
          End Chapter
        </button>
      </div>
    </footer>
  );
}

function BohrInviteControl({ state, player, dispatch, disabled }: ActionBarProps & { disabled: boolean }) {
  const others = state.players.filter((p) => p.id !== player.id);
  if (others.length === 0) return null;
  return (
    <label className="action-bar__bohr-invite">
      Invite to Copenhagen:
      <select
        disabled={disabled || player.abilityUsedThisChapter}
        onChange={(e) => {
          if (e.target.value) dispatch({ type: 'BOHR_INVITE', targetPlayerId: e.target.value });
        }}
        defaultValue=""
      >
        <option value="" disabled>
          Choose a colleague…
        </option>
        {others.map((p) => (
          <option key={p.id} value={p.id}>
            {getCharacter(p.characterId).name}
          </option>
        ))}
      </select>
    </label>
  );
}
