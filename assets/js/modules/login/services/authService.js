angular.module('login-module')

.service('AuthService', ['$http', 'SessionService',
	function ($http, SessionService) {
		return {
			authenticate: (credentials) => {
				return $http.post('/auth/login', {
						email: credentials.email,
						password: credentials.password
					}).then(function onSuccess(res) {
						return res.data;
					})
					.then(function createSession(res_data) {
						console.log(res_data)
						SessionService.create(res_data.user.id, res_data.token)
					})
			}
		}
	}
])