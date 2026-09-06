import { test, expect, type Page } from '@playwright/test';

/** The map lives on top of the turn screen, and a story scene returns you to the year. */
async function ensureMap(page: Page) {
  if (await page.getByTestId('map-hud').isVisible().catch(() => false)) return;
  const open = page.getByText('Look at the map');
  if (await open.isVisible().catch(() => false)) await open.click();
}

/** Clicks a control that lives on the map view, reopening the map if a scene took us back to the year. */
async function clickOnMap(page: Page, testId: string) {
  await ensureMap(page);
  await page.getByTestId(testId).click();
}

/** Reads through whatever story pages are showing, taking the first option at any choice. */
async function readStory(page: Page) {
  for (let i = 0; i < 200; i++) {
    const storyPage = page.getByTestId('story-page');
    if (!(await storyPage.isVisible().catch(() => false))) return;
    const choice = page.locator('.story-choice').first();
    if (await choice.isVisible().catch(() => false)) {
      await choice.click();
      continue;
    }
    await page.getByTestId('story-continue').click();
  }
}

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

  // The live-illustration function only exists on the deployed host; answer it locally
  // the way a run without a gateway key would, so the archival artwork fallback is used.
  await page.route('**/api/story-image', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }));

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

  // The life opens on its prologue and first chapter scene.
  await expect(page.getByTestId('story-page')).toBeVisible();
  await expect(page.getByRole('heading', { name: /./ }).first()).toBeVisible();
  await readStory(page);

  // The turn screen is the default surface: one year, five numbers, and every
  // action carrying the effect it will really have.
  await expect(page.getByTestId('turn-study')).toBeVisible();
  await expect(page.getByTestId('turn-study')).toContainText('Research');
  await expect(page.getByRole('term').filter({ hasText: 'Wellbeing' })).toBeVisible();

  // The map opens on top of it and hands control back.
  await page.getByText('Look at the map').click();
  await expect(page.getByTestId('map-hud')).toBeVisible();

  // Board loaded: Formation chapter, Warsaw.
  await expect(page.getByText('Marie Curie', { exact: true }).first()).toBeVisible();
  await expect(page.getByText(/Formation/).first()).toBeVisible();

  // Regional overview and detail tabs keep dense clusters individually clickable.
  await expect(page.getByRole('tab', { name: 'Europe', exact: true })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tab', { name: 'Overview' })).toHaveAttribute('aria-selected', 'true');
  await page.getByRole('tab', { name: 'United States' }).click();
  await page.getByRole('tab', { name: 'Northeast & D.C.' }).click();
  await expect(page.getByTestId('map-location-princeton')).toBeVisible();
  await expect(page.getByTestId('map-location-paris')).toHaveCount(0);
  await page.getByTestId('jump-to-current-city-btn').click();
  await expect(page.getByRole('tab', { name: 'North & East' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByTestId('map-location-warsaw')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByText('You are here.')).toBeVisible();

  // Restart requires explicit confirmation; cancel keeps the current game intact.
  await page.getByTestId('restart-game-btn').click();
  await expect(page.getByRole('alertdialog', { name: 'Confirm game restart' })).toBeVisible();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await expect(page.getByText(/Formation/).first()).toBeVisible();

  await ensureMap(page);
  await page.getByRole('tab', { name: 'Central Europe' }).click();

  // Perform actions: earn funds, then move on the map to Paris.
  await clickOnMap(page, 'action-teach-or-earn');
  await readStory(page);
  await page.getByTestId('map-location-paris').click();
  await expect(page.getByTestId('travel-confirm-btn')).toBeVisible();
  await page.getByTestId('travel-confirm-btn').click();
  await readStory(page);

  // End Formation chapter: the closing scene plays, then the Education opening.
  await clickOnMap(page, 'end-chapter-btn');
  await readStory(page);
  const contextCardContinue = page.getByTestId('context-card-continue');
  if (await contextCardContinue.isVisible().catch(() => false)) {
    await contextCardContinue.click();
  }
  await readStory(page);
  await expect(page.getByText(/Education/).first()).toBeVisible();

  // End Education chapter -> Entry chapter, where Curie's first projects unlock.
  await clickOnMap(page, 'end-chapter-btn');
  await readStory(page);
  await expect(page.getByText(/Entry into the Profession/).first()).toBeVisible();

  // Earn Funds (Paris's Sorbonne post pays well), then build up Evidence tokens via Experiment.
  await clickOnMap(page, 'action-teach-or-earn');
  await readStory(page);
  await clickOnMap(page, 'action-experiment-evidence');
  await readStory(page);
  await clickOnMap(page, 'action-experiment-evidence');
  await readStory(page);

  // Complete the "Systematic Radiation Measurement" project once eligible.
  await ensureMap(page);
  const attemptBtn = page.getByTestId('attempt-project-curie-radiation-measurement');
  await expect(attemptBtn).toBeVisible();
  // If still too early in the chapter, rest to advance the in-chapter year.
  const restBtn = page.getByTestId('action-rest');
  for (let i = 0; i < 3 && (await attemptBtn.isDisabled()); i++) {
    if (await restBtn.isEnabled()) {
      await clickOnMap(page, 'action-rest');
      await readStory(page);
    }
  }
  if (await attemptBtn.isEnabled()) {
    await clickOnMap(page, 'attempt-project-curie-radiation-measurement');
    await readStory(page);
    await ensureMap(page);
    await expect(page.getByText('Completed').first()).toBeVisible();
  }

  // Advance through the remaining chapters to reach final scoring. A
  // historical event (World War I) fires automatically during Curie's
  // Crisis chapter without any special handling required from the player.
  for (let i = 0; i < 10; i++) {
    await readStory(page);
    await ensureMap(page);
    const endBtn = page.getByTestId('end-chapter-btn');
    if (!(await endBtn.isVisible().catch(() => false))) break;
    if (await endBtn.isDisabled()) {
      const continueBtn = page.getByTestId('context-card-continue');
      if (await continueBtn.isVisible().catch(() => false)) {
        await continueBtn.click();
      }
    }
    if (await endBtn.isEnabled()) {
      await clickOnMap(page, 'end-chapter-btn');
      await readStory(page);
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
