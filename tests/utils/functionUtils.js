const generateRandomString = (length, characters) => {
	let result = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters[randomIndex];
	}
	return result;
};

export const generateRandomUsername = (length = 8) => {
	const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	return generateRandomString(length, characters);
};

export const generateRandomEmail = () => {
	const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	const localPart = generateRandomString(8, characters);
	return `${localPart}@example.com`;
};

export const generateRandomPassword = () => {
	const lower = 'abcdefghijklmnopqrstuvwxyz';
	const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numbers = '0123456789';
	const special = '!@#$%^&*()-_+';

	const all = lower + upper + numbers + special;

	let password = '';
	password += lower[Math.floor(Math.random() * lower.length)];
	password += upper[Math.floor(Math.random() * upper.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += special[Math.floor(Math.random() * special.length)];

	// Générer un mot de passe d'au moins 9 caractères
	for (let i = 4; i < 9; i++) {
		password += all[Math.floor(Math.random() * all.length)];
	}

	return password;
};
