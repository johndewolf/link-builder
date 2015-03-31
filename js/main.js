var linkBuilder = angular.module('linkBuilder', []);

linkBuilder.controller('mainController', ['$scope', '$log', function($scope, $log) {
 
	$scope.url = '';

	if($scope.url === undefined){
  	return false;
  }

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

	function utmBuild(socialNetwork) {
		var medium = $scope.medium;
		var campaign = $scope.campaign;
		var scope = $scope.utm + '.' + socialNetwork + 'Source';
	}


	$scope.twitterReturnUrl = function() {
		return 'http://twitter.com/intent/tweet?text='+ replaceSpaces($scope.twitterCopy) + '&' + 'url=' + $scope.url;
	}

	$scope.tweetFullChara = function() {
		return $scope.twitterCopy.length + $scope.url.length + 9;
	}

	$scope.facebookReturnUrl = function() {
		return 'http://www.facebook.com/sharer/sharer.php?u=' + $scope.url;
	}

	$scope.utmBuilder = utmBuild('gplus');


	$scope.linkedin = {
		title: '',
		summary: ''
	}

	$scope.linkedinReturnUrl = function() {
		return 'http://www.linkedin.com/shareArticle?mini=true&url=' + $scope.url + '&title=' + replaceSpaces($scope.linkedin.title) + '&summary=' + replaceSpaces($scope.linkedin.summary); 
	}

	$scope.gplusReturnUrl = function(){
		return 'https://plus.google.com/share?url=' + $scope.url;
	}

}]); 


// myApp.directive("twitterUrl", function() {
//     return {
//         template: ''
//     }
// });