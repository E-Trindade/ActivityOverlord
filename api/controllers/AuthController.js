var bcrypt = require('bcrypt');
/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
		actions: false,
		rest: false,
		pluralize: false
	},

	login: (req, res) => {
		if (!req.body.email || !req.body.password)
			return res.json(401, {
				err: 'Incorrect email or password'
			});
		User.findOne({
			email: req.body.email,
		}).exec(
			(err, user) => {
				if (err)
					return res.negotiate(err);

				if (!user)
					return res.json(401, {
						err: 'Incorrect email or password'
					});
				bcrypt.compare(req.body.password, user.passwordHash, (err, match) => {
					if (err)
						return res.negotiate(err);

					if (!match)
						return res.json(401, {
							err: 'Incorrect email or password'
						});

					return res.ok({
						user: user,
						token: jwTokenService.issue({
							user_id: user.id
						})
					})
				})
			})
	},

	signup: (req, res) => {
		if (!req.body.password || !req.body.confirmPassword)
			return res.json(400, {
				err: "Invalid parameters"
			})
		if (req.body.password !== req.body.confirmPassword) {
			return res.json(401, {
				err: "Passwords don't match"
			})
		}

		User.create(req.body).exec(
			(err, user) => {
				if (err)
					return res.json(err.status, {
						err: err
					})

				if (user)
					return res.json(200, {
						user: user,
						token: jwTokenService.issue({
							user_id: user.id
						})
					})
				return res.serverError();
			}
		)
	}
};