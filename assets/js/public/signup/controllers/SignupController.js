angular.module('SignupModule')

.controller('SignupController', function ($scope) {
	$scope.user = {};

	$scope.createAccount = function () {
		console.log($scope.user)
	}
})