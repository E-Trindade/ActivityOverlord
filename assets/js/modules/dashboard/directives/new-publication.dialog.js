angular.module('dashboard-module')

.controller('newPublicationCtrl', ['$scope', '$mdDialog', 'PublicationService',
	function ($scope, $mdDialog, PublicationService) {
		$scope.post = {
			content: '',
			isValid: false
		};

		$scope.contentChanged = () => {
			if ($scope.post.content && $scope.post.content.length > 0)
				$scope.post.isValid = true;
			else
				$scope.post.isValid = false;
		}

		$scope.cancelDialog = () => {
			$mdDialog.cancel();
		}

		$scope.publish = (answer) => {
			PublicationService.publish($scope.post).then(
				(response) => {
					console.log(response)
					$mdDialog.hide();
				})
		}
	}
])