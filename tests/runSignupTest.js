import { fillField } from './fillField.js';
import { expect } from '@playwright/test';

export async function runSignupTest(page, username, email, password, expectedMessage) {
	await fillField(page, '#username', username);
	await fillField(page, '#email', email);
	await fillField(page, '#password', password);

	await page.waitForSelector('button[type="submit"]:enabled');
	await page.click('button[type="submit"]');

	const errorMessageElement = await page.waitForSelector('.notification');
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe(expectedMessage);
}
