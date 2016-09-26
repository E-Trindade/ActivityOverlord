angular.module('SignupModule')

.controller('SignupController', function ($scope) {
	$scope.user = {};

	$scope.checkPasswordMatch = function () {
		if ($scope.user.password === $scope.user.confirmPassword) {
			alert("UHUUUU")
		}
	}
})