import { fillField } from '../../components/fillField.js';
import { expect } from '@playwright/test';

export async function runSignupTest(page, username, email, password, expectedMessage) {
	await fillField(page, '[data-testid="username-input"]', username);
	await fillField(page, '[data-testid="email-input"]', email);
	await fillField(page, '[data-testid="password-input"]', password);

	await page.waitForSelector('button[type="submit"]:enabled');
	await page.click('button[type="submit"]');

	const errorMessageElement = await page.waitForSelector('.notification');
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe(expectedMessage);
}
