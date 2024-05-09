import { greetingResolver } from './Greetings/index.js';
import { authResolver } from './Auth/index.js';

export const resolvers = [greetingResolver, authResolver];
