import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BoardScreen } from '../components/board/BoardScreen';
import { createGame, gameReducer } from '../engine/reducer';
import { previewAction, turnOptions, researchTotal } from '../engine/turn';
import { initializeStoryGame } from '../engine/story';
import { unplayedPresence, scientistsAt } from '../engine/presence';

function einstein() {
  return initializeStoryGame(createGame(['einstein'], 11, 'full'));
}

describe('the turn screen', () => {
  it('opens on the year, not the map, and shows the five numbers', () => {
    render(
      <BoardScreen state={einstein()} dispatch={vi.fn()} onSave={vi.fn()} onRestartGame={vi.fn()} onExitToTitle={vi.fn()} />,
    );
    expect(screen.getByRole('heading', { name: '1879' })).toBeVisible();
    for (const label of ['Research', 'Funds', 'Wellbeing', 'Health', 'Standing']) {
      expect(screen.getByText(label)).toBeVisible();
    }
    expect(screen.queryByTestId('map-hud')).toBeNull();
  });

  it('offers each action with the effect it will really have', () => {
    const state = einstein();
    render(
      <BoardScreen state={state} dispatch={vi.fn()} onSave={vi.fn()} onRestartGame={vi.fn()} onExitToTitle={vi.fn()} />,
    );
    const study = screen.getByTestId('turn-study');
    expect(within(study).getByText(/year/)).toBeVisible();
    // Whatever the card promises must be what the reducer actually does.
    const promised = turnOptions(state, state.players[0]).find((o) => o.id === 'study');
    const actual = previewAction(state, { type: 'GENERATE_TOKEN', kind: 'study' });
    expect(promised?.changes).toEqual(actual.changes);
  });

  it('dispatches the action the card describes', () => {
    const dispatch = vi.fn();
    render(
      <BoardScreen state={einstein()} dispatch={dispatch} onSave={vi.fn()} onRestartGame={vi.fn()} onExitToTitle={vi.fn()} />,
    );
    fireEvent.click(screen.getByTestId('turn-rest'));
    expect(dispatch).toHaveBeenCalledWith({ type: 'REST_AND_FAMILY' });
  });

  it('previews agree with the reducer for every offered action', () => {
    let state = einstein();
    for (const option of turnOptions(state, state.players[0])) {
      if (!option.enabled || option.id === 'funding') continue; // funding is a roll
      const after = gameReducer(state, option.action);
      const player = after.players[0];
      const before = state.players[0];
      const promisedResearch = option.changes.find((c) => c.key === 'research')?.amount ?? 0;
      expect(researchTotal(player) - researchTotal(before), option.id).toBe(promisedResearch);
      const promisedFunds = option.changes.find((c) => c.key === 'funds')?.amount ?? 0;
      expect(player.resources.funds - before.resources.funds, option.id).toBe(promisedFunds);
    }
    void state;
  });

  it('lets the map open on top and come back', () => {
    render(
      <BoardScreen state={einstein()} dispatch={vi.fn()} onSave={vi.fn()} onRestartGame={vi.fn()} onExitToTitle={vi.fn()} />,
    );
    fireEvent.click(screen.getByText('Look at the map'));
    expect(screen.getByTestId('map-hud')).toBeVisible();
    fireEvent.click(screen.getByTestId('back-to-turn-btn'));
    expect(screen.getByRole('heading', { name: '1879' })).toBeVisible();
  });
});

describe('lives crossing', () => {
  it('places an unplayed scientist somewhere every year of their life, not only on route years', () => {
    // Gödel's route names 1930 (Königsberg) and 1931 (Vienna). In 1932, 1935,
    // 1937 — years the route never mentions — he must still be in Vienna.
    expect(unplayedPresence('godel', 1930)?.locationId).toBe('konigsberg');
    for (const year of [1931, 1932, 1935, 1937]) {
      expect(unplayedPresence('godel', year)?.locationId, String(year)).toBe('vienna');
    }
    // And the arrival year is remembered, not just the city.
    expect(unplayedPresence('godel', 1937)?.since).toBe(1931);
    // Nobody is anywhere before they are born.
    expect(unplayedPresence('godel', 1800)).toBeUndefined();
  });

  it('finds the company that makes a journey worth taking', () => {
    const state = einstein();
    const gottingen1915 = scientistsAt(state, 'gottingen', 1915, 'einstein').map((p) => p.characterId);
    expect(gottingen1915).toContain('hilbert');
    expect(gottingen1915).toContain('noether');
    const princeton1946 = scientistsAt(state, 'princeton', 1946, 'einstein').map((p) => p.characterId);
    expect(princeton1946).toContain('godel');
  });
});
