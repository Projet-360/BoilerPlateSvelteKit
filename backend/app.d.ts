// app.d.ts

declare namespace App {
  interface IUser extends mongoose.Document {
    _id: string;
    username: string;
    email: string;
    password: string;
    isVerified?: boolean;
    resetToken?: string;
    resetTokenExpiration?: Date;
    role?: 'user' | 'admin' | 'moderator';
    save(
      options?: mongoose.SaveOptions,
      fn?: (err: any, product: this) => void,
    ): Promise<this>;
  }
}

declare namespace Express {
  interface Request {
    user?: App.IUser;
  }
}
