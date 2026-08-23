import { test, expect } from '@playwright/test';

/**
 * Full playthrough smoke test: title → character select → move on the map →
 * perform actions → complete a project → resolve an historical event →
 * advance chapters → reach final scoring. Uses a single player (Marie Curie)
 * so the whole biography can be played out in one deterministic pass.
 */
test('a complete game can be played from character selection to final scoring', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => consoleErrors.push(String(err)));

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'The Shape of a Century' })).toBeVisible();

  // Title -> Setup
  await page.getByTestId('new-game-btn').click();
  await expect(page.getByRole('heading', { name: 'New Game' })).toBeVisible();
  await page.getByTestId('continue-setup-btn').click(); // defaults: 1 player, full game

  // Character select -> pick Marie Curie
  await expect(page.getByRole('heading', { name: 'Choose Your Scientists' })).toBeVisible();
  await page.getByTestId('char-curie').click();
  await page.getByTestId('begin-game-btn').click();

  // Tutorial overlay (first run) -> click through
  const tutorialNext = page.getByTestId('tutorial-next-btn');
  for (let i = 0; i < 4; i++) {
    if (await tutorialNext.isVisible().catch(() => false)) {
      await tutorialNext.click();
    }
  }

  // Board loaded: Formation chapter, Warsaw.
  await expect(page.getByText('Marie Curie', { exact: true }).first()).toBeVisible();
  await expect(page.getByText(/Formation/).first()).toBeVisible();

  // Regional overview and detail tabs keep dense clusters individually clickable.
  await expect(page.getByRole('tab', { name: 'Europe' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tab', { name: 'Overview' })).toHaveAttribute('aria-selected', 'true');
  await page.getByRole('tab', { name: 'United States' }).click();
  await page.getByRole('tab', { name: 'Northeast & D.C.' }).click();
  await expect(page.getByTestId('map-location-princeton')).toBeVisible();
  await expect(page.getByTestId('map-location-paris')).toHaveCount(0);
  await page.getByRole('tab', { name: 'Europe' }).click();
  await page.getByRole('tab', { name: 'Central Europe' }).click();

  // Perform actions: earn funds, then move on the map to Paris.
  await page.getByTestId('action-teach-or-earn').click();
  await page.getByTestId('map-location-paris').click();
  await expect(page.getByTestId('travel-confirm-btn')).toBeVisible();
  await page.getByTestId('travel-confirm-btn').click();

  // End Formation chapter -> Education chapter reveals a Context Card.
  await page.getByTestId('end-chapter-btn').click();
  const contextCardContinue = page.getByTestId('context-card-continue');
  if (await contextCardContinue.isVisible().catch(() => false)) {
    await contextCardContinue.click();
  }
  await expect(page.getByText(/Education/).first()).toBeVisible();

  // End Education chapter -> Entry chapter, where Curie's first projects unlock.
  await page.getByTestId('end-chapter-btn').click();
  await expect(page.getByText(/Entry into the Profession/).first()).toBeVisible();

  // Earn Funds (Paris's Sorbonne post pays well), then build up Evidence tokens via Experiment.
  await page.getByTestId('action-teach-or-earn').click();
  const experimentBtn = page.getByTestId('action-experiment-evidence');
  await experimentBtn.click();
  await experimentBtn.click();

  // Complete the "Systematic Radiation Measurement" project once eligible.
  const attemptBtn = page.getByTestId('attempt-project-curie-radiation-measurement');
  await expect(attemptBtn).toBeVisible();
  // If still too early in the chapter, rest to advance the in-chapter year.
  const restBtn = page.getByTestId('action-rest');
  for (let i = 0; i < 3 && (await attemptBtn.isDisabled()); i++) {
    if (await restBtn.isEnabled()) await restBtn.click();
  }
  if (await attemptBtn.isEnabled()) {
    await attemptBtn.click();
    await expect(page.getByText('Completed').first()).toBeVisible();
  }

  // Advance through the remaining chapters to reach final scoring. A
  // historical event (World War I) fires automatically during Curie's
  // Crisis chapter without any special handling required from the player.
  for (let i = 0; i < 10; i++) {
    const endBtn = page.getByTestId('end-chapter-btn');
    if (!(await endBtn.isVisible().catch(() => false))) break;
    if (await endBtn.isDisabled()) {
      const continueBtn = page.getByTestId('context-card-continue');
      if (await continueBtn.isVisible().catch(() => false)) {
        await continueBtn.click();
      }
    }
    if (await endBtn.isEnabled()) {
      await endBtn.click();
    }
    const cardBtn = page.getByTestId('context-card-continue');
    if (await cardBtn.isVisible().catch(() => false)) {
      await cardBtn.click();
    }
    if (await page.getByTestId('endgame-screen').isVisible().catch(() => false)) break;
  }

  await expect(page.getByTestId('endgame-screen')).toBeVisible({ timeout: 10_000 });
  await expect(page.getByRole('heading', { name: 'The Century Ends' })).toBeVisible();
  await expect(page.getByText(/Legacy:/).first()).toBeVisible();

  const seriousErrors = consoleErrors.filter((e) => !e.includes('favicon'));
  expect(seriousErrors, seriousErrors.join('\n')).toEqual([]);
});
