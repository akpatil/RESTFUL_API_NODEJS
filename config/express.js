var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser'),
	compress = require('compression'),
	session = require('express-session'),
	morgan = require('morgan'),
	methodOverride = require('method-override');

module.exports = function(){
	var app = express();

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	}
	else if(process.env.NODE_ENV === 'production'){
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	require('../app/routes/index.server.routes')(app);
	require('../app/routes/user.server.routes')(app);

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	return app;
};