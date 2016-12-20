angular.module('app')

.config(
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				controller: 'loginCtrl',
				templateUrl: 'templates/login.html'
			})
			.state('signup', {
				url: '/signup',
				controller: 'signupCtrl',
				templateUrl: 'templates/signup.html'
			})
			.state('dashboard', {
				url: '/dashboard',
				controller: 'dashboardCtrl',
				templateUrl: 'templates/dashboard.html'
			})
		$urlRouterProvider.otherwise('/login');
	});