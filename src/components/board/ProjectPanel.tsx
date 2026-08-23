import type { GameAction } from '../../engine/reducer';
import type { GameState, PlayerState } from '../../types';
import { PROJECTS_BY_CHARACTER } from '../../data/content';
import { canAttemptProject, currentChapterId, getCharacter } from '../../engine/rules';

export interface ProjectPanelProps {
  state: GameState;
  player: PlayerState;
  dispatch: (action: GameAction) => void;
}

export function ProjectPanel({ state, player, dispatch }: ProjectPanelProps) {
  const character = getCharacter(player.characterId);
  const chapterId = currentChapterId(player);
  const projects = PROJECTS_BY_CHARACTER[player.characterId].filter((p) => p.chapterId === chapterId);
  const canVerify = character.ability.id === 'verification' && !player.abilityUsedThisChapter;

  return (
    <section className="project-panel card" aria-label="Research and career projects">
      <h2>Projects — {chapterId[0].toUpperCase() + chapterId.slice(1)}</h2>
      {projects.length === 0 && <p>No projects are defined for this chapter yet.</p>}
      <ul className="project-panel__list">
        {projects.map((project) => {
          const done = player.completedProjectIds.includes(project.id);
          const eligibility = canAttemptProject(state, player, project);
          return (
            <li key={project.id} className={`project-card ${done ? 'is-done' : ''}`}>
              <div className="project-card__head">
                <h3>{project.name}</h3>
                <span className={`tag tag-${project.classification.toLowerCase()}`}>{project.classification}</span>
              </div>
              <p className="project-card__field">{project.field}</p>
              <p>{project.description}</p>
              <p className="project-card__stats">
                Base Legacy {project.baseLegacy} · Turn actions {project.timeCost} · Funds {project.fundsCost}
                {Object.keys(project.requiredTokens).length > 0 && (
                  <>
                    {' '}
                    · Requires{' '}
                    {Object.entries(project.requiredTokens)
                      .map(([k, v]) => `${v} ${k}`)
                      .join(', ')}
                  </>
                )}
              </p>
              {done ? (
                <p className="project-card__done-label">Completed</p>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-testid={`attempt-project-${project.id}`}
                    disabled={!eligibility.eligible}
                    onClick={() => dispatch({ type: 'ATTEMPT_PROJECT', projectId: project.id })}
                  >
                    Attempt
                  </button>
                  {canVerify && (
                    <button
                      type="button"
                      className="btn"
                      disabled={!eligibility.eligible}
                      onClick={() => dispatch({ type: 'ATTEMPT_PROJECT', projectId: project.id, verify: true })}
                    >
                      Attempt &amp; Verify
                    </button>
                  )}
                  {!eligibility.eligible && (
                    <ul className="project-card__reasons">
                      {eligibility.reasons.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
