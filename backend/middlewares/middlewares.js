import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import corsConfig from "../config/corsConfig.js";
import errorHandler from "./errorHandler.js";
import checkBlacklist from "./checkBlacklist.js";

export default (app) => {
  app.use(cors(corsConfig));
  app.use(express.json());
  app.use(cookieParser());
  app.use(checkBlacklist);
  app.use(errorHandler);
};
