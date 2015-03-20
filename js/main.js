var linkBuilder = angular.module('linkBuilder', []);

linkBuilder.controller('mainController', ['$scope', '$log', function($scope, $log) {

	$scope.url = '';

	$scope.twitterUrl = function() {
		if ($scope.twitterUrlInput != '') {
			return 'url=http://' + $scope.url;
		};
	}
	
	$scope.twitterCopy = '';

	$scope.twitterComplete = function() {
		return $scope.twitterCopy.replace(/ /g, "%20");
	};

	$scope.tweetFullChara = function() {
		return $scope.twitterCopy.length + $scope.url.length + 9;
	}

	$scope.gplus = '';

}]); 