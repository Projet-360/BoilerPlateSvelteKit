import { PubSub } from 'graphql-subscriptions';

export const GREETING_ADDED = 'GREETING_ADDED';
export const GREETING_UPDATED = 'GREETING_UPDATED';
export const GREETING_DELETED = 'GREETING_DELETED';
export const pubsub = new PubSub();

export const subscriptions = {
  greetingAdded: {
    subscribe: () => pubsub.asyncIterator([GREETING_ADDED]),
  },
  greetingUpdated: {
    subscribe: () => pubsub.asyncIterator([GREETING_UPDATED]),
  },
  greetingDeleted: {
    subscribe: () => pubsub.asyncIterator([GREETING_DELETED]),
  },
};
