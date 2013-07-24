
/*
 * GET home page.
 */
	
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost');
var Schema = mongoose.Schema,
	indexSchema = new Schema({
		type:String,
		meta:String,
		date:Number,
		url:String
	});

module.exports = db.model('index',indexSchema,'test');