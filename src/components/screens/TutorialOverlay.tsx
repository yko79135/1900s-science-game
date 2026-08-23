import { useState } from 'react';

const STEPS = [
  {
    title: 'The Map Is the Board',
    body: 'Click or tab to a location to see why it matters, who is connected to it, and what it costs to travel there. Your character token shows where you are now.',
  },
  {
    title: 'One Action per Year',
    body: 'Every main action advances your calendar by one year. Each player receives four action points per turn; demanding projects can use more than one point. Turns rotate automatically when the points are spent, or you can end a turn early.',
  },
  {
    title: 'Research Projects',
    body: 'Projects need the right location, chapter, research tokens, and sometimes a collaborator who is alive and present. Complete a project to earn Legacy.',
  },
  {
    title: 'Canon Scoring',
    body: 'Completing a project in its documented place and year earns the full Canon bonus. Plausible alternatives still score — just less. Canon is a modest share of your final score, not the whole game.',
  },
];

export function TutorialOverlay({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  return (
    <div className="scrim" role="dialog" aria-modal="true" aria-label="Tutorial">
      <div className="modal card">
        <p className="context-card__meta">
          Step {step + 1} of {STEPS.length}
        </p>
        <h2>{current.title}</h2>
        <p>{current.body}</p>
        <div className="title-screen__actions">
          {step > 0 && (
            <button type="button" className="btn" onClick={() => setStep((s) => s - 1)}>
              Back
            </button>
          )}
          <button
            type="button"
            className="btn btn-primary"
            data-testid="tutorial-next-btn"
            autoFocus
            onClick={() => (isLast ? onDone() : setStep((s) => s + 1))}
          >
            {isLast ? 'Start Playing' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
