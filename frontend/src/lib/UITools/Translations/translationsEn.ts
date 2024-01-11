// Assurez-vous que les chemins d'importation correspondent à la structure de votre projet
import general from './en/general.json';
import about from './en/about.json';
import home from './en/home.json';
import login from './en/login.json';
import logout from './en/logout.json';
import signup from './en/signup.json';
import forgotPassword from './en/forgot-password.json';
import forgotPasswordToken from './en/forgot-password-token.json';
import user from './en/user.json';
import validation from './en/validation.json';

const translationsEn = {
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

export default translationsEn;
