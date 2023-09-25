import { expect, test } from '@playwright/test';
import { chromium } from 'playwright';

test('should register a new user', async () => {
	// Aller à la page d'inscription
	const browser = await chromium.launch({ headless: false });

	const page = await browser.newPage();

	await page.goto('http://localhost:5173/signup');

	// Remplir les champs du formulaire
	await page.fill('input[placeholder="Username"]', 'newUser');
	await page.fill('input[placeholder="Email"]', 'newuser@example.com');
	await page.fill('input[placeholder="Password"]', 'newpassword');

	// Cliquer sur le bouton "S'inscrire"
	await page.click('button[type="submit"]');

	// Fermer le navigateur
	await browser.close();
});
