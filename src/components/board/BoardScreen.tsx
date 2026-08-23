import { useState } from 'react';
import type { GameAction } from '../../engine/reducer';
import { pendingContextCards } from '../../engine/reducer';
import type { GameState } from '../../types';
import { WorldMap } from '../map/WorldMap';
import { CharacterPanel } from './CharacterPanel';
import { ProjectPanel } from './ProjectPanel';
import { LocationInfoPanel } from './LocationInfoPanel';
import { ActionBar } from './ActionBar';
import { ContextCardOverlay } from './ContextCardOverlay';
import { KnowledgeBoardPanel } from './KnowledgeBoardPanel';
import { RulesModal } from '../screens/RulesModal';
import { CompendiumScreen } from '../screens/CompendiumScreen';

export interface BoardScreenProps {
  state: GameState;
  dispatch: (action: GameAction) => void;
  onSave: () => void;
  onExitToTitle: () => void;
}

export function BoardScreen({ state, dispatch, onSave, onExitToTitle }: BoardScreenProps) {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [showKnowledgeBoard, setShowKnowledgeBoard] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showCompendium, setShowCompendium] = useState(false);

  const player = state.players[state.activePlayerIndex];
  const cards = pendingContextCards(player);

  function locationDispatch(action: GameAction) {
    dispatch(action);
    if (action.type === 'TRAVEL') setSelectedLocationId(null);
  }

  return (
    <div className="board">
      <div className="board__topbar">
        <h1 className="board__title">The Shape of a Century</h1>
        <div className="board__topbar-actions">
          <button className="btn" onClick={() => setShowKnowledgeBoard(true)}>
            Knowledge Board
          </button>
          <button className="btn" onClick={() => setShowCompendium(true)}>
            Compendium
          </button>
          <button className="btn" onClick={() => setShowRules(true)}>
            Rules
          </button>
          <button className="btn" onClick={onSave}>
            Save
          </button>
          <button className="btn" onClick={onExitToTitle}>
            Exit
          </button>
        </div>
      </div>

      <div className="board__main">
        <div className="board__map">
          <WorldMap
            key={`${player.id}-${player.currentLocationId}`}
            players={state.players}
            activePlayer={player}
            selectedLocationId={selectedLocationId}
            onSelectLocation={setSelectedLocationId}
          />
        </div>
        <aside className="board__side">
          <CharacterPanel player={player} />
          {selectedLocationId ? (
            <LocationInfoPanel locationId={selectedLocationId} player={player} dispatch={locationDispatch} onClose={() => setSelectedLocationId(null)} />
          ) : (
            <ProjectPanel state={state} player={player} dispatch={dispatch} />
          )}
        </aside>
      </div>

      <ActionBar state={state} player={player} dispatch={dispatch} />

      {cards.length > 0 && <ContextCardOverlay cards={cards} dispatch={dispatch} />}
      {showKnowledgeBoard && <KnowledgeBoardPanel state={state} onClose={() => setShowKnowledgeBoard(false)} />}
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
      {showCompendium && (
        <div className="scrim">
          <div className="modal" style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
            <CompendiumScreen onClose={() => setShowCompendium(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
