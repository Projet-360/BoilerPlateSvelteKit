// Assurez-vous que les chemins d'importation correspondent à la structure de votre projet
import general from './fr/general.json';
import about from './fr/about.json';
import home from './fr/home.json';
import login from './fr/login.json';
import logout from './fr/logout.json';
import signup from './fr/signup.json';
import forgotPassword from './fr/forgot-password.json';
import forgotPasswordToken from './fr/forgot-password-token.json';
import user from './fr/user.json';
import validation from './fr/validation.json';

import data from './fr/data.json';

const translationsFr = {
	data,
	general,
	about,
	home,
	login,
	logout,
	signup,
	'forgot-password': forgotPassword,
	'forgot-password-token': forgotPasswordToken,
	user,
	validation
};

export default translationsFr;
