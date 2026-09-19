import { test, expect, type Page } from '@playwright/test';

async function readStory(page: Page) {
  for (let i = 0; i < 300; i++) {
    if (!(await page.getByTestId('story-page').isVisible().catch(() => false))) return;
    const choice = page.locator('.story-choice').first();
    if (await choice.isVisible().catch(() => false)) { await choice.click(); continue; }
    await page.getByTestId('story-continue').click();
  }
}

test('the work is on the screen and the years wear a life down', async ({ page }) => {
  test.setTimeout(120_000);
  const errors: string[] = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.route('**/api/story-image', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{}' }));

  await page.goto('/');
  await page.getByTestId('new-game-btn').click();
  await page.getByTestId('continue-setup-btn').click();
  await page.getByTestId('char-einstein').click();
  await page.getByTestId('begin-game-btn').click();
  const tutorialNext = page.getByTestId('tutorial-next-btn');
  for (let i = 0; i < 5; i++) if (await tutorialNext.isVisible().catch(() => false)) await tutorialNext.click();
  await readStory(page);

  await expect(page.getByTestId('turn-study')).toBeVisible();

  const goals = page.locator('[data-testid^="goal-"]').filter({ hasNot: page.locator('button') });
  console.log('GOALS AT START:', (await page.locator('.goal').allInnerTexts()).join(' || '));

  // Grind until the work stops being possible.
  let grind = 0;
  for (; grind < 60; grind++) {
    const readIt = page.getByRole('button', { name: 'Read it' });
    if (await readIt.isVisible().catch(() => false)) { await readIt.click(); await readStory(page); continue; }
    const study = page.getByTestId('turn-study');
    if (!(await study.isVisible().catch(() => false))) {
      const moveOn = page.getByTestId('turn-end-chapter');
      if (await moveOn.isVisible().catch(() => false)) { await moveOn.click(); await readStory(page); continue; }
      break;
    }
    if (!(await study.isEnabled())) break;
    await study.click();
    await readStory(page);
    if (await page.locator('.turn__warning').isVisible().catch(() => false)) break;
  }
  console.log('GRIND TURNS BEFORE STRAIN:', grind);
  console.log('WARNING:', await page.locator('.turn__warning').innerText().catch(() => '(none)'));
  console.log('LEDGER:', await page.locator('.turn__ledger').innerText().catch(() => '(none)'));
  console.log('STATS:', await page.locator('.turn__stats').innerText());
  console.log('GOALS NOW:', (await page.locator('.goal').allInnerTexts()).join(' || '));

  expect(errors.filter((e) => !/favicon|story-image/i.test(e))).toEqual([]);
});
