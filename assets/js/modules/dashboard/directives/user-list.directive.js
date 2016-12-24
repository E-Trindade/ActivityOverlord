angular.module('dashboard-module')

.directive('userList', ['UserService',
	(UserService) => {
		return {
			restrict: 'E',
			templateUrl: 'js/modules/dashboard/directives/user-list.html',
			controller: ['$scope',
				function ($scope) {
					UserService.listUsers().then(function onSuccess(users) {
						$scope.users = users;
					});
				}
			]
		}
	}
])