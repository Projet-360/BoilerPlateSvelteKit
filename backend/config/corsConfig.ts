import { CorsOptions } from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const allowedOrigins = [process.env.URL_FRONT_LOCAL].filter(Boolean); // Filtrer les valeurs falsy

const corsConfig: CorsOptions = {
  origin: ['https://localhost:1000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

export default corsConfig;
