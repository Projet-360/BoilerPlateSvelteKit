import { test, chromium, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

import { getConfirmationLinkFromMailtrap } from './func/getConfirmationLinkFromMailtrap.js';
import { fillField } from '../components/fillField.js';
import { runSignupTest } from './func/runSignupTest.js';

test.describe('Signup validation Tests', () => {
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

	test('LOGIN - username vide - USERNAME_REQUIRED', async () => {
		await runSignupTest(page, '', 'newuser@example.com', 'Newpassword8,', 'Username is required X');
	});

	test('LOGIN - username invalide - VALID_USERNAME', async () => {
		await runSignupTest(
			page,
			'N',
			'newuser@example.com',
			'Newpassword8,',
			'Username must be between 3 and 20 characters X'
		);
	});

	test('LOGIN - email non valide - VALID_EMAIL', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuserexample.com',
			'Newpassword8,',
			'The email is not valid X'
		);
	});

	test('LOGIN - le mot de passe doit avoir plus de 8 caractères - NUMBE_CARAC_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'Ne8,',
			'The password must have at least 8 characters X'
		);
	});

	test('LOGIN - le mot de passe doit avoir une minuscule - MIN_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'NQSEGQ558,',
			'The password must contain at least one lowercase letter X'
		);
	});

	test('LOGIN - le mot de passe doit avoir une majuscule - MAJ_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'ewpasdrg8,',
			'The password must contain at least one uppercase letter X'
		);
	});

	test('LOGIN - le mot de passe doit avoir un chiffre - NUMBER_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'eNMasdrg,',
			'The password must contain at least one number X'
		);
	});

	test('LOGIN - le mot de passe doit avoir un caractère special - SPECIAL_CARAC_PASSWORD', async () => {
		await runSignupTest(
			page,
			'Name',
			'newuser@example.com',
			'ewDasdrg8',
			'The password must contain at least one special character X'
		);
	});
});

test.describe.serial('Signup Tests', () => {
	let browser, page;

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
			'Name',
			process.env.VITE_MAIL,
			process.env.VITE_PASSWORD_TEST,
			'you received an email to validate your account X'
		);
	});

	test('SIGNUP - Email déjà inscrit - EMAIL_EXIST', async () => {
		page = await browser.newPage();
		await page.goto('http://localhost:5173/signup', { waitUntil: 'networkidle' });

		await runSignupTest(
			page,
			'Name',
			process.env.VITE_MAIL,
			process.env.VITE_PASSWORD_TEST,
			'This email already exists X'
		);
	});
});

// Deuxième série de tests
test.describe.serial('Email Verification and Login Tests', () => {
	let browser, page;

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

	test('LOGIN - Email pas encore vérifié - EMAIL_NOT_VERIFIED_LOGIN', async () => {
		await page.goto('http://localhost:5173/login', { waitUntil: 'networkidle' });
		const browser = await chromium.launch({ headless: false });

		// Remplir les champs email et mot de passe
		await fillField(page, '#email', process.env.VITE_MAIL);

		await fillField(page, '#password', process.env.VITE_PASSWORD_TEST);

		// Soumettre le formulaire
		await page.waitForSelector('button[type="submit"]:enabled');
		await page.click('button[type="submit"]');

		// Attendre une redirection ou un message de succès, à vous de personnaliser cette partie
		const errorMessageElement = await page.waitForSelector('.notification');

		// Vérification du message d'erreur
		const errorMessageText = await errorMessageElement.textContent();
		expect(errorMessageText).toBe('Your Email has not been verified, please check your mailbox X');

		await browser.close();
	});
});

test.describe.serial('Password Reset Tests', () => {
	let browser, page;

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

	test('FORGOT-PASSWORD - Email inexistant - INVALID_EMAIL', async () => {
		// Remplir le champ email avec une adresse email invalide
		await fillField(page, '#email', 'invalidemail@example.com');
		await page.click('button[type="button"]');

		// Vérifier le message d'erreur
		const errorMessageElement = await page.waitForSelector('.notification');
		const errorMessageText = await errorMessageElement.textContent();
		expect(errorMessageText).toBe('User not found X');
	});

	test('FORGOT-PASSWORD - Email pas encore verifié - UNVERIFIED_EMAIL', async () => {
		// Remplir le champ email avec une adresse email non vérifiée
		await fillField(page, '#email', process.env.VITE_MAIL);
		await page.click('button[type="button"]');

		// Vérifier le message d'erreur ou de succès, selon le comportement attendu
		const messageElement = await page.waitForSelector('.notification');
		const messageText = await messageElement.textContent();
		expect(messageText).toBe('Your Email has not been verified, please check your mailbox X');
	});
});

// Deuxième série de tests
test.describe.serial('Email Verification and Login Tests', () => {
	let browser, page;

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

	test('EMAIL - Confirmation par email - CONFIRM_EMAIL', async () => {
		const browser = await chromium.launch({ headless: false });
		const newPage = await browser.newPage();

		// Récupérer le lien de confirmation depuis Mailtrap
		const confirmationLink = await getConfirmationLinkFromMailtrap();

		// Confirmer le compte
		await newPage.goto(confirmationLink);

		if (!confirmationLink) {
			throw new Error('Confirmation link is undefined.');
		}

		// Confirmer le compte en naviguant vers le lien de confirmation
		await newPage.goto(confirmationLink);

		// Attendre et vérifier que le h1 "Vérification en cours..." apparaît
		const headerElement = await newPage.waitForSelector('h1');
		const headerText = await headerElement.textContent();
		expect(headerText).toBe('Verification en cours...');

		// Attendre la notification "Votre adresse mail est bien validée x"
		const notificationElement = await newPage.waitForSelector('.notification');
		const notificationText = await notificationElement.textContent();
		expect(notificationText).toBe('Votre adresse mail est bien validée X');

		await browser.close();
	});

	test('LOGIN - mauvais identifiants - LOGIN_FAILURE_PASSWORD', async () => {
		const browser = await chromium.launch({ headless: false });
		const newPage = await browser.newPage();

		// Navigation vers la page de connexion
		await newPage.goto('http://localhost:5173/login');

		// Remplir les champs email et mot de passe avec des données incorrectes
		await newPage.focus('#email');
		await newPage.keyboard.type(process.env.VITE_MAIL);
		await newPage.waitForTimeout(200);

		await newPage.focus('#password');
		await newPage.keyboard.type('sdrg');
		await newPage.waitForTimeout(200);

		// Soumettre le formulaire
		await newPage.click('button[type="submit"]');

		// Attendre une notification d'échec
		const notificationElement = await newPage.waitForSelector('.notification');
		const notificationText = await notificationElement.textContent();

		// Vérifier que la connexion a échoué
		expect(notificationText).toBe('wrong identifiants X');

		await browser.close();
	});
});

test.describe.serial('Password Reset Tests', () => {
	let browser, page;

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

	test('FORGOT_PASSWORD - envoi de la demande email forgot password - VALID_EMAIL', async () => {
		// Remplir le champ email avec une adresse email valide et vérifiée
		await fillField(page, '#email', process.env.VITE_MAIL);
		await page.click('button[type="button"]');

		// Vérifier le message de succès
		const successMessageElement = await page.waitForSelector('.notification');
		const successMessageText = await successMessageElement.textContent();
		expect(successMessageText).toBe('Email sent to reset your forgot password X');
	});

	test('CONFIRM_PASSWORD_RESET', async () => {
		// Récupérer le lien de confirmation depuis Mailtrap
		const confirmationLink = await getConfirmationLinkFromMailtrap();
		if (!confirmationLink) {
			throw new Error('Confirmation link is undefined.');
		}

		// Ouvrir une nouvelle page et naviguer vers le lien de confirmation
		page = await browser.newPage();
		await page.goto(confirmationLink, { waitUntil: 'networkidle' });

		// Remplir le formulaire de réinitialisation du mot de passe
		await fillField(page, '#newPassword', 'NewSecurePassword8!');
		await fillField(page, '#confirmPassword', 'NewSecurePassword8!');
		await page.click('button[type="submit"]');

		// Vérifier que le mot de passe a bien été réinitialisé
		const successMessageElement = await page.waitForSelector('.notification');
		const successMessageText = await successMessageElement.textContent();
		expect(successMessageText).toBe('Your password has been successfully reset X');

		await page.close();
	});
});
