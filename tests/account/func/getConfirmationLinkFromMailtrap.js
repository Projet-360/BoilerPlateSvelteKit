import fetch from 'node-fetch';

const ERR_CONFIRM_LINK_NOT_FOUND = 'Confirmation link not found in email';

export async function getConfirmationLinkFromMailtrap() {
	const response = await fetch(
		`https://mailtrap.io/api/v1/inboxes/${process.env.MAILTRAP_ID}/messages?api_token=${process.env.MAILTRAP_TOKEN}`
	);
	const emails = await response.json();
	const latestEmail = emails[0];

	const htmlResponse = await fetch(
		`https://mailtrap.io${latestEmail.html_path}?api_token=${process.env.MAILTRAP_TOKEN}`
	);
	const htmlContent = await htmlResponse.text();

	const match = htmlContent.match(/href="([^"]+)"/);
	const confirmationLink = match ? match[1] : null;

	if (!confirmationLink) {
		throw new Error(ERR_CONFIRM_LINK_NOT_FOUND);
	}

	return confirmationLink;
}
