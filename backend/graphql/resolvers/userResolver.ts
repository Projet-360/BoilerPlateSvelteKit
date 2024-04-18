import Greeting from './../../models/GreetingModel.js';

const resolversTest = {
  Query: {
    getGreetings: async () => {
      try {
        const greetings = await Greeting.find();
        return greetings;
      } catch (error) {
        throw new Error('Failed to fetch greetings');
      }
    },
  },
};

export default resolversTest;
