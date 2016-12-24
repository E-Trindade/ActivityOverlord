/**
 * ownedByUser
 *
 * @description :: Policy to check if resource belongs to user
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */

module.exports = function (req, res, next) {
	var token = req.token;
	if (!token.user_id)
		return res.json(401, {
			err: 'Invalid Token'
		})
	if (token.user_id !== req.param('id'))
		if (token.user_id !== req.param('parentid'))
			return res.forbidden();
	next();
}