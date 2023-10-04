import { test, chromium, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

import { getConfirmationLinkFromMailHog } from './func/getConfirmationLinkFromMailHog.js';
import { fillField } from '../components/fillField.js';
import { runSignupTest } from './func/runSignupTest.js';
import {
	generateRandomUsername,
	generateRandomEmail,
	generateRandomPassword
} from '../utils/functionUtils.js';

const username = generateRandomUsername();
const email = generateRandomEmail();
const password = generateRandomPassword();

let browser;

test.beforeAll(async () => {
	browser = await chromium.launch({ headless: false, devtools: true });
});

test.afterAll(async () => {
	await browser.close();
});

test.describe.parallel('Signup validation Tests', () => {
	let page;

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

	// Test for empty username field, expecting a 'Username is required' message
	test('LOGIN - empty username - USERNAME_REQUIRED', async () => {
		await runSignupTest(page, '', 'newuser@example.com', 'Newpassword8,', 'Username is required X');
	});

	// Test for invalid username length, expecting a message indicating the username length requirements
	test('LOGIN - invalid username - VALID_USERNAME', async () => {
		await runSignupTest(
			page,
			'N', // Only one character, which is invalid
			'newuser@example.com',
			'Newpassword8,',
			'Username must be between 3 and 20 characters X'
		);
	});

	// Test for invalid email format, expecting a 'The email is not valid' message
	test('LOGIN - invalid email - VALID_EMAIL', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuserexample.com', // Invalid email format
			'Newpassword8,',
			'The email is not valid X'
		);
	});

	// Test for short password length, expecting a message indicating the minimum password length
	test('LOGIN - password too short - NUMBE_CARAC_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'Ne8,', // Short password
			'The password must have at least 8 characters X'
		);
	});

	// Test for password lacking lowercase letters, expecting a message indicating this requirement
	test('LOGIN - password missing lowercase - MIN_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'NQSEGQ558,', // No lowercase letters
			'The password must contain at least one lowercase letter X'
		);
	});

	// Test for password lacking uppercase letters, expecting a message indicating this requirement
	test('LOGIN - password missing uppercase - MAJ_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'ewpasdrg8,', // No uppercase letters
			'The password must contain at least one uppercase letter X'
		);
	});

	// Test for password lacking numbers, expecting a message indicating this requirement
	test('LOGIN - password missing number - NUMBER_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'eNMasdrg,', // No numbers
			'The password must contain at least one number X'
		);
	});

	// Test for password lacking special characters, expecting a message indicating this requirement
	test('LOGIN - password missing special character - SPECIAL_CARAC_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'ewDasdrg8', // No special characters
			'The password must contain at least one special character X'
		);
	});
});

test.describe.serial('Signup Tests', () => {
	let page;

	test.beforeAll(async () => {
		browser = await chromium.launch({ headless: false });
	});

	test.afterEach(async () => {
		await page.close();
	});

	test.afterAll(async () => {
		await browser.close();
	});

	test('SIGNUP - inscription avec succés - SUCCESS_INSCRIPTION', async () => {
		page = await browser.newPage();
		await page.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

		await runSignupTest(
			page,
			username,
			email,
			password,
			'you received an email to validate your account X'
		);
	});

	test('SIGNUP - Email déjà inscrit - EMAIL_EXIST', async () => {
		page = await browser.newPage();
		await page.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

		await runSignupTest(page, username, email, password, 'This email already exists X');
	});
});

test.describe.serial('Email Verification and Login Tests', () => {
	let page;

	test.beforeAll(async () => {
		browser = await chromium.launch({ headless: false });
		page = await browser.newPage();
	});

	test.afterEach(async () => {
		await page.close();
	});

	test.afterAll(async () => {
		await browser.close();
	});

	// Test for trying to login with an email that has not been verified yet
	test('LOGIN - Email not yet verified - EMAIL_NOT_VERIFIED_LOGIN', async () => {
		// Navigate to the login page
		await page.goto('http://localhost:5173/login', { waitUntil: 'networkidle' });
		const browser = await chromium.launch({ headless: false });

		// Fill in the email and password fields
		await fillField(page, '[data-testid="email-input"]', email);
		await fillField(page, '[data-testid="password-input"]', password);

		// Submit the form
		await page.waitForSelector('[data-testid="submit-button"]:enabled');
		await page.getByTestId('submit-button').click();

		// Wait for a redirection or success message; this part can be customized based on your application
		const errorMessageElement = await page.waitForSelector('.notification');

		// Verify the error message
		const errorMessageText = await errorMessageElement.textContent();
		expect(errorMessageText).toBe('Your Email has not been verified, please check your mailbox X');

		await browser.close();
	});
});

test.describe.serial('Password Reset Tests', () => {
	let page;

	test.beforeAll(async () => {
		browser = await chromium.launch({ headless: false });
	});

	test.beforeEach(async () => {
		page = await browser.newPage();
		await page.goto('http://localhost:5173/forgot-password', { waitUntil: 'networkidle' });
	});

	test.afterEach(async () => {
		await page.close();
	});

	test.afterAll(async () => {
		await browser.close();
	});

	// Test for forgotten password functionality with an invalid email
	test('FORGOT-PASSWORD - Non-existent Email - INVALID_EMAIL', async () => {
		// Fill in the email field with an invalid email address
		await fillField(page, '#email', 'invalidemail@example.com');

		// Wait for the submit button to be enabled and click it
		await page.waitForSelector('[data-testid="submit-button"]:enabled');
		await page.getByTestId('submit-button').click();

		// Verify the error message
		const errorMessageElement = await page.waitForSelector('.notification');
		const errorMessageText = await errorMessageElement.textContent();
		expect(errorMessageText).toBe('User not found X');
	});

	// Test for forgotten password functionality with an unverified email
	test('FORGOT-PASSWORD - Unverified Email - UNVERIFIED_EMAIL', async () => {
		// Fill in the email field with an unverified email address
		await fillField(page, '#email', email);

		// Wait for the submit button to be enabled and click it
		await page.waitForSelector('[data-testid="submit-button"]:enabled');
		await page.getByTestId('submit-button').click();

		// Verify the error or success message, depending on the expected behavior
		const messageElement = await page.waitForSelector('.notification');
		const messageText = await messageElement.textContent();
		expect(messageText).toBe('Your Email has not been verified, please check your mailbox X');
	});
});

test.describe.serial('Email Verification and Login Tests', () => {
	let page;

	test.beforeAll(async () => {
		browser = await chromium.launch({ headless: false });
		page = await browser.newPage();
	});

	test.afterEach(async () => {
		await page.close();
	});

	test.afterAll(async () => {
		await browser.close();
	});

	// Test for email confirmation functionality
	test('EMAIL - Confirm via Email - CONFIRM_EMAIL', async () => {
		const browser = await chromium.launch({ headless: false });
		const newPage = await browser.newPage();

		// Fetch the confirmation link from MailHog
		const confirmationLink = await getConfirmationLinkFromMailHog();
		if (!confirmationLink) {
			throw new Error('Confirmation link is undefined.');
		}

		// Navigate to the confirmation link
		await newPage.goto(confirmationLink);

		// Wait for the header to appear and verify its text
		const headerElement = await newPage.waitForSelector('h1');
		const headerText = await headerElement.textContent();
		expect(headerText).toBe('Check in progress...');

		// Wait for the notification to appear and verify its text
		const notificationElement = await newPage.waitForSelector('.notification');
		const notificationText = await notificationElement.textContent();
		expect(notificationText).toBe('Your email address has been successfully verified X');

		await browser.close();
	});

	// Test for login functionality with incorrect credentials
	test('LOGIN - Wrong Credentials - LOGIN_FAILURE_PASSWORD', async () => {
		const browser = await chromium.launch({ headless: false });
		const newPage = await browser.newPage();

		// Navigate to the login page
		await newPage.goto('http://localhost:5173/login');

		// Fill in the email and password fields with incorrect data
		await newPage.focus('[data-testid="email-input"]');
		await newPage.keyboard.type(email);
		await newPage.waitForTimeout(200);

		await newPage.focus('[data-testid="password-input"]');
		await newPage.keyboard.type('sdrg');
		await newPage.waitForTimeout(200);

		// Submit the form
		await newPage.click('button[type="submit"]');

		// Wait for a failure notification to appear
		const notificationElement = await newPage.waitForSelector('.notification');
		const notificationText = await notificationElement.textContent();

		// Verify that the login has failed
		expect(notificationText).toBe('wrong identifiants X');

		await browser.close();
	});
});

test.describe.serial('Password Reset Tests', () => {
	let page;

	test.beforeAll(async () => {
		browser = await chromium.launch({ headless: false });
	});

	test.beforeEach(async () => {
		page = await browser.newPage();
		await page.goto('http://localhost:5173/forgot-password', { waitUntil: 'networkidle' });
	});

	test.afterEach(async () => {
		await page.close();
	});

	test.afterAll(async () => {
		await browser.close();
	});

	// Test for Forgot Password functionality with valid and verified email
	test('FORGOT_PASSWORD - Send Forgot Password Request Email - VALID_EMAIL', async () => {
		// Fill in the email field with a valid and verified email address
		await fillField(page, '#email', email);
		await page.click('button[type="button"]');

		// Wait for and verify the success message
		const successMessageElement = await page.waitForSelector('.notification');
		const successMessageText = await successMessageElement.textContent();
		expect(successMessageText).toBe('Email sent to reset your forgot password X');
	});

	// Test for Confirming Password Reset
	test('CONFIRM_PASSWORD_RESET', async () => {
		// Retrieve the confirmation link from Mailtrap (or MailHog as per your code)
		const confirmationLink = await getConfirmationLinkFromMailHog();
		if (!confirmationLink) {
			throw new Error('Confirmation link is undefined.');
		}

		// Open a new page and navigate to the confirmation link
		page = await browser.newPage();
		await page.goto(confirmationLink, { waitUntil: 'networkidle' });

		// Fill in the new password and confirm password fields
		await fillField(page, '#newPassword', 'NewSecurePassword8!');
		await fillField(page, '#confirmPassword', 'NewSecurePassword8!');
		await page.click('button[type="button"]');

		// Verify that the password has been successfully reset
		const successMessageElement = await page.waitForSelector('.notification');
		const successMessageText = await successMessageElement.textContent();
		expect(successMessageText).toBe('Your email has been successfully updated X');

		await page.close();
	});
});
