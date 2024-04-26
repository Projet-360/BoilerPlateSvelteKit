import { PubSub } from 'graphql-subscriptions';
import Greeting from './../../models/GreetingModel.js';

const pubsub = new PubSub();

const GREETING_ADDED = 'GREETING_ADDED';
const GREETING_UPDATED = 'GREETING_UPDATED';
const GREETING_DELETED = 'GREETING_DELETED';

interface GreetingInput {
  name: string;
  message: string;
}

interface Context {
  io: any;
}

export const greetingResolver = {
  Query: {
    getGreetings: async () => {
      return await Greeting.find();
    },
    getGreetingById: async (_: any, { id }: { id: string }) => {
      return await Greeting.findById(id);
    },
  },
  Mutation: {
    createGreeting: async (
      _: any,
      { name, message }: GreetingInput,
      context: Context,
    ) => {
      console.log('create');
      const newGreeting = new Greeting({ name, message });
      const result = await newGreeting.save();
      pubsub.publish(GREETING_ADDED, { greetingAdded: result });

      context.io.emit('greetingAdded', result);
      return result;
    },
    updateGreeting: async (
      _: any,
      { id, name, message }: { id: string; name: string; message: string },
      context: Context,
    ) => {
      console.log('update');
      const result = await Greeting.findByIdAndUpdate(
        id,
        { name, message },
        { new: true },
      );
      pubsub.publish(GREETING_UPDATED, { greetingUpdated: result });
      context.io.emit('greetingUpdated', result);
      return result;
    },
    deleteGreeting: async (
      _: any,
      { id }: { id: string },
      context: Context,
    ) => {
      await Greeting.findByIdAndRemove(id);
      pubsub.publish(GREETING_DELETED, { greetingDeleted: id });
      context.io.emit('greetingDeleted', id);
      return id;
    },
  },
  Subscription: {
    greetingAdded: {
      subscribe: () => pubsub.asyncIterator([GREETING_ADDED]),
    },
    greetingUpdated: {
      subscribe: () => pubsub.asyncIterator([GREETING_UPDATED]),
    },
    greetingDeleted: {
      subscribe: () => pubsub.asyncIterator([GREETING_DELETED]),
    },
  },
};
