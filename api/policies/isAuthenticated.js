/**
 * isAuthenticated
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */

module.exports = function (req, res, next) {
	var token;
	if (req.headers && req.headers['token'])
		jwTokenService.verify(req.headers['token'], (err, token) => {
			if (err) return res.json(401, {
				err: 'Invalid Token'
			});
			req.token = token;
			next();
		})
	else
		return res.json(401, {
			err: 'Invalid Token'
		})
}