var linkBuilder = angular.module('linkBuilder', []);

linkBuilder.controller('mainController', ['$scope', '$log', function($scope, $log) {

	$scope.url = '';

	$scope.utm = {
		campaign: '',
		medium: '',
		twitterSource: '',
		facebookSource: '',
		linkedinSource: '',
		gplusSource: ''
	}

	
	$scope.twitterCopy = '';

	function replaceSpaces(copy) {
		return copy.replace(/ /g, "%20");
	};

	$scope.twitterReturnUrl = function() {
		return 'http://twitter.com/intent/tweet?text='+ replaceSpaces($scope.twitterCopy) + '&' + 'url=' + $scope.url + '?utm_source=' + $scope.utm.twitterSource + '&utm_campaign=' + $scope.utm.campaign + '&utm_medium=' + $scope.utm.medium ;
	}

	$scope.tweetFullChara = function() {
		return $scope.twitterCopy.length + $scope.url.length + 9;
	}

	$scope.facebookReturnUrl = function() {
		return 'http://www.facebook.com/sharer/sharer.php?u=' + $scope.url + '?utm_source=' + $scope.utm.facebookSource + '&utm_campaign=' + $scope.utm.campaign + '&utm_medium=' + $scope.utm.medium ;
	}

	$scope.linkedin = {
		title: '',
		summary: ''
	}

	$scope.linkedinReturnUrl = function() {
		return 'http://www.linkedin.com/shareArticle?mini=true&url=' + $scope.url + '&title=' + replaceSpaces($scope.linkedin.title) + '&summary=' + replaceSpaces($scope.linkedin.summary) + '?utm_source=' + $scope.utm.linkedinSource + '&utm_campaign=' + $scope.utm.campaign + '&utm_medium=' + $scope.utm.medium ; 
	}

	$scope.gplusReturnUrl = function(){
		return 'https://plus.google.com/share?url=' + $scope.url + '?utm_source=' + $scope.utm.gplusSource + '&utm_campaign=' + $scope.utm.campaign + '&utm_medium=' + $scope.utm.medium;
	}

}]); 