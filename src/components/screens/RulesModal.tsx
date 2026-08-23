export function RulesModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="scrim" role="dialog" aria-modal="true" aria-label="Rules and tutorial">
      <div className="modal card rules-modal">
        <h2>How to Play</h2>
        <h3>Movement</h3>
        <p>
          The map is the board. Select a location to see why it matters, who is historically connected to it, what it
          costs to travel there, and whether your character can reach it yet. Travel costs Funds and one Time action.
        </p>
        <h3>Chapters and Time</h3>
        <p>
          Each character's life is divided into six Life Chapters: Formation, Education, Entry into the Profession,
          Breakthrough, Crisis and Responsibility, and Legacy. At the start of each chapter you'll see a dated Context
          Card describing what's happening in your character's life and the wider world. Each chapter gives you four
          Time actions to spend on research, work, travel, rest, advocacy, or building institutions, before you end the
          chapter and move on.
        </p>
        <h3>Research Projects</h3>
        <p>
          Projects require reusable research resources (Theory, Proof, Evidence, Computation, and Engineering), named
          permanent Insights, any prerequisite Century Knowledge, Funds, and actions. Historical places, institutions,
          and collaborators make useful resources or Insights easier to find, but they are not the only routes.
        </p>
        <h3>Legacy and Canon Alignment</h3>
        <p>
          Important discoveries award their listed Legacy wherever they are made. An early discovery can add a small
          bonus. Historical place, date, and classification contribute only to the separate Canon Alignment percentage,
          which changes comparison and story context but never adds Legacy or decides the winner.
        </p>
        <h3>Insights</h3>
        <p>
          Insights are named pieces of understanding or technique that remain once learned. Inspect a missing Insight
          on a project card for strategic leads. You might gain the same Insight through independent study, a place,
          a collaborator, another player's teaching, an earlier project, or public Century Knowledge.
        </p>
        <h3>The Century Knowledge Board</h3>
        <p>
          Foundational discoveries are shared on the Century Knowledge Board once published, and only become usable to
          other characters once their own personal timeline has reached that point. If a discovery is historically
          indispensable and nobody publishes it in time, the Century does not wait — it happens anyway, through an
          NPC researcher, so later history remains possible even if you chose a different path. NPC publication never
          awards Legacy to a human player.
        </p>
        <h3>Consequences</h3>
        <p>
          Some work creates Consequence alongside Legacy — secrecy, nuclear risk, exposure. These are tracked
          separately and reported at the end of the game rather than folded into a single good/bad score.
        </p>
        <button type="button" className="btn btn-primary" onClick={onClose} autoFocus>
          Close
        </button>
      </div>
    </div>
  );
}
