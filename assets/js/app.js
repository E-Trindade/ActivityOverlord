angular.module('app', ['LoginModule', 'SignupModule', 'ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'templates/login.html'
		})
		.state('signup', {
			url: '/signup',
			controller: 'SignupCtrl',
			templateUrl: 'templates/signup.html'
	});
	$urlRouterProvider.otherwise('/login');
});