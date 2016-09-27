angular.module('common.directives', [])

.directive('pwCheck', [function () {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ctrl) {
			elem.on('keyup', function () {
				scope.$apply(function () {
					var v = elem.val() === attrs.pwCheck;
					ctrl.$setValidity('pwmatch', v);
				});
			});
		}
	}
}]);