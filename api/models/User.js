var bcrypt = require('bcrypt');
/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var BCRYPT_SALT_ROUND = 10

module.exports = {

	attributes: {
		fullname: {
			type: 'string',
			required: true
		},

		email: {
			type: 'string',
			required: true,
			unique: true
		},

		passwordHash: {
			type: 'string'
		},

		posts: {
			collection: 'publication',
			via: 'author'
		},

		toJSON: function () {
			var obj = this.toObject();
			delete obj.passwordHash;
			return obj;
		}
	},

	beforeCreate: (obj, next) => {
		bcrypt.hash(obj.password, BCRYPT_SALT_ROUND, (err, hashedPwd) => {
			if (err)
				return next(err);
			obj.passwordHash = hashedPwd;
			next();
		})
	},

	comparePassword: (plain_password, user, callback) => {
		bcrypt.compare(plain_password, user.passwordHash, (err, math) => {
			callback(err, match);
		})
	}
};