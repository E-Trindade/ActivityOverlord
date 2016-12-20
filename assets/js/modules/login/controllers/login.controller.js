angular.module('login-module')

.controller('loginCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$scope.user = {};
	$scope.loading = false;

	$scope.login = function () {
		$scope.loading = true;

		$http.put('/users/login', {
			email: $scope.user.email,
			password: $scope.user.password
		}).then(function onSuccess() {
			$state.go('dashboard');
		}, function onError() {
			console.log('Err')
		}).finally(function always() {
			$scope.loading = false;
		})
	}
}])