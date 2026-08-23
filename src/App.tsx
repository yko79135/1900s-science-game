import { useEffect, useRef, useState } from 'react';
import type { CharacterId, GameState } from './types';
import { createGame, restartGame } from './engine/reducer';
import {
  initializeStoryGame,
  prepareResumedStoryGame,
  storyAwareGameReducer,
  type StoryAwareAction,
} from './engine/story';
import {
  appendCompletedGame,
  clearCurrentGame,
  loadCurrentGame,
  loadSettings,
  saveCurrentGame,
  saveSettings,
} from './engine/save';
import { TitleScreen } from './components/screens/TitleScreen';
import { SetupScreen, type SetupConfig } from './components/screens/SetupScreen';
import { CharacterSelectScreen } from './components/screens/CharacterSelectScreen';
import { CompendiumScreen } from './components/screens/CompendiumScreen';
import { RulesModal } from './components/screens/RulesModal';
import { TutorialOverlay } from './components/screens/TutorialOverlay';
import { EndgameScreen } from './components/screens/EndgameScreen';
import { BoardScreen } from './components/board/BoardScreen';
import './styles/screens.css';

type UiScreen = 'title' | 'setup' | 'select';

export default function App() {
  const [uiScreen, setUiScreen] = useState<UiScreen>('title');
  const [game, setGame] = useState<GameState | null>(() => {
    const loaded = loadCurrentGame();
    return loaded ? prepareResumedStoryGame(loaded) : null;
  });
  const [setupConfig, setSetupConfig] = useState<SetupConfig | null>(null);
  const [settings, setSettings] = useState(() => loadSettings());
  const [showCompendium, setShowCompendium] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [confirmNewGame, setConfirmNewGame] = useState(false);
  const recordedCompletion = useRef(false);

  useEffect(() => {
    if (game) saveCurrentGame(game);
  }, [game]);

  useEffect(() => {
    if (game?.phase === 'endgame' && !recordedCompletion.current) {
      recordedCompletion.current = true;
      appendCompletedGame({
        id: `game-${game.createdAt}`,
        completedAt: Date.now(),
        summary: game.players.map((p) => ({ characterId: p.characterId, legacyPoints: p.legacyPoints, canonPoints: p.canonPoints })),
      });
    }
    if (game?.phase !== 'endgame') recordedCompletion.current = false;
  }, [game]);

  function updateSettings(patch: Partial<typeof settings>) {
    const next = { ...settings, ...patch };
    setSettings(next);
    saveSettings(next);
  }

  function beginNewGameFlow() {
    if (game) {
      setConfirmNewGame(true);
      return;
    }
    setUiScreen('setup');
  }

  function confirmDiscardAndStartNew() {
    setConfirmNewGame(false);
    clearCurrentGame();
    setGame(null);
    setUiScreen('setup');
  }

  function handleSetupContinue(config: SetupConfig) {
    setSetupConfig(config);
    setUiScreen('select');
  }

  function handleCharacterSelectConfirm(characterIds: CharacterId[]) {
    if (!setupConfig) return;
    const newGame = initializeStoryGame(createGame(characterIds, setupConfig.seed, setupConfig.gameLength));
    setGame(newGame);
    setUiScreen('title');
    if (setupConfig.tutorial || !settings.tutorialCompleted) {
      setShowTutorial(true);
    }
  }

  function handleResume() {
    const loaded = loadCurrentGame();
    if (loaded) setGame(prepareResumedStoryGame(loaded));
  }

  function handleExitToTitle() {
    setUiScreen('title');
  }

  function handleSave() {
    if (game) saveCurrentGame(game);
  }

  function handleRestartGame() {
    setGame((current) => (current ? initializeStoryGame(restartGame(current)) : current));
    setShowTutorial(false);
    recordedCompletion.current = false;
  }

  function dispatch(action: StoryAwareAction) {
    setGame((current) => (current ? storyAwareGameReducer(current, action) : current));
  }

  if (game) {
    return (
      <>
        {game.phase === 'endgame' ? (
          <EndgameScreen
            state={game}
            onNewGame={() => {
              setGame(null);
              clearCurrentGame();
              setUiScreen('setup');
            }}
            onExit={() => {
              setGame(null);
              clearCurrentGame();
              setUiScreen('title');
            }}
          />
        ) : (
          <BoardScreen
            key={game.createdAt}
            state={game}
            dispatch={(action) => dispatch(action)}
            onSave={handleSave}
            onRestartGame={handleRestartGame}
            onExitToTitle={handleExitToTitle}
          />
        )}
        {showTutorial && (
          <TutorialOverlay
            onDone={() => {
              setShowTutorial(false);
              updateSettings({ tutorialCompleted: true });
            }}
          />
        )}
      </>
    );
  }

  return (
    <>
      {uiScreen === 'title' && (
        <TitleScreen
          hasSavedGame={loadCurrentGame() !== null}
          onNewGame={beginNewGameFlow}
          onResume={handleResume}
          onOpenCompendium={() => setShowCompendium(true)}
          onOpenRules={() => setShowRules(true)}
        />
      )}
      {uiScreen === 'setup' && <SetupScreen onContinue={handleSetupContinue} onBack={() => setUiScreen('title')} />}
      {uiScreen === 'select' && setupConfig && (
        <CharacterSelectScreen playerCount={setupConfig.playerCount} onConfirm={handleCharacterSelectConfirm} onBack={() => setUiScreen('setup')} />
      )}
      {showCompendium && (
        <div className="scrim">
          <div className="modal" style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
            <CompendiumScreen onClose={() => setShowCompendium(false)} />
          </div>
        </div>
      )}
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
      {confirmNewGame && (
        <div className="scrim" role="alertdialog" aria-modal="true" aria-label="Confirm new game">
          <div className="modal card">
            <h2>Start a new game?</h2>
            <p>You have a game in progress. Starting a new game will permanently delete it.</p>
            <div className="title-screen__actions">
              <button type="button" className="btn" onClick={() => setConfirmNewGame(false)}>
                Cancel
              </button>
              <button type="button" className="btn btn-danger" onClick={confirmDiscardAndStartNew}>
                Delete and Start New Game
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
