import { greetingQueries } from './services/queries.js';
import { greetingMutations } from './services/mutations.js';
import { subscriptions } from './services/subscriptions.js';

export const greetingResolver = {
  Query: greetingQueries,
  Mutation: greetingMutations,
  Subscription: subscriptions,
};
