import { test, expect } from '@playwright/test';
test.describe('test mpn spa', () => {
  test('MPN Lookup title', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const titleLabel = await page.getByTestId('mpn-lookup-title');
    const titleVisible = await titleLabel.isVisible();
    expect(titleVisible).toBeTruthy();
  });

  test.describe('About section', () => {
    test.describe('test link navigation works', () => {
      test('QT Info page link works', async ({ page }) => {
        // Find the link, click it, verify new page, go back, verify back on app page
        await page.goto('http://localhost:3000/');
        const qtInfoLink = await page.getByTestId('qtlink');
        await qtInfoLink.click();
        await page.waitForURL('**/quanti-tray-system/', { timeout: 10000 });
        const qtInfoHeader = await page.locator(
          '#page-top > div.page-content > div > div:nth-child(1) > div:nth-child(2) > h1'
        );
        expect(await qtInfoHeader.isVisible()).toBeTruthy();
        await page.goBack({ timeout: 5000 });
        expect(await qtInfoLink.isVisible()).toBeTruthy();
      });

      test('MPN Generator page link works', async ({ page }) => {
        // Find the link, click it, verify new page, go back, verify back on app page
        await page.goto('http://localhost:3000/');
        const qtInfoLink = await page.getByTestId('mpngen');
        await qtInfoLink.click();
        await page.waitForURL('**/mpn-generator/', { timeout: 10000 });
        const mpnInfoHeader = await page.locator(
          '#page-top > div.page-content > div > div:nth-child(1) > div:nth-child(2) > h1'
        );
        expect(await mpnInfoHeader.isVisible()).toBeTruthy();
        await page.goBack({ timeout: 5000 });
        expect(await qtInfoLink.isVisible()).toBeTruthy();
      });

      // todo : test pdf download link actions
    });
  });

  test('QT section', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const inputPosWells = page.locator('#qtinput');

    // validate static stuff
    await expect(inputPosWells).toBeTruthy();
    await expect(page.getByTestId('qt-conf-label')).toBeTruthy();
    const posWellInput = parseInt(await inputPosWells.inputValue());
    expect(posWellInput).toEqual(0);
    const qtMpnVal = await page.getByTestId('qt-mpn-val').innerText();
    expect(parseInt(qtMpnVal.split(':')[1])).toEqual(0);
    // now let's do something to cause the output to change and verify it...
    // this could be modified to take in the list of values and test everything
    // but that's overkill for this demo
    const testVals = () => {
      return { 51: 146.1, 1: 0.3, 18: 14.1, 33: 37.5 };
    };
    // eslint-disable-next-line guard-for-in
    for (const key in testVals) {
      await inputPosWells.fill(key);
      const newMpnVal = await page.getByTestId('qt-mpn-val').innerText();
      expect(parseFloat(newMpnVal.split(':')[1])).toEqual(testVals[key]);
    }
    await inputPosWells.fill('');
    const emptyValue = await page.getByTestId('empty-value-label').innerText();
    expect(emptyValue).toEqual('Enter valid value please!');
  });

  test('QT2K section', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    expect(1).toEqual(1);
  });

  test('QTLegio section', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    expect(1).toEqual(1);
  });
});
