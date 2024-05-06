import { PubSub } from 'graphql-subscriptions';
import Greeting from '../../../../models/GreetingModel.js';

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

export const greetingMutations = {
  createGreeting: async (
    _: any,
    { name, message }: GreetingInput,
    context: Context,
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
    context: Context,
  ) => {
    const result = await Greeting.findByIdAndUpdate(
      id,
      { name, message },
      { new: true },
    );
    pubsub.publish(GREETING_UPDATED, { greetingUpdated: result });
    context.io.emit('greetingUpdated', result);
    return result;
  },
  deleteGreeting: async (_: any, { id }: { id: string }, context: Context) => {
    await Greeting.findByIdAndRemove(id);
    pubsub.publish(GREETING_DELETED, { greetingDeleted: id });
    context.io.emit('greetingDeleted', id);
    return id;
  },
};
