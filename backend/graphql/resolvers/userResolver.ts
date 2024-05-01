interface SignupArgs {
  username: string;
  email: string;
  password: string;
}

interface Context {
  io: any;
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
    signup: async (
      _: any,
      { username, email, password }: SignupArgs,
      context: Context,
    ) => {
      console.log('Signup attempt', username, email, password);

      // Vous pouvez choisir de retourner un message simple ou rien du tout.
      // Si vous choisissez de ne rien retourner, assurez-vous que votre schéma GraphQL le permet.
      return { message: 'Attempt logged' }; // Retourne un message indiquant que la tentative a été consignée.
    },
  },
};
