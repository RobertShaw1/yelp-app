'use strict'

const { fetchBusinesses, fetchBusinessDetail } = require('./utils');
const api = require('express').Router();

module.exports = api;


api.get('/search', (req, res, next) => {
  fetchBusinesses(req.query.term)
  .then(data => res.json(data))
  .catch(next)
});

api.get('/business-detail/:id', (req, res, next) => {
  fetchBusinessDetail(req.params.id)
  .then(data => res.json(data))
  .catch(next)
});

api.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
