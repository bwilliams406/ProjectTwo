module.exports = {}


exports.signup = function (req, res) {

	res.render('signup');

}

// exports.signin = function (req, res) {

// 	res.render('signin');

// }

exports.employee = function (req, res) {

	res.render('employee');

}

exports.inventory = function (req, res) {

	res.render('inventory');

}

exports.recipe = function (req, res) {

	res.render('recipe');

}

exports.logout = function (req, res) {

	req.session.destroy(function (err) {
		res.redirect('/');
	});

}
