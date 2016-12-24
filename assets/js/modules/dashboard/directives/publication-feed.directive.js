angular.module('dashboard-module')

.directive('publicationFeed', ['PublicationService',
	(PublicationService) => {
		return {
			restrict: 'E',
			templateUrl: 'js/modules/dashboard/directives/publication-feed.html',
			controller: ['$scope',
				($scope) => {
					PublicationService.getUserFeed().then(
						function onSuccess(posts) {
							$scope.publications = posts;
						})
				}]
		}
}])