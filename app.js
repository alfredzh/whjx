
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , cluster = require('cluster')
  , os = require('os')
  , mongoose = require('mongoose');

var app = express();

// all environments
//app.set('env','production');//set NODE_ENV=production
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.cookieSession({secret : "@5%s2kdgx"}));//, cookie:{maxAge:3000}
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
	console.log('development mode');
}
// production only
if ('production' == app.get('env')) {
	console.log('production mode');
}
//global db connection
var dboptions = require("./db/dbsettings");
	mongoose.connect(dboptions.dbaddress,dboptions.options);

//routers
var routeCtrl = require("./controller/ctrl");
	routeCtrl(app);

//cluster and httpServer
var clusterFun = require("./cluster/cluster");
	clusterFun(app,os,http,cluster);