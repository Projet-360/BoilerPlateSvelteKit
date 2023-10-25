import redis from 'redis';
import { promisify } from 'util';

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
});

redisClient.on('error', (err) => {
  console.error(`Redis error: ${err}`);
});

// Promisify some Redis client methods for easier usage
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);
const setexAsync = promisify(redisClient.setex).bind(redisClient);

export { getAsync, setAsync, setexAsync };
