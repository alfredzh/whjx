
/*
 * GET home page.
 */

exports.index = function(req, res){
	var mongoose = require('mongoose');
	var db = mongoose.connection;
	var Schema = mongoose.Schema,
	indexSchema = new Schema({
		type:String,
		meta:String,
		date:Number,
		imgurl:String
	});
	var model = db.model('index',indexSchema,'test');
	model.find({type:"url"},function(err,docs){
		res.render('index', {
			title: 'Express',
			docs: docs,
			nav: 'index'
		});
	});
};