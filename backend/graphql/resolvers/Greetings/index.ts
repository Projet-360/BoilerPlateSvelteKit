import { PubSub } from 'graphql-subscriptions';
import Greeting from '../../../models/GreetingModel.js';

const pubsub = new PubSub();

const GREETING_ADDED = 'GREETING_ADDED';
const GREETING_UPDATED = 'GREETING_UPDATED';
const GREETING_DELETED = 'GREETING_DELETED';

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
      { name, message }: TS.GreetingInput,
      context: TS.Context,
    ) => {
      try {
        const newGreeting = new Greeting({ name, message });
        const result = await newGreeting.save();
        pubsub.publish(GREETING_ADDED, { greetingAdded: result });
        context.io.emit('greetingAdded', result);
        return result;
      } catch (error) {
        console.error('Error creating greeting:', error);
        throw new Error('Error creating greeting');
      }
    },
    updateGreeting: async (
      _: any,
      { id, name, message }: { id: string; name: string; message: string },
      context: TS.Context,
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
      context: TS.Context,
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
