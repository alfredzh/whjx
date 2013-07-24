
/*
 * GET gamealldata page.
 */

exports.gamealldata = function(req, res){
	res.render('gamealldata', {
		title: 'gamealldata',
		nav: 'gamealldata'
	});
};