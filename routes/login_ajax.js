// JavaScript Document

exports.login_ajax = function(req, res){
	var mongoose = require('mongoose');
	var db = mongoose.connection;
	var Schema = mongoose.Schema,
		indexSchema = new Schema({
			type:String,
			meta:String,
			date:Number,
			url:String
		});
	login_data = db.model('login',indexSchema,'user');
	login_data.find({type:"userid", id:req.body.log_name ,password:req.body.log_pwd},function(err,docs){
		if(docs.length > 0){
			//req.cookies.user = req.body.log_name;
			//req.cookies.ip = req.connection.remoteAddress;
			//req.cookies.expire = new Date().getTime();
			//res.cookie('user', req.body.log_name, { secure: true, maxAge: 3000, httpOnly: true });
			req.session.userinfo = {user:req.body.log_name, ip:req.connection.remoteAddress, useragent:req.headers['user-agent']};
			console.log(req.session)
			res.end("Done!");
		}else{
			res.end("password wrong!");
		}
	});
};