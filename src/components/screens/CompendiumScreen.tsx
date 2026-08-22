import { useState } from 'react';
import { CHARACTER_LIST, PROJECTS_BY_CHARACTER, CONTEXT_CARDS_BY_CHARACTER, SOURCES } from '../../data/content';
import type { CharacterId } from '../../types';

export function CompendiumScreen({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<CharacterId>(CHARACTER_LIST[0].id);
  const character = CHARACTER_LIST.find((c) => c.id === selected)!;
  const projects = PROJECTS_BY_CHARACTER[selected];
  const cards = CONTEXT_CARDS_BY_CHARACTER[selected];

  return (
    <div className="screen compendium-screen">
      <h1>Historical Compendium</h1>
      <p>
        Every biography, milestone, project, and event note in this game cites a source. Content is marked{' '}
        <span className="tag tag-documented">Documented</span>, <span className="tag tag-plausible">Plausible</span>, or{' '}
        <span className="tag tag-speculative">Speculative</span>.
      </p>
      <div className="compendium-screen__layout">
        <nav className="compendium-screen__nav" aria-label="Choose a character">
          {CHARACTER_LIST.map((c) => (
            <button key={c.id} type="button" className={`btn ${selected === c.id ? 'btn-primary' : ''}`} onClick={() => setSelected(c.id)}>
              {c.name}
            </button>
          ))}
        </nav>
        <div className="compendium-screen__content card">
          <h2>{character.name}</h2>
          <p>{character.shortBio}</p>
          <p className="context-card__source">
            Sources:{' '}
            {character.sourceIds.map((id, i) => (
              <span key={id}>
                {i > 0 && ', '}
                <a href={SOURCES[id]?.url} target="_blank" rel="noreferrer">
                  {SOURCES[id]?.label}
                </a>
              </span>
            ))}
          </p>

          <h3>Projects and Milestones</h3>
          <ul className="compendium-screen__entries">
            {projects.map((p) => (
              <li key={p.id}>
                <span className={`tag tag-${p.classification.toLowerCase()}`}>{p.classification}</span> <strong>{p.name}</strong> — {p.canonYearStart}
                {p.canonYearStart !== p.canonYearEnd ? `–${p.canonYearEnd}` : ''}.{' '}
                <a href={SOURCES[p.sourceId]?.url} target="_blank" rel="noreferrer">
                  {SOURCES[p.sourceId]?.label}
                </a>
              </li>
            ))}
          </ul>

          <h3>Context Cards</h3>
          <ul className="compendium-screen__entries">
            {cards.map((c) => (
              <li key={c.id}>
                <strong>
                  {c.year} — {c.title}
                </strong>
                : {c.body}{' '}
                <a href={SOURCES[c.sourceId]?.url} target="_blank" rel="noreferrer">
                  {SOURCES[c.sourceId]?.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
