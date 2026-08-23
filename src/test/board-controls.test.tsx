import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BoardScreen } from '../components/board/BoardScreen';
import { WorldMap } from '../components/map/WorldMap';
import { createGame } from '../engine/reducer';

describe('board controls', () => {
  it('requires confirmation before restarting the whole game', () => {
    const game = createGame(['curie'], 1905);
    const onRestartGame = vi.fn();

    render(
      <BoardScreen
        state={game}
        dispatch={vi.fn()}
        onSave={vi.fn()}
        onRestartGame={onRestartGame}
        onExitToTitle={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByTestId('restart-game-btn'));
    expect(screen.getByRole('alertdialog', { name: 'Confirm game restart' })).toBeVisible();
    expect(onRestartGame).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('confirm-restart-game-btn'));
    expect(onRestartGame).toHaveBeenCalledOnce();
  });

  it('jumps to, selects, and centers the active player’s current city', () => {
    const player = createGame(['curie'], 1905).players[0];
    const onSelectLocation = vi.fn();

    render(
      <WorldMap
        players={[player]}
        activePlayer={player}
        selectedLocationId={null}
        onSelectLocation={onSelectLocation}
      />,
    );

    fireEvent.click(screen.getByTestId('jump-to-current-city-btn'));

    expect(onSelectLocation).toHaveBeenCalledWith('warsaw');
    expect(screen.getByRole('tab', { name: 'North & East' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('img', { name: /North & East map/ }).querySelector('g[transform]')).toHaveAttribute(
      'transform',
      expect.stringContaining('scale(2.5)'),
    );
  });
});
