angular.module('signup-module')

.controller('signupCtrl', ['$scope', '$http', '$state',
	function ($scope, $http, $state) {
		$scope.user = {};
		$scope.loading = false;

		$scope.submitSignupForm = function () {
			if ($scope.userForm.$pristine)
				return;
			$scope.loading = true;

			$http.post('/auth/signup', {
				fullname: $scope.user.fullname,
				email: $scope.user.email,
				password: $scope.user.password,
				confirmPassword: $scope.user.repeatPassword
			}).then(function onSuccess() {
				$state.go('login');
			})
		}
	}
]);