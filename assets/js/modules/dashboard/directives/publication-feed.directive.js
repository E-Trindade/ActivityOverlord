angular.module('dashboard-module')

.directive('publicationFeed', ['publicationService',
	(publicationService) => {
		return {
			restrict: 'E',
			templateUrl: 'js/modules/dashboard/directives/publication-feed.html',
			controller: ['$scope',
				($scope) => {
					publicationService.getUserFeed().then(
						function onSuccess(posts) {
							console.log(posts)
							$scope.publications = posts;
						})
					}]
		}
}])