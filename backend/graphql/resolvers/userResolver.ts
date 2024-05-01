import { User } from 'models/UserModel.js';

export const userResolver = {
  Query: {
    currentUser: (parent, args, context) => {
      // Supposons que context.user est défini si l'utilisateur est authentifié
      return context.user
        ? context.models.User.findById(context.user.id)
        : null;
    },
    currentSessions: (parent, args, context) => {
      // Récupérer et retourner les sessions de l'utilisateur authentifié
      return context.models.Session.find({ userId: context.user.id });
    },
  },
  Mutation: {
    login: async (parent, { username, password }, context) => {
      // Implémentation du login
      const { user, token } = await context.auth.authenticate(
        username,
        password,
      );
      return { user, token };
    },
    logout: (parent, args, context) => {
      // Implémentation du logout
      context.auth.logout();
      return true;
    },
  },
};
