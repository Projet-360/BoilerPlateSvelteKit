import { test, chromium, expect } from '@playwright/test';

test('USERNAME_REQUIRED', async () => {
	const browser = await chromium.launch({ headless: false });
	const newPage = await browser.newPage();

	// Navigation
	await newPage.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

	// Username
	await newPage.focus('#username');
	await newPage.keyboard.type('');
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
	expect(errorMessageText).toBe('Username is required X');

	await browser.close();
});

test('VALID_USERNAME', async () => {
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

test('VALID_EMAIL', async () => {
	const browser = await chromium.launch({ headless: false });
	const newPage = await browser.newPage();

	// Navigation
	await newPage.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

	// Username
	await newPage.focus('#username');
	await newPage.keyboard.type('Name');
	await newPage.waitForTimeout(200);

	// Email
	await newPage.focus('#email');
	await newPage.keyboard.type('newuserexample.com');
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
	expect(errorMessageText).toBe('The email is not valid X');

	await browser.close();
});

test('NUMBE_CARAC_PASSWORD', async () => {
	const browser = await chromium.launch({ headless: false });
	const newPage = await browser.newPage();

	// Navigation
	await newPage.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

	// Username
	await newPage.focus('#username');
	await newPage.keyboard.type('Name');
	await newPage.waitForTimeout(200);

	// Email
	await newPage.focus('#email');
	await newPage.keyboard.type('newuser@example.com');
	await newPage.waitForTimeout(200);

	// Password
	await newPage.focus('#password');
	await newPage.keyboard.type('Ne8,');
	await newPage.waitForTimeout(200);

	// Submit
	await newPage.click('button[type="submit"]');

	// Wait for error message
	const errorMessageElement = await newPage.waitForSelector('.notification');

	// Verify error message text
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe('The password must have at least 8 characters X');

	await browser.close();
});

test('MIN_PASSWORD', async () => {
	const browser = await chromium.launch({ headless: false });
	const newPage = await browser.newPage();

	// Navigation
	await newPage.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

	// Username
	await newPage.focus('#username');
	await newPage.keyboard.type('Name');
	await newPage.waitForTimeout(200);

	// Email
	await newPage.focus('#email');
	await newPage.keyboard.type('newuser@example.com');
	await newPage.waitForTimeout(200);

	// Password
	await newPage.focus('#password');
	await newPage.keyboard.type('NQSEGQ558,');
	await newPage.waitForTimeout(200);

	// Submit
	await newPage.click('button[type="submit"]');

	// Wait for error message
	const errorMessageElement = await newPage.waitForSelector('.notification');

	// Verify error message text
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe('The password must contain at least one lowercase letter X');

	await browser.close();
});

test('MAJ_PASSWORD', async () => {
	const browser = await chromium.launch({ headless: false });
	const newPage = await browser.newPage();

	// Navigation
	await newPage.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

	// Username
	await newPage.focus('#username');
	await newPage.keyboard.type('Name');
	await newPage.waitForTimeout(200);

	// Email
	await newPage.focus('#email');
	await newPage.keyboard.type('newuser@example.com');
	await newPage.waitForTimeout(200);

	// Password
	await newPage.focus('#password');
	await newPage.keyboard.type('ewpasdrg8,');
	await newPage.waitForTimeout(200);

	// Submit
	await newPage.click('button[type="submit"]');

	// Wait for error message
	const errorMessageElement = await newPage.waitForSelector('.notification');

	// Verify error message text
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe('The password must contain at least one uppercase letter X');

	await browser.close();
});

test('NUMBER_PASSWORD', async () => {
	const browser = await chromium.launch({ headless: false });
	const newPage = await browser.newPage();

	// Navigation
	await newPage.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

	// Username
	await newPage.focus('#username');
	await newPage.keyboard.type('Name');
	await newPage.waitForTimeout(200);

	// Email
	await newPage.focus('#email');
	await newPage.keyboard.type('newuser@example.com');
	await newPage.waitForTimeout(200);

	// Password
	await newPage.focus('#password');
	await newPage.keyboard.type('eNMasdrg,');
	await newPage.waitForTimeout(200);

	// Submit
	await newPage.click('button[type="submit"]');

	// Wait for error message
	const errorMessageElement = await newPage.waitForSelector('.notification');

	// Verify error message text
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe('The password must contain at least one number X');

	await browser.close();
});

test('SPECIAL_CARAC_PASSWORD', async () => {
	const browser = await chromium.launch({ headless: false });
	const newPage = await browser.newPage();

	// Navigation
	await newPage.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

	// Username
	await newPage.focus('#username');
	await newPage.keyboard.type('Name');
	await newPage.waitForTimeout(200);

	// Email
	await newPage.focus('#email');
	await newPage.keyboard.type('newuser@example.com');
	await newPage.waitForTimeout(200);

	// Password
	await newPage.focus('#password');
	await newPage.keyboard.type('ewDasdrg8');
	await newPage.waitForTimeout(200);

	// Submit
	await newPage.click('button[type="submit"]');

	// Wait for error message
	const errorMessageElement = await newPage.waitForSelector('.notification');

	// Verify error message text
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe('The password must contain at least one special character X');

	await browser.close();
});
