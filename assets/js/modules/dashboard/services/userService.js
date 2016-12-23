angular.module('dashboard-module')

.service('userService', ['Restangular', '$q',
	function (Restangular, $q) {
		return {
			listUsers: function(){
				return Restangular.all('users').getList();
			},
			getUser: function(user_id){
				return Restangular.one('users', user_id)
			}
		}
	}
])