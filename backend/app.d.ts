// app.d.ts
import mongoose from 'mongoose';

// Enlevez l'importation mongoose d'ici
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
      // ... autres méthodes et propriétés
    }
  }

  namespace Express {
    interface Request {
      user?: App.IUser;
    }
  }
}
// Pas besoin d'exporter quoi que ce soit ici
