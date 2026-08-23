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
import { StoryChronicle } from '../story/StoryChronicle';

export interface BoardScreenProps {
  state: GameState;
  dispatch: (action: GameAction) => void;
  onSave: () => void;
  onRestartGame: () => void;
  onExitToTitle: () => void;
}

export function BoardScreen({ state, dispatch, onSave, onRestartGame, onExitToTitle }: BoardScreenProps) {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [showKnowledgeBoard, setShowKnowledgeBoard] = useState(false);
  const [showChronicle, setShowChronicle] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showCompendium, setShowCompendium] = useState(false);
  const [confirmRestart, setConfirmRestart] = useState(false);

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
          <button className="btn" onClick={() => setShowChronicle(true)}>
            Chronicle
          </button>
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
          <button type="button" className="btn btn-danger" data-testid="restart-game-btn" onClick={() => setConfirmRestart(true)}>
            Restart Game
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
      {showChronicle && <StoryChronicle state={state} onClose={() => setShowChronicle(false)} />}
      {showKnowledgeBoard && <KnowledgeBoardPanel state={state} onClose={() => setShowKnowledgeBoard(false)} />}
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
      {showCompendium && (
        <div className="scrim">
          <div className="modal" style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
            <CompendiumScreen onClose={() => setShowCompendium(false)} />
          </div>
        </div>
      )}
      {confirmRestart && (
        <div className="scrim" role="alertdialog" aria-modal="true" aria-label="Confirm game restart">
          <div className="modal card">
            <h2>Restart the whole game?</h2>
            <p>
              This permanently deletes all progress in this game and returns the same players to the beginning. Your seed and game length stay the same.
            </p>
            <div className="title-screen__actions">
              <button type="button" className="btn" onClick={() => setConfirmRestart(false)}>
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-testid="confirm-restart-game-btn"
                onClick={() => {
                  setConfirmRestart(false);
                  onRestartGame();
                }}
              >
                Restart from the Beginning
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
