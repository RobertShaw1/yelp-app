'use strict'

const api = require('express').Router();

module.exports = api;

api.get('/search', (req, res) => {
  res.send(`Made it! and searched ${req.query.term}`)
});

api.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

