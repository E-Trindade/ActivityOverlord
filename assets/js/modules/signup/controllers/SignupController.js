angular.module('SignupModule')

.controller('SignupCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.user = {};
	$scope.loading = false;

	$scope.submitSignupForm = function () {
		if ($scope.userForm.$pristine)
			return;
		$scope.loading = true;
		$http.post('/signup', {
			firstName: $scope.user.firstName,
			lastName: $scope.user.lastName,
			email: $scope.user.email,
			password: $scope.user.password
		}).then(function onSuccess() {
			window.location = '/user'
		})
	}
}])