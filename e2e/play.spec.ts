import { test, expect, type Page } from '@playwright/test';

async function readStory(page: Page) {
  for (let i = 0; i < 300; i++) {
    if (!(await page.getByTestId('story-page').isVisible().catch(() => false))) return;
    const choice = page.locator('.story-choice').first();
    if (await choice.isVisible().catch(() => false)) { await choice.click(); continue; }
    await page.getByTestId('story-continue').click();
  }
}

/** Anything the year is holding up: a scene to read, or post to open. */
async function settle(page: Page) {
  await readStory(page);
  const mail = page.getByTestId('turn-read-cards');
  if (await mail.isVisible().catch(() => false)) {
    await mail.click();
    await readStory(page);
  }
}

test('the year is one screen, and the work on it wears a life down', async ({ page }) => {
  test.setTimeout(90_000);
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

  // A scene arrives over the year rather than instead of it: the picture, the
  // name and the line are on top, and the year is still underneath.
  await expect(page.locator('.scene__frame')).toBeVisible();
  await expect(page.locator('.scene__art')).toBeVisible();
  await expect(page.locator('.turn')).toBeAttached();
  await readStory(page);

  // Back on the year, every part of the reference's layout is present.
  await expect(page.locator('.status')).toBeVisible();
  await expect(page.locator('.stage__portrait')).toBeVisible();
  await expect(page.locator('.tokens')).toBeVisible();
  await expect(page.locator('.vitality')).toBeVisible();
  await expect(page.getByTestId('turn-study')).toBeVisible();
  await expect(page.locator('.aims .aim').first()).toBeVisible();

  // Work year after year and the life runs down. Childhood is free, so this
  // has to run past it; when a chapter's years are gone, move on and keep going.
  let worn = false;
  for (let i = 0; i < 40 && !worn; i++) {
    await settle(page);
    if (await page.locator('.turn__warning').isVisible().catch(() => false)) { worn = true; break; }

    const study = page.getByTestId('turn-study');
    if ((await study.isVisible().catch(() => false)) && (await study.isEnabled())) {
      await study.click();
      continue;
    }

    const moveOn = page.getByTestId('turn-end-chapter');
    if ((await moveOn.isVisible().catch(() => false)) && (await moveOn.isEnabled())) {
      await moveOn.click();
      continue;
    }
    break;
  }
  expect(worn, 'a life that only ever works should end up worn down').toBe(true);
  await expect(page.locator('.turn__warning')).toBeVisible();

  expect(errors.filter((e) => !/favicon|story-image/i.test(e))).toEqual([]);
});
