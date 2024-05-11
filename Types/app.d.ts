// app.d.ts
import mongoose from 'mongoose';
import { NextFunction } from 'express';

declare global {
	namespace App {

		interface IUser extends mongoose.Document {
			_id: mongoose.Schema.Types.ObjectId;
			username: string;
			email: string;
			password: string;
			isVerified?: boolean;
			resetToken?: string;
			resetTokenExpiration?: Date;
			deleteToken?: string; // Ajout pour la suppression du compte
			deleteTokenExpiration?: Date; // Ajout pour la suppression du compte
			role?: 'user' | 'admin' | 'moderator';
		}

		interface ISession extends Document {
			userId: mongoose.Schema.Types.ObjectId; // ou string si vous n'utilisez pas ObjectId
			userAgent: string; // la chaîne complète du User Agent
			browser: {
			name: string | null;
			version: string | null;
			};
			os: {
			name: string | null;
			version: string | null;
			};
			device: string; // 'unknown' si non identifié ou le type de l'appareil
			ip: string;
			createdAt: Date;
		}

		interface Context {
			req: Request;
			res: Response;
			next: NextFunction;
			io: any;
		}

		type Greeting = {
			id: string;
			name: string;
			message: string;
			_id?: string;  // `_id` est optionnel, utilisé principalement pour le mapping initial.
		};
		
		interface Session {
			sessionId: string;
			device: string; // Exemple: 'Desktop - Chrome'
			lastActive: Date;
		}

		type FingerprintData = {
			userAgent: string;
			screenResolution: string;
			timezone: string;
			webglVendor: string | undefined;
			webglRenderer: string | undefined;
			canvasFingerprint: string;
			localIPs: string[];
		};

		interface GreetingInput {
			name: string;
			message: string;
		}
		
		export interface userData {
			username: string | null;
			email: string | null;
		}

		export interface IAuthStore {
			userId: string | null;
			role: string | null;
			isAuthenticated: boolean;
			currentSessionId?: string; // L'identifiant de la session actuelle
			sessions?: Session[]; // Une liste de toutes les sessions actives de l'utilisateur
			userData: userData;
		}

		interface UserInfo {
			name: string;
			email: string;
		}

		interface User {
			_id: string;
			username: string;
			email: string;
			role: string;
		}

		interface GetDashboardData {
			userId: string;
			role: string;
			sessionId: string;
			isVerified: boolean;
			userData: {
			username: string;
			email: string;
			};
		}

		interface AnimationOptions {
			x?: number;
			y?: number;
			duration: number;
			delay?: number;
		}

		interface Notification {
			id: number;
			message: string;
			type: string; // ou enum si vous avez des types spécifiques
		}

		export type TranslationFunction = (key: string, options?: any) => string;
		
		namespace Express {
			interface Request {
				user?: App.IUser;
			}
		}
		
		interface ResetForgotNewPasswordArgs {
		token: string;
		newPassword: string;
		confirmPassword: string;
		}

		
		namespace Express {
			interface Request {
				apolloContext?: {
				next: NextFunction;
				};
			}
		}
	}
}