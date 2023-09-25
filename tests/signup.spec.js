import { test, chromium, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

async function runSignupTest(page, username, email, password, expectedMessage) {
	// Focus et remplissage des champs
	await page.focus('#username');
	await page.keyboard.type(username);
	await page.waitForTimeout(200);

	await page.focus('#email');
	await page.keyboard.type(email);
	await page.waitForTimeout(200);

	await page.focus('#password');
	await page.keyboard.type(password);
	await page.waitForTimeout(200);

	// Submit
	await page.click('button[type="submit"]');

	// Attente du message d'erreur
	const errorMessageElement = await page.waitForSelector('.notification');

	// Vérification du message d'erreur
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe(expectedMessage);
}

test.describe('Signup Tests Invalid', () => {
	let browser, page;

	test.beforeAll(async () => {
		browser = await chromium.launch({ headless: false });
	});

	test.beforeEach(async () => {
		page = await browser.newPage();
		await page.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });
	});

	test.afterEach(async () => {
		await page.close();
	});

	test.afterAll(async () => {
		await browser.close();
	});

	test('USERNAME_REQUIRED', async () => {
		await runSignupTest(page, '', 'newuser@example.com', 'Newpassword8,', 'Username is required X');
	});

	test('VALID_USERNAME', async () => {
		await runSignupTest(
			page,
			'N',
			'newuser@example.com',
			'Newpassword8,',
			'Username must be between 3 and 20 characters X'
		);
	});

	test('VALID_EMAIL', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuserexample.com',
			'Newpassword8,',
			'The email is not valid X'
		);
	});

	test('NUMBE_CARAC_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'Ne8,',
			'The password must have at least 8 characters X'
		);
	});

	test('MIN_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'NQSEGQ558,',
			'The password must contain at least one lowercase letter X'
		);
	});

	test('MAJ_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'ewpasdrg8,',
			'The password must contain at least one uppercase letter X'
		);
	});

	test('NUMBER_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'eNMasdrg,',
			'The password must contain at least one number X'
		);
	});

	test('SPECIAL_CARAC_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'ewDasdrg8',
			'The password must contain at least one special character X'
		);
	});

	test('SUCCESS_INSCRIPTION', async () => {
		await runSignupTest(
			page,
			'Name',
			process.env.VITE_MAIL,
			'Password8,',
			'you received an email to validate your account X'
		);
	});

	test('EMAIL_EXIST', async () => {
		await runSignupTest(
			page,
			'Name',
			process.env.VITE_MAIL,
			'Password8,',
			'This email already exists X'
		);
	});
});
