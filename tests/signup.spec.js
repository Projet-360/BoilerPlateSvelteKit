import { test, chromium, expect } from '@playwright/test';
import { getConfirmationLinkFromMailtrap } from './getConfirmationLinkFromMailtrap.js';
import { fillField } from './fillField.js';
import dotenv from 'dotenv';
import { runSignupTest } from './runSignupTest.js';

dotenv.config();

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

	test('SUCCESS_INSCRIPTION', async () => {
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

	test('EMAIL_EXIST', async () => {
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

	test('EMAIL_NOT_VERIFIED', async () => {
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

	test('CONFIRM_EMAIL', async () => {
		const browser = await chromium.launch({ headless: false });
		const newPage = await browser.newPage();

		// Récupérer le lien de confirmation depuis Mailtrap
		const confirmationLink = await getConfirmationLinkFromMailtrap();
		console.log(confirmationLink);

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

	test('LOGIN_FAILURE_PASSWORD', async () => {
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
