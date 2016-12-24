angular.module('app', ['ui.router', 'common', 'login-module', 'signup-module', 'dashboard-module'])

.run(['Restangular', 'SessionService', 'AuthInterceptor',
	  function (Restangular, SessionService, AuthInterceptor) {
		SessionService.load();
		Restangular.addFullRequestInterceptor(AuthInterceptor);
	  }
])