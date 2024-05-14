import { test, chromium, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
import { runLoginTest } from './func/runLoginTest.js';
import { getConfirmationLinkFromMailHog } from './func/getConfirmationLinkFromMailHog.js';
import { fillField } from '../components/fillField.js';
import { runSignupTest } from './func/runSignupTest.js';
import {
	generateRandomUsername,
	generateRandomEmail,
	generateRandomPassword
} from '../utils/functionUtils.js';

let username, email, password;

function initializeConstants() {
	if (!username) {
		username = generateRandomUsername();
	}
	if (!email) {
		email = generateRandomEmail();
	}
	if (!password) {
		password = generateRandomPassword();
	}
}

initializeConstants();

let browser;

test.beforeAll(async () => {
	browser = await chromium.launch({ headless: false, devtools: true });
});

test.afterAll(async () => {
	await browser.close();
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
		await page.goto('https://localhost:1000/signup', { waitUntil: 'networkidle' });
		console.log(username);
		console.log(email);
		console.log(password);
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
		await page.goto('https://localhost:1000/signup', { waitUntil: 'networkidle' });

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
		await page.goto('https://localhost:1000/login', { waitUntil: 'networkidle' });
		const browser = await chromium.launch({ headless: false });

		await runLoginTest(
			page,
			email,
			password,
			'Your Email has not been verified, please check your mailbox X'
		);

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
		await page.goto('https://localhost:1000/forgot-password', { waitUntil: 'networkidle' });
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

		// Wait for a redirection or success message; this part can be customized based on your application
		const errorMessageElement = await page.waitForSelector('.notification', { timeout: 60000 });
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

		// Wait for a redirection or success message; this part can be customized based on your application
		const errorMessageElement = await page.waitForSelector('.notification', { timeout: 60000 });
		const errorMessageText = await errorMessageElement.textContent();
		expect(errorMessageText).toBe('Your Email has not been verified, please check your mailbox X');
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

		// Attends et vérifie la notification sur la nouvelle page
		const errorMessageElement = await newPage.waitForSelector('.notification');
		const errorMessageText = await errorMessageElement.textContent();
		expect(errorMessageText).toBe('Your Email has been verified X');

		await browser.close();
	});

	// Test for login functionality with incorrect credentials
	test('LOGIN - Wrong Credentials - LOGIN_FAILURE_PASSWORD', async () => {
		const browser = await chromium.launch({ headless: false });
		const newPage = await browser.newPage();

		// Navigate to the login page
		await newPage.goto('https://localhost:1000/login', { waitUntil: 'networkidle' });

		await runLoginTest(newPage, email, 'sdrg', 'wrong identifiants X');

		await browser.close();
	});

	// Test login functionality with correct credentials
	test('LOGIN - Login successful and logout - LOGIN_VALIDE_AND_LOGOUT', async () => {
		const browser = await chromium.launch({ headless: false });
		const newPage = await browser.newPage();

		// Navigate to the login page
		await newPage.goto('https://localhost:1000/login', { waitUntil: 'networkidle' });

		await runLoginTest(newPage, email, password, 'Welcome ! X');

		await newPage.click('[data-testid="button-close-notification"]');

		// Attendre que le bouton soit visible
		await newPage.waitForSelector('[data-testid="button-logout"]', { state: 'visible' });

		// Cliquer sur le bouton
		await newPage.click('[data-testid="button-logout"]');

		// Wait for a redirection or success message; this part can be customized based on your application
		const errorMessageElement = await newPage.waitForSelector('.notification', { timeout: 60000 });
		const errorMessageText = await errorMessageElement.textContent();
		expect(errorMessageText).toBe('Logout X');

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
		await page.goto('https://localhost:1000/forgot-password', { waitUntil: 'networkidle' });
	});

	test.afterEach(async () => {
		await page.close();
	});

	test.afterAll(async () => {
		await browser.close();
	});

	test('FORGOT_PASSWORD - envoi de la demande email forgot password - VALID_EMAIL', async () => {
		// Remplir le champ email avec une adresse email valide et vérifiée
		await fillField(page, '#email', email);
		await page.click('button[type="button"]');

		// Vérifier le message de succès
		const successMessageElement = await page.waitForSelector('.notification');
		const successMessageText = await successMessageElement.textContent();
		expect(successMessageText).toBe('Email sent to reset your forgot password X');
	});

	test('CONFIRM_PASSWORD_RESET INVALID', async () => {
		// Récupérer le lien de confirmation depuis Mailtrap
		const confirmationLink = await getConfirmationLinkFromMailHog();
		if (!confirmationLink) {
			throw new Error('Confirmation link is undefined.');
		}

		// Ouvrir une nouvelle page et naviguer vers le lien de confirmation
		page = await browser.newPage();
		await page.goto(confirmationLink, { waitUntil: 'networkidle' });

		// Remplir le formulaire de réinitialisation du mot de passe
		await fillField(page, '#newPassword', 'NewSecurePassword8!');
		await fillField(page, '#confirmPassword', 'NewSecurePasswor');
		await page.click('button[type="button"]');

		// Vérifier que le mot de passe a bien été réinitialisé
		const successMessageElement = await page.waitForSelector('.notification');
		const successMessageText = await successMessageElement.textContent();
		expect(successMessageText).toBe('Passwords do not match X');

		await page.close();
	});

	test('CONFIRM_PASSWORD_RESET', async () => {
		// Récupérer le lien de confirmation depuis Mailtrap
		const confirmationLink = await getConfirmationLinkFromMailHog();
		if (!confirmationLink) {
			throw new Error('Confirmation link is undefined.');
		}

		// Ouvrir une nouvelle page et naviguer vers le lien de confirmation
		page = await browser.newPage();
		await page.goto(confirmationLink, { waitUntil: 'networkidle' });

		// Remplir le formulaire de réinitialisation du mot de passe
		await fillField(page, '#newPassword', 'NewSecurePassword8!');
		await fillField(page, '#confirmPassword', 'NewSecurePassword8!');
		await page.click('button[type="button"]');

		// Vérifier que le mot de passe a bien été réinitialisé
		const successMessageElement = await page.waitForSelector('.notification');
		const successMessageText = await successMessageElement.textContent();
		expect(successMessageText).toBe('Your password has been successfully updated X');

		await page.close();
	});
});
