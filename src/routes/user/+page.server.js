import { redirect } from '@sveltejs/kit';
import Cookies from 'js-cookie';

export async function load({ locals }) {
	const { user } = locals;

	if (user && user.role === 'user') {
		console.log("Rôle d'utilisateur valide");
		return {
			props: {
				user
			}
		};
	}

	if (!user) {
		Cookies.set('notification', 'PAGE_NOT_EXIST');
		console.log('Message défini dans le cookie :', Cookies.get('notification'));
		throw redirect(307, '/');
	}
}
