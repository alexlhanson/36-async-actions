'use strict';

const express = require('express');
const authorize = require('./lib/oauth');
const User = require('./model.js');
const auth = require('./lib/middleware.js');

const authRouter = module.exports = new express.Router()

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then(user => res.send(user.generateToken()))
    .catch(next);
});

authRouter.get('/login', auth, (req, res, next) => {
  res.cookie('token', req.token);
  res.send(req.token);
});

authRouter.get('/oauth', (req, res, next) => {
  console.log(req.query);

  authorize(req)
    .then(token => {
      res.cookie('token', token);
      res.redirect(process.env.REDIRECT_CLIENT_URI);

    })

    .catch(error => error);

});
