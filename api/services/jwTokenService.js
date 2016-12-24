const jwt = require('jsonwebtoken');
const TOKEN_SECRET = '__secret__';

module.exports = {

	issue: (payload) => {
		return jwt.sign(payload, TOKEN_SECRET, {
			expiresIn: '2h'
		})
	},

	verify: (token, callback) => {
		return jwt.verify(token, TOKEN_SECRET, {}, callback)
	}

}