import { test, chromium, expect } from '@playwright/test';
import fetch from 'node-fetch';
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

	await page.waitForTimeout(200);
	// Attente du message d'erreur
	const errorMessageElement = await page.waitForSelector('.notification');

	// Vérification du message d'erreur
	const errorMessageText = await errorMessageElement.textContent();
	expect(errorMessageText).toBe(expectedMessage);
}

async function getConfirmationLinkFromMailtrap() {
	try {
		// Récupérer la liste des e-mails
		const response = await fetch(
			`https://mailtrap.io/api/v1/inboxes/${process.env.MAILTRAP_ID}/messages?api_token=${process.env.MAILTRAP_TOKEN}`
		);
		const emails = await response.json();
		const latestEmail = emails[0];

		// Récupérer le contenu HTML de l'e-mail
		const htmlResponse = await fetch(
			`https://mailtrap.io${latestEmail.html_path}?api_token=${process.env.MAILTRAP_TOKEN}`
		);
		const htmlContent = await htmlResponse.text();

		// Extraire le lien de confirmation
		const match = htmlContent.match(/href="([^"]+)"/);
		const confirmationLink = match ? match[1] : null;

		if (!confirmationLink) {
			throw new Error('Confirmation link not found in email');
		}

		return confirmationLink;
	} catch (error) {
		console.error('Error in getConfirmationLinkFromMailtrap:', error);
		return undefined;
	}
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

	test('EMAIL_NOT_VERIFIED', async () => {
		const browser = await chromium.launch({ headless: false });
		const newPage = await browser.newPage();

		// Navigation vers la page de connexion
		await newPage.goto('http://localhost:5173/login');

		// Remplir les champs email et mot de passe
		await newPage.focus('#email');
		await newPage.keyboard.type(process.env.VITE_MAIL);
		await newPage.waitForTimeout(200);

		await newPage.focus('#password');
		await newPage.keyboard.type('Password8,');
		await newPage.waitForTimeout(200);

		// Soumettre le formulaire
		await newPage.click('button[type="submit"]');

		// Attendre une redirection ou un message de succès, à vous de personnaliser cette partie
		const errorMessageElement = await newPage.waitForSelector('.notification');

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
