// app.d.ts

declare namespace App {
  interface IUser extends mongoose.Document {
    userId: string;
    username: string;
    email: string;
    password: string;
    isVerified?: boolean;
    resetToken?: string;
    resetTokenExpiration?: Date;
    role?: 'user' | 'admin' | 'moderator';
  }
}

declare namespace Express {
  interface Request {
    user?: App.IUser;
  }
}
