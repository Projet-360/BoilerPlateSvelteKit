import mongoose from 'mongoose';

const sessionModel = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userAgent: { type: String, required: true },
  browser: {
    name: { type: String, default: null }, // Nom du navigateur
    version: { type: String, default: null }, // Version du navigateur
  },
  os: {
    name: { type: String, default: null }, // Nom du système d'exploitation
    version: { type: String, default: null }, // Version du système d'exploitation
  },
  device: { type: String, default: 'unknown' }, // Type de l'appareil (mobile, tablette, etc.), 'unknown' si non identifié
  ip: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '1d' }, // Expire après 1 jour
});

export const Session = mongoose.model<App.ISession>('Session', sessionModel);
