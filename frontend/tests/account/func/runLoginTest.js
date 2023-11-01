import { fillField } from '../../components/fillField.js';
import { expect } from '@playwright/test';

export async function runLoginTest(page, email, password, expectedMessage) {
	await fillField(page, '[data-testid="email-input"]', email);
	await fillField(page, '[data-testid="password-input"]', password);

	await page.waitForSelector('button[type="submit"]:enabled');
	await page.click('button[type="submit"]');

	// Wait for a redirection or success message; this part can be customized based on your application
	const errorMessageElement = await page.waitForSelector('.notification', { timeout: 60000 });
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe(expectedMessage);
}
