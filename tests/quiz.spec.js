const { test, expect } = require('@playwright/test');

test.describe('Quiz app', () => {
  test('completes quiz and shows perfect score when correct answers are chosen', async ({ page }) => {
    await page.goto('http://localhost:8000/index.html');

    // For each question, pick the button that has the correct indicator after it's revealed.
    // Our app marks correct answers by adding `.correct` class immediately after selection.
    for (let i = 0; i < 10; i++) {
      // Wait for answers to appear
      await page.waitForSelector('#answer-buttons .answer');

      // Find the button whose text corresponds to the known correct answer from the file
      // We'll select by reading the button text and matching the expected correct answers array.
      const expectedCorrects = [
        'Paris',
        'JavaScript',
        'Cascading Style Sheets',
        'Mars',
        'William Shakespeare',
        'H2O',
        'Application Programming Interface',
        '56',
        'Russia',
        'Hydrogen'
      ];

      const correctText = expectedCorrects[i];

      // Click the button that has the correct text
      const buttons = await page.$$('#answer-buttons .answer');
      let clicked = false;
      for (const btn of buttons) {
        const text = (await btn.innerText()).trim();
        if (text === correctText) {
          await btn.click();
          clicked = true;
          break;
        }
      }
      expect(clicked).toBe(true);

      // Click Next / Show Result
      await page.click('#next-btn');
    }

    // Verify result screen and score
    await page.waitForSelector('#result');
    const scoreText = await page.textContent('#score');
    expect(scoreText.trim()).toBe('10 / 10');
  });
});
