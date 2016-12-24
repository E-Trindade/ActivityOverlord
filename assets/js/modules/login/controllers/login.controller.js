angular.module('login-module')

.controller('loginCtrl', ['$scope', '$state', 'AuthService',
	function ($scope, $state, AuthService) {
		$scope.user = {};
		$scope.loading = false;

		$scope.login = function () {
			$scope.loading = true;
			AuthService.authenticate($scope.user)
				.then(
					function onSuccess() {
						$state.go('dashboard');
					},
					function onError(res) {
						console.log(res)
					})
				.finally(
					function always() {
						$scope.loading = false;
					})

		}
}])