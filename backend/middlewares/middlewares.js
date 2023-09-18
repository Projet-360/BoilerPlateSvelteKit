const express = require("express");
const cors = require("cors");
const corsConfig = require("../config/corsConfig");
const cookieParser = require("cookie-parser");
const errorHandler = require("./errorHandler");

module.exports = (app) => {
  app.use(cors(corsConfig));
  app.use(express.json());
  app.use(cookieParser());
  app.use(errorHandler);
};
