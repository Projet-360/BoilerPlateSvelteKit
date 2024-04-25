import { CorsOptions } from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const allowedOrigins = [
  process.env.URL_FRONT_LOCAL,
  process.env.URL_FRONT,
].filter(Boolean); // Filtrer les valeurs falsy

const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

export default corsConfig;
