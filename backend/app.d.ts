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
  }

  namespace Express {
    interface Request {
      user?: App.IUser;
    }
  }
}
// Pas besoin d'exporter quoi que ce soit ici
