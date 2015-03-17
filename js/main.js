var linkBuilder = angular.module('linkBuilder', []);

linkBuilder.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
	$scope.twitterUrl = '';
	
	$scope.twitterCopy = '';

	$scope.twitterComplete = function() {
		return $scope.twitterCopy.replace(/ /g, "%20");
	};

	$scope.tweetLength = function() {
		if ($scope.twitterCopy.length > 140) {
			return "tweet-over";
		};
	}

}]); 