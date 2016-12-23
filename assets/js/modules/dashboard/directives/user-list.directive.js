angular.module('dashboard-module')

.directive('userList', ['userService', 'publicationService',
	(userService, publicationService) => {
		return {
			restrict: 'E',
			templateUrl: 'js/modules/dashboard/directives/user-list.html',
			controller: ['$scope',
				function ($scope) {
					userService.listUsers().then(function onSuccess(users) {
						$scope.users = users;
					});

					publicationService.getUserFeed().then(function onSuccess(publications) {
						$scope.publications = publications;
					})
				}
			]
		}
	}
])