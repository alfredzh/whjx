
/*
 * GET login page.
 */

var url = require("url");
exports.login = function (req, res) {
	//indexdata.find({type:"imgurl"},function(err,docs){
	var loginTab = url.parse(req.url,true).query;
	res.render('login', {
		title: '登录/注册',
		loginTab: loginTab.tab,
		nav: "login"
	});
	//});
};