import bcrypt from 'bcryptjs';
import { User } from './../../models/UserModel.js'; // Assurez-vous que l'interface IUser est bien exportée depuis le modèle User
import { UserInputError, AuthenticationError } from 'apollo-server-express';

interface SignupArgs {
  username: string;
  email: string;
  password: string;
}

// Adapter IUser pour matcher avec les types GraphQL si nécessaire
interface IUserGraphql {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin' | 'moderator' | undefined;
}

export const userResolver = {
  Mutation: {
    signup: async (_: any, { username, email, password }: SignupArgs) => {
      console.log('le resolver', username, email, password);
    },
  },
};
