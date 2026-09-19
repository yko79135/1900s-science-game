import type { Goal } from '../../engine/goals';
import type { GameAction } from '../../engine/reducer';

/**
 * What this life is aiming at, in the slot the reference gives 이 주의 목표.
 *
 * A goal that cannot be started yet still shows its requirements and says what
 * to prepare, because a player told only to wait has been given nothing to
 * decide.
 */

export interface GoalListProps {
  goals: Goal[];
  dispatch: (action: GameAction) => void;
}

export function GoalList({ goals, dispatch }: GoalListProps) {
  if (!goals.length) return null;

  return (
    <section className="aims" aria-label="What this life is aiming at">
      <h2>The work</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.project.id} className={`aim aim--${goal.state}`} data-testid={`goal-${goal.project.id}`}>
            <div className="aim__line">
              <span className="aim__name">{goal.project.name}</span>
              <span className="aim__years">
                {goal.years} {goal.years === 1 ? 'yr' : 'yrs'}
              </span>
            </div>
            <p className="aim__next">{goal.nextStep}</p>
            {goal.state === 'ready' ? (
              <button
                type="button"
                className="btn btn-primary aim__do"
                data-testid={`goal-do-${goal.project.id}`}
                onClick={() => dispatch({ type: 'ATTEMPT_PROJECT', projectId: goal.project.id })}
              >
                Do the work
              </button>
            ) : (
              <ul className="aim__needs">
                {goal.requirements
                  .filter((requirement) => !requirement.met)
                  .map((requirement) => (
                    <li key={requirement.label}>
                      {requirement.label} {requirement.have}/{requirement.need}
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
