angular.module('dashboard-module')

.directive('userList', ['userService',
	function (userService) {
		return {
			restrict: 'E',
			templateUrl: 'js/modules/dashboard/directives/user-list.html',
			controller: ['$scope',
				function ($scope) {
					userService.listUsers().then(function onSuccess(res) {
						$scope.users = res.data;
					})
				}
			]
		}
	}
])