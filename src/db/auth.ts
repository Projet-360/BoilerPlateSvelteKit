import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function verifyToken(token: string) {
	try {
		const decoded = jwt.verify(token, process.env.SECRETKEY as string);
		return decoded;
	} catch (error) {
		console.error('JWT Verification Error:', error);
		throw error;
	}
}
