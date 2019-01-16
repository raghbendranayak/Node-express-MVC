/**
 * do something with the user model
 * var User = require('../models/user');
 */

var User = require("../models/user");
var AuthController = {};

/**
 * Load login page
 */

AuthController.index = function (req, res) {
  res.render('auth/login', { title: 'Login' } );
};


/**
 * signin page
 */

AuthController.login = function (req, res) { console.log("callledddddd");
  User.find({ }, {firstName:1, lastName:1, email:1, username:1}, function (err, userlList) { 
    if(err) {
      console.log(err);
    }else{
      console.log(userlList);
    }
  });
};


/**
 * Load Registration page
 */

AuthController.register = function (req, res) {
  res.render('auth/registration', { title: 'Registration' });
};


module.exports = AuthController;

