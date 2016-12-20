angular.module('dashboard-module')

.service('userService', ['$http', '$q',
	function ($http, $q) {
		return {
			listUsers: function(){
				return $http.get('/users')
			}
		}
	}
])