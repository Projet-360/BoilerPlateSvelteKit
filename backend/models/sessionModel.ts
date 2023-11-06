import mongoose from 'mongoose';

const sessionModel = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userAgent: { type: String, required: true },
  ip: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '1d' }, // Expire après 1 jour
});

export const Session = mongoose.model<App.ISession>('Session', sessionModel);
