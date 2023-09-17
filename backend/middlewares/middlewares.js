const express = require('express');
const cors = require('cors');
const corsConfig = require('./corsConfig');

module.exports = (app) => {
  app.use(cors(corsConfig));
  app.use(express.json());
};