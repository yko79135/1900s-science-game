import type { GameAction } from '../../engine/reducer';
import type { GameState, PlayerState, ResourceTokenType } from '../../types';
import { CENTURY_KNOWLEDGE, INSIGHTS, PROJECTS_BY_CHARACTER } from '../../data/content';
import { canAttemptProject, currentChapterId, getCharacter, hasInsight } from '../../engine/rules';

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
                Discovery Legacy {project.baseLegacy} · Turn actions {project.timeCost} · Funds {project.fundsCost}
              </p>
              <div className="project-card__requirements">
                <h4>Requires</h4>
                <ul>
                  {(Object.entries(project.requiredTokens) as [ResourceTokenType, number][]).map(([token, amount]) => {
                    const current = player.resources.tokens[token] ?? 0;
                    const met = current >= amount;
                    return (
                      <li key={token} className={met ? 'is-met' : 'is-missing'}>
                        <span aria-hidden="true">{met ? '✓' : '✗'}</span>{' '}
                        {token[0].toUpperCase() + token.slice(1)} {current} / {amount}
                      </li>
                    );
                  })}
                  {project.requiredKnowledgeIds.map((knowledgeId) => {
                    const boardEntry = state.knowledgeBoard[knowledgeId];
                    const met = boardEntry?.publishedYear !== undefined && player.currentYear >= boardEntry.publishedYear;
                    return (
                      <li key={knowledgeId} className={met ? 'is-met' : 'is-missing'}>
                        <span aria-hidden="true">{met ? '✓' : '✗'}</span> Century Knowledge:{' '}
                        {CENTURY_KNOWLEDGE[knowledgeId]?.name ?? knowledgeId}
                      </li>
                    );
                  })}
                </ul>
                <h4>Insights</h4>
                {project.requiredInsights.length === 0 ? (
                  <p className="project-card__no-insights">No authored Insight requirement yet.</p>
                ) : (
                  <ul className="project-card__insights">
                    {project.requiredInsights.map((insightId) => {
                      const insight = INSIGHTS[insightId];
                      const met = hasInsight(player, insightId);
                      return (
                        <li key={insightId} className={met ? 'is-met' : 'is-missing'}>
                          <details>
                            <summary>
                              <span aria-hidden="true">{met ? '✓' : '✗'}</span> {insight?.name ?? insightId}
                            </summary>
                            <p>{insight?.description ?? 'This Insight has not been authored yet.'}</p>
                            {!met && insight && (
                              <>
                                <strong>Possible leads</strong>
                                <ul>
                                  {insight.leads.map((lead) => (
                                    <li key={lead}>{lead}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </details>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
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
