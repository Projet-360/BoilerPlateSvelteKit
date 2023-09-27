export async function fillField(page, selector, value) {
	await page.focus(selector);
	await page.keyboard.type(value);
}
