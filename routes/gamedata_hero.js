
/*
 * GET gamedata_hero page.
 */

exports.gamedata_hero = function(req, res){
	res.render('gamedata_hero', {
		title: 'gamedata_hero',
		nav: 'gamedata_hero'
	});
};