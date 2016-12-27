var linkBuilder = angular
	.module('linkBuilder', ['ui.router', 'firebase', 'ngMaterial', 'ngMessages'])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider){

		$stateProvider
			.state('utmBuilder', {
				url: '/utm-builder',
				title: 'UTM Builder',
				controller: 'utmController as utmctrl',
				templateUrl: 'pages/utm-builder.html',
				data: {
					title: 'UTM Builder'
				}
			})
			.state('linkBuilder', {
				url: '/social-link-builder',
				controller: 'socialLinkController as slCtrl',
				templateUrl: 'pages/link-builder.html',
				data: {
					title: 'Social Link Generator'
				}
			})
			.state('home', {
				url: '/',
				templateUrl: 'pages/home.html',
				data: {
					title: 'Home'
				}
			})
			.state('urlShortener', {
				url: '/url-shortener',
				controller: 'urlshortenerController as shortCtrl',
				templateUrl: 'pages/url-shortener.html',
				data: {
					title: 'URL Shortener'
				},
				resolve: {
					requireAuth: function ($state, Auth) {
						return Auth.$requireAuth().then(function(auth){
							return;
						}, function(error) {
							$state.go('login');
						});
					}
				}
			})
			.state('login', {
				url: '/login',
				controller: 'authController as authctrl',
				templateUrl: 'pages/login.html',
				data: {
					title: 'Login'
				},
				resolve: {
					requireNoAuth: function($state, Auth){
						return Auth.$requireAuth().then(function(auth){
							$state.go('urlShortener');
						}, function(error) {
							return;
						});
					}
				}
			})
			.state('register', {
				url: '/register',
				controller: 'authController as authctrl',
				templateUrl: 'pages/register.html'
			});

			$locationProvider.html5Mode(true);
		})
	.config(function($mdThemingProvider) {
	  $mdThemingProvider.theme('default')
	    .primaryPalette('blue')
	    .accentPalette('orange');
	})
	.run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function () {
			console.log('change')
        $rootScope.$state = $state
    });
	})
	.constant('FirebaseUrl', 'https://link-builder.firebaseio.com');
