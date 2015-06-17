var linkBuilder = angular
	.module('linkBuilder', ['ui.router', 'firebase'])

	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('urlBuilder', {
				url: '/utm-builder',
				templateUrl: 'pages/utm-builder.html',
				controller: 'utmController'
			})
			.state('linkBuilder', {
				url: '/',
				templateUrl: 'pages/link-builder.html',
				controller: 'socialLinkController'
			})

			.state('login', {
				url: '/login',
				controller: 'authController',
				templateUrl: 'pages/login.html'
			})

			.state('register', {
				url: '/register',
				controller: 'authController as authctrl',
				templateUrl: 'pages/register.html'
			});

		$urlRouterProvider.otherwise('/');
	})
	
	.constant('FirebaseUrl', 'https://link-builder.firebaseio.com');

