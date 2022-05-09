const express = require("express");
const route = express.Router();
const jwt = require('jsonwebtoken'); // to generate token
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const services = require("../services/render");
const modeluser = require('../models/users');
const passport = require('passport');
const controller = require('../controller/users_controller');
const { forwardAuthenticated } = require('../config/auth');







// // Login Page
route.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// // Register Page
route.get('/register', forwardAuthenticated, (req, res) => res.render('register'));



// Login
route.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/mainpage',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next);
});

// Logout
route.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});





// ////////////////////////

/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/users', services.users);

 /**
  *  @description add users
  *  @method GET /add-user
  */
 route.get('/add-user', services.add_user)
 
 /**
  *  @description for update user
  *  @method GET /update-user
  */
 route.get('/update-user', services.update_user)
 
 
 // API
 route.post('/api/users', controller.create);
 route.get('/api/users', controller.find);
 route.put('/api/users/:id', controller.update);
 route.delete('/api/users/:id', controller.delete);
 


module.exports = route


