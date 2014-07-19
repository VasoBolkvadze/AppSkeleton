var express = require('express'),
	controllers = require('../controllers');

module.exports.init = function(app){
	var router = express.Router();
	router.get('/', controllers.main.views.home);
	app.use(router);
};