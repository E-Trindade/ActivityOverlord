/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: (req, res) => {
		User.findOne({
			email: req.param('email'),
			password: req.param('password')
		}).exec((err, user) => {
			if (err)
				return res.negotiate(err);
			if (!user)
//				return res.ok();
				return res.notFound();
			return res.ok();
		})
	}
};