angular.module('common')

.service('AuthInterceptor', ['Restangular', 'SessionService',

	function (Restangular, SessionService) {
		return (request, operation, resource, url, headers, query_params) => {
			
			headers['token'] = SessionService.auth_token;

			return {
				headers: headers
			}
		}
	}
])