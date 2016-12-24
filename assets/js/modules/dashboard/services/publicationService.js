angular.module('dashboard-module')

.service('PublicationService', ['Restangular', 'UserService',
	function (Restangular, UserService) {
		return {
			getUserFeed: () => {
				return Restangular.all('publications').customGET('userfeed')
			},

			getUserPublications: (user_id) => {
				return Restangular.one('users', user_id).getList('tasks')
			},

			publish: (new_publication) => {
				return Restangular.all('publications').post(new_publication)
			}

		}
	}
])