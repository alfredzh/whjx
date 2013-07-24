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
	login_data.find({type:"userid", id:req.body.id ,password:req.body.pwd},function(err,docs){
		if(docs.length > 0){
			req.cookies.user = req.body.id;
			req.cookies.ip = req.connection.remoteAddress;
			console.log(req.cookies.user)
			res.end("Done!");
		}else{
			res.end("password wrong!");
		}
	});
};