// Fichier corsConfig.ts
import { CorsOptions } from 'cors';

const allowedOrigins = [
  'http://localhost:1000',
  'http://127.0.0.1:1000',
  'http://localhost:4173',
];

const corsConfig: CorsOptions = {
  origin: function (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void,
  ) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

export default corsConfig;
