import { test, chromium, expect } from '@playwright/test';

test('should register a new user', async () => {
	const browser = await chromium.launch({ headless: false });
	const newPage = await browser.newPage();

	// Suppression du try/catch pour permettre à Playwright de gérer les erreurs.
	await newPage.goto('http://localhost:5173/signup');
	await newPage.fill('input[placeholder="Username"]', '');
	await newPage.fill('input[placeholder="Email"]', 'newuser@example.com');
	await newPage.fill('input[placeholder="Password"]', 'Newpassword8,');
	await newPage.click('button[type="submit"]');

	const notificationElement = await newPage.waitForSelector('.notification');
	const notificationText = await notificationElement.textContent();

	// Assertion pour vérifier le texte de la notification.
	expect(notificationText).toBe('Username is required X');

	await browser.close();
});
