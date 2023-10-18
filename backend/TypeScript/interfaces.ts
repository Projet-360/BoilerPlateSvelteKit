import { Document } from 'mongoose';

export interface IUser extends Document {
  userId: string;
  username: string;
  email: string;
  password: string;
  isVerified?: boolean; // '?' indique que la propriété est optionnelle
  resetToken?: string; // '?' indique que la propriété est optionnelle
  resetTokenExpiration?: Date; // '?' indique que la propriété est optionnelle
  role?: 'user' | 'admin' | 'moderator'; // Les valeurs possibles pour 'role'
}

export declare namespace Express {
  export interface Request {
    user?: any; // ou le type que tu préfères
  }
}