import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BoardScreen } from '../components/board/BoardScreen';
import { WorldMap } from '../components/map/WorldMap';
import { createGame } from '../engine/reducer';

describe('board controls', () => {
  it('shows the active player’s current year prominently on the map', () => {
    const player = createGame(['curie'], 1905).players[0];

    render(
      <WorldMap
        players={[player]}
        activePlayer={{ ...player, currentYear: 1898 }}
        selectedLocationId={null}
        onSelectLocation={vi.fn()}
      />,
    );

    const mapHud = screen.getByTestId('map-hud');
    expect(within(mapHud).getByTestId('current-year-display')).toBeVisible();
    expect(within(mapHud).getByTestId('jump-to-current-city-btn')).toBeVisible();
    expect(screen.getByRole('status', { name: 'Current year 1898' })).toBeVisible();
    expect(screen.getByTestId('current-year-display')).toHaveTextContent('1898');
  });

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
