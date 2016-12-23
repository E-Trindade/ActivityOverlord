angular.module('dashboard-module')

.service('publicationService', ['Restangular', 'userService',
	function (Restangular, publicationService) {
		return {
			getUserFeed: function(){
				return Restangular.all('publications').getList()
			},
			
			getUserPublications: function(user_id){
				return Restangular.one('users', user_id).getList('tasks')
			}
			
		}
	}
])