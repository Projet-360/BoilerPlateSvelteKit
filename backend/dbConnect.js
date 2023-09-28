import mongoose from 'mongoose';
import { env } from './constants/env.js';

const connectDB = async () => {
	try {
		await mongoose.connect(env.BD, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('Connecté à MongoDB');
	} catch (err) {
		console.error('Impossible de se connecter à MongoDB', err);
		// Vous pouvez ici soit propager l'erreur, soit renvoyer une promesse rejetée
		return Promise.reject(err);
	}
};

export default connectDB;
