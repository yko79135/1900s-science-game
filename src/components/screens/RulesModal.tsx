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
          Projects require being in the right place, at the right time, with the right research tokens (Theory, Proof,
          Evidence, Computation, Engineering) and sometimes a named collaborator. Completing a project awards Legacy
          points and a Canon score based on how closely it matches the documented historical record.
        </p>
        <h3>Canon Scoring</h3>
        <p>
          +3 for completing a documented milestone in its historical place and time; +1 for a plausible near-canon
          version; +0 for a plausible alternate path. Canon points make up a modest share of your final score — a
          strong alternate life is still playable.
        </p>
        <h3>The Century Knowledge Board</h3>
        <p>
          Foundational discoveries are shared on the Century Knowledge Board once published, and only become usable to
          other characters once their own personal timeline has reached that point. If a discovery is historically
          indispensable and nobody publishes it in time, the Century does not wait — it happens anyway, through an
          NPC researcher, so later history remains possible even if you chose a different path.
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
