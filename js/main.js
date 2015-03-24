var linkBuilder = angular.module('linkBuilder', []);

linkBuilder.controller('mainController', ['$scope', '$log', function($scope, $log) {

	$scope.url = '';

	$scope.utm = {
		campaign: '',
		medium: '',
		twitterSource: '',
		facebookSource: ''
	}

	
	$scope.twitterCopy = '';

	$scope.twitterComplete = function() {
		return $scope.twitterCopy.replace(/ /g, "%20");
	};

	$scope.twitterReturnUrl = function() {
		return 'http://twitter.com/intent/tweet?text='+ $scope.twitterComplete() + '&' + 'url=' + $scope.url + '?utm_source=' + $scope.utm.twitterSource + '&utm_campaign=' + $scope.utm.campaign + '&utm_medium=' + $scope.utm.medium ;
	}

	$scope.tweetFullChara = function() {
		return $scope.twitterCopy.length + $scope.url.length + 9;
	}

	$scope.facebookReturnUrl = function() {
		return 'http://www.facebook.com/sharer/sharer.php?u=' + $scope.url + '?utm_source=' + $scope.utm.facebookSource + '&utm_campaign=' + $scope.utm.campaign + '&utm_medium=' + $scope.utm.medium ;
	}

	$scope.gplus = '';

}]); 