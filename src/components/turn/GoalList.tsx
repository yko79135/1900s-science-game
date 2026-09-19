import type { GameState } from '../../types';
import type { GameAction } from '../../engine/reducer';
import type { Goal } from '../../engine/goals';
import { goalsFor } from '../../engine/goals';

export interface GoalListProps {
  state: GameState;
  dispatch: (action: GameAction) => void;
}

/**
 * The work, on the main screen, every turn. A life's reason for existing should
 * not be two clicks away behind a map.
 */
export function GoalList({ state, dispatch }: GoalListProps) {
  const player = state.players[state.activePlayerIndex];
  const goals = goalsFor(state, player);
  if (!goals.length) return null;

  return (
    <section className="goals" aria-label="The work">
      <h2>The work</h2>
      <ul className="goals__list">
        {goals.map((goal) => (
          <GoalCard key={goal.project.id} goal={goal} dispatch={dispatch} />
        ))}
      </ul>
    </section>
  );
}

function GoalCard({ goal, dispatch }: { goal: Goal; dispatch: (action: GameAction) => void }) {
  const { project, state, requirements, nextStep, years } = goal;
  const unmet = requirements.filter((r) => !r.met);

  return (
    <li className={`goal goal--${state}`} data-testid={`goal-${project.id}`}>
      <div className="goal__head">
        <h3 className="goal__name">{project.name}</h3>
        <span className="goal__years">
          {years} {years === 1 ? 'yr' : 'yrs'}
        </span>
      </div>

      <p className="goal__next">{nextStep}</p>

      {state !== 'done' && unmet.length > 0 && (
        <ul className="goal__needs">
          {unmet.map((requirement) => (
            <li key={requirement.label}>
              <span className="goal__need-label">{requirement.label}</span>
              <span className="goal__need-count">
                {requirement.have}/{requirement.need}
              </span>
            </li>
          ))}
        </ul>
      )}

      {state === 'ready' && (
        <button
          type="button"
          className="btn btn-primary goal__do"
          data-testid={`goal-do-${project.id}`}
          onClick={() => dispatch({ type: 'ATTEMPT_PROJECT', projectId: project.id })}
        >
          Do the work
        </button>
      )}
    </li>
  );
}
