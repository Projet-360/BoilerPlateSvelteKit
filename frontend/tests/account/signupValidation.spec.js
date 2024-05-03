import { test, chromium, expect } from '@playwright/test';
import { runSignupTest } from './func/runSignupTest.js';
import {
	generateRandomUsername,
	generateRandomEmail,
	generateRandomPassword
} from '../utils/functionUtils.js';

let browser;
let context;

// Launching a browser for all tests to use
test.beforeAll(async () => {
	browser = await chromium.launch({ headless: false, devtools: true });
	context = await browser.newContext();
});

// Closing the browser after all tests have finished
test.afterAll(async () => {
	await browser.close();
});

test.describe.parallel('Signup Validation Tests', () => {
	let page;

	// Create a new page for each test
	test.beforeEach(async () => {
		page = await context.newPage();
		await page.goto('https://localhost:1000/signup', { waitUntil: 'networkidle' });
	});

	// Clean up after each test
	test.afterEach(async () => {
		await page.close();
	});

	// Define individual tests
	test('SIGNUP - empty username - USERNAME_REQUIRED', async () => {
		const email = generateRandomEmail();
		const password = generateRandomPassword();
		await runSignupTest(page, '', email, password, 'Username is required X');
	});

	test('SIGNUP - invalid username - USERNAME_VALIDATION', async () => {
		const username = 'N'; // Invalid length for username
		const email = generateRandomEmail();
		const password = generateRandomPassword();
		await runSignupTest(
			page,
			username,
			email,
			password,
			'Username must be between 3 and 20 characters X'
		);
	});

	test('SIGNUP - invalid email - EMAIL_VALIDATION', async () => {
		const username = generateRandomUsername();
		const email = 'newuserexample.com'; // Invalid email format
		const password = generateRandomPassword();
		await runSignupTest(page, username, email, password, 'The email is not valid X');
	});

	test('SIGNUP - password too short - PASSWORD_LENGTH', async () => {
		const username = generateRandomUsername();
		const email = generateRandomEmail();
		const password = 'Ne8,'; // Short password
		await runSignupTest(
			page,
			username,
			email,
			password,
			'The password must have at least 8 characters X'
		);
	});

	test('SIGNUP - password missing lowercase - PASSWORD_LOWERCASE', async () => {
		const username = generateRandomUsername();
		const email = generateRandomEmail();
		const password = 'NQSEGQ558,'; // No lowercase letters
		await runSignupTest(
			page,
			username,
			email,
			password,
			'The password must contain at least one lowercase letter X'
		);
	});

	test('SIGNUP - password missing uppercase - PASSWORD_UPPERCASE', async () => {
		const username = generateRandomUsername();
		const email = generateRandomEmail();
		const password = 'ewpasdrg8,'; // No uppercase letters
		await runSignupTest(
			page,
			username,
			email,
			password,
			'The password must contain at least one uppercase letter X'
		);
	});

	test('SIGNUP - password missing number - PASSWORD_NUMBER', async () => {
		const username = generateRandomUsername();
		const email = generateRandomEmail();
		const password = 'eNMasdrg,'; // No numbers
		await runSignupTest(
			page,
			username,
			email,
			password,
			'The password must contain at least one number X'
		);
	});

	test('SIGNUP - password missing special character - PASSWORD_SPECIAL', async () => {
		const username = generateRandomUsername();
		const email = generateRandomEmail();
		const password = 'ewDasdrg8'; // No special characters
		await runSignupTest(
			page,
			username,
			email,
			password,
			'The password must contain at least one special character X'
		);
	});
});
