import Greeting from '../../../../models/GreetingModel.js';

export const greetingQueries = {
  getGreetings: async () => {
    return await Greeting.find();
  },
  getGreetingById: async (_: any, { id }: { id: string }) => {
    return await Greeting.findById(id);
  },
};
