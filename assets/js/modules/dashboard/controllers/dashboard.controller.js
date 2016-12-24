angular.module('dashboard-module')

.controller('dashboardCtrl', ['$scope', '$http', '$state', '$mdDialog',
	function ($scope, $http, $state, $mdDialog) {

		$scope.newPost = ($event) => {
			$mdDialog.show({
				parent: angular.element(document.body),
				targetEvent: $event,
				clickOutsideToClose: true,
				templateUrl: 'js/modules/dashboard/directives/new-publication.html',
				controller: 'newPublicationCtrl'
			}).then(
				function onSuccess() {
					console.log('Posted Successfuly')
				},
				function onError() {
					console.log('Aborted')
				})
		}
}])