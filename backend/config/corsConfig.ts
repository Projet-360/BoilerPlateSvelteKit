const corsConfig = {
  origin: "http://localhost:5173", // Remplacez par l'URL de votre frontend
  optionsSuccessStatus: 204,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // pour autoriser les cookies
};

export default corsConfig;
