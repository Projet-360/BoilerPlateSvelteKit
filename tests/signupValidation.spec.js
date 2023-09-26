import { test, chromium } from '@playwright/test';
import { runSignupTest } from './runSignupTest.js';

import dotenv from 'dotenv';
dotenv.config();

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
});
