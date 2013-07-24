
var routes = require('../routes')
  , login = require('../routes/login')
  //, validateimg = require('./routes/vcode')
  , user = require('../routes/user')
  , gamealldata = require('../routes/gamealldata')
  , mediacenter = require('../routes/mediacenter')
  , gamedata_hero = require('../routes/gamedata_hero')
  , login = require('../routes/login')
  , login_ajax = require('../routes/login_ajax');

module.exports = function(app){
	app.get('/', routes.index);
	app.get('/login', login.login);
	app.get('/users', user.list);
	app.get('/gamealldata', gamealldata.gamealldata);
	app.get('/mediacenter',mediacenter.mediacenter);
	app.get('/gamedata_hero',gamedata_hero.gamedata_hero);

	app.post('/login_ajax', login_ajax.login_ajax);
};