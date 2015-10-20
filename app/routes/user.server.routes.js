var user = require('../controllers/user.server.controller');

module.exports = function(app){
	app.route('/users').post(user.create).get(user.list);
	app.route('/users/:userID').get(user.read).put(user.update).delete(user.delete);
	app.param('userID', user.UserByID);
};