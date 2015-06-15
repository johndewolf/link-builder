var linkBuilder = angular.module('linkBuilder', ['ngRoute', "firebase"]);

linkBuilder.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'pages/link-builder.html',
			controller: 'mainController'
		})

		.when('/utm-builder', {
			templateUrl: 'pages/utm-builder.html',
			controller: 'utmController'
		});

});



linkBuilder.controller('mainController', ['$scope', '$log', function($scope, $log) {

	$scope.url = '';

	$scope.twitterCopy = '';

	function replaceSpaces(copy, network) {
		if(copy.length > 119 && network === 'twitter'){
			var tweetLength = copy.substr(0, 119)
  		return tweetLength.replace(/ /g, "%20");
  	} else {
			return copy.replace(/ /g, "%20");
		}
	};

	// function utmBuild(socialNetwork) {
	// 	var medium = $scope.medium;
	// 	var campaign = $scope.campaign;
	// 	var scope = $scope.utm + '.' + socialNetwork + 'Source';
	// }


	$scope.twitterReturnUrl = function() {
		return 'http://twitter.com/intent/tweet?text='+ replaceSpaces($scope.twitterCopy, 'twitter') + '&' + 'url=' + $scope.url;
	}

	$scope.tweetFullChara = function() {
		return $scope.twitterCopy.length + $scope.url.length + 9;
	}

	$scope.facebookReturnUrl = function() {
		return 'http://www.facebook.com/sharer/sharer.php?u=' + $scope.url;
	}


	$scope.linkedin = {
		title: '',
		summary: ''
	}

	$scope.linkedinReturnUrl = function() {
		return 'http://www.linkedin.com/shareArticle?mini=true&url=' + $scope.url + '&title=' + replaceSpaces($scope.linkedin.title, 'linkedin') + '&summary=' + replaceSpaces($scope.linkedin.summary, "linkedin");
	}

	$scope.gplusReturnUrl = function(){
		return 'https://plus.google.com/share?url=' + $scope.url;
	}

}]);


linkBuilder.controller('utmController', ['$scope', '$log', "$http", function($scope, $log) {
	$scope.url = '';
	$scope.utm = {
		campaign: '',
		source: '',
		medium: '',
	},

	$scope.utmUrls = [],

	$scope.buildUrls = function() {
		if($scope.url != undefined) {
			$scope.utmUrls.push($scope.url + '?utm_source=' + $scope.utm.source + '&utm_campaign=' + $scope.utm.campaign + '&utm_medium=' + $scope.utm.medium);
		}
	} 

}]);