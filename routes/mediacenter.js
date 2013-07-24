
/*
 * GET mediacenter page.
 */

exports.mediacenter = function(req, res){
	res.render('mediacenter', {
		title: 'mediacenter',
		nav: 'mediacenter'
	});
};