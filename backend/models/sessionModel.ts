import mongoose from 'mongoose';

const sessionModel = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assurez-vous que 'User' est le nom du modèle pour vos utilisateurs
      required: true,
    },
    userAgent: { type: String, required: true },
    screenResolution: { type: String, required: true },
    timezone: { type: String, required: true },
    webglVendor: { type: String, required: false },
    webglRenderer: { type: String, required: false },
    canvasFingerprint: { type: String, required: true },
    localIPs: [{ type: String, required: true }], // Un tableau de chaînes
  },
  {
    timestamps: true, // Ajoute createdAt et updatedAt automatiquement
  },
);

export const Session = mongoose.model<TS.FingerprintData>(
  'Session',
  sessionModel,
);
