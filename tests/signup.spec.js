import { test, chromium, expect } from '@playwright/test';

test('should register a new user', async () => {
	const browser = await chromium.launch({ headless: false });
	const newPage = await browser.newPage();

	// Navigation
	await newPage.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

	// Username
	await newPage.focus('#username');
	await newPage.keyboard.type('N');
	await newPage.waitForTimeout(200);

	// Email
	await newPage.focus('#email');
	await newPage.keyboard.type('newuser@example.com');
	await newPage.waitForTimeout(200);

	// Password
	await newPage.focus('#password');
	await newPage.keyboard.type('Newpassword8,');
	await newPage.waitForTimeout(200);

	// Submit
	await newPage.click('button[type="submit"]');

	// Wait for error message
	const errorMessageElement = await newPage.waitForSelector('.notification');

	// Verify error message text
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe('Username must be between 3 and 20 characters X');

	await browser.close();
});
