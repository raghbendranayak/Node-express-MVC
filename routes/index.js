/**
 * Module dependencies
 */
var express = require('express'),
    controllers = require('../controllers');
    authControllers = require('../controllers/authController');

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
var indexRouter = express.Router();

/**
 * this accepts all request methods to the `/` path
 */
indexRouter.route('/').all(controllers.index);
indexRouter.route('/login').get(authControllers.index);
indexRouter.route('/register').get(authControllers.register);
indexRouter.route('/signin').post(authControllers.login);

exports.indexRouter = indexRouter;
