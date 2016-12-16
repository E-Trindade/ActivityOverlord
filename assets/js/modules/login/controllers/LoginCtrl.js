angular.module('LoginModule')

.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.user = {};
	$scope.loading = false;
}])