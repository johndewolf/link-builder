var linkBuilder = angular

	.module('linkBuilder', ['ngRoute', "firebase"])

	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'pages/link-builder.html',
				controller: 'socialLinkController'
			})

			.when('/utm-builder', {
				templateUrl: 'pages/utm-builder.html',
				controller: 'utmController'
			});

	});

