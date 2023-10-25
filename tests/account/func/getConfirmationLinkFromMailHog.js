// Dépendance nécessaire pour décoder le contenu en 'quoted-printable'
import quotedPrintable from 'quoted-printable';
import fetch from 'node-fetch';

// Définition de la constante pour un message d'erreur spécifique
const ERR_CONFIRM_LINK_NOT_FOUND = 'Confirmation link not found in email';

export async function getConfirmationLinkFromMailHog() {
	// Récupération de la liste des e-mails depuis MailHog
	const response = await fetch('http://localhost:8025/api/v2/messages');

	// Vérification du statut de la réponse
	if (!response.ok) {
		throw new Error('Failed to fetch emails');
	}

	// Transformation de la réponse en JSON
	const data = await response.json();

	// Récupération du dernier e-mail
	const latestEmail = data.items[0];

	// Si aucun e-mail n'est trouvé, lance une erreur
	if (!latestEmail) {
		throw new Error('No emails found');
	}

	// Décodage du contenu HTML de l'e-mail
	const decodedHtmlContent = quotedPrintable.decode(latestEmail.Content.Body);

	// Utilisation d'une expression régulière pour trouver le lien de confirmation
	const match = decodedHtmlContent.match(/href="([^"]+)"/);
	const confirmationLink = match ? match[1] : null;

	// Si le lien de confirmation n'est pas trouvé, lance une erreur
	if (!confirmationLink) {
		throw new Error(ERR_CONFIRM_LINK_NOT_FOUND);
	}

	// Retourne le lien de confirmation
	return confirmationLink;
}
