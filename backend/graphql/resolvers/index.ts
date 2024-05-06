import { greetingResolver } from './Greetings/greetingResolver.js';
import { authResolver } from './authResolver.js';

export const resolvers = [greetingResolver, authResolver];
