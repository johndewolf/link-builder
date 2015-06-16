linkBuilder.controller('utmController', ['$scope', '$log', "$http", function($scope, $log) {
	$scope.url = '';
	$scope.utm = {
		campaign: '',
		source: '',
		medium: '',
	},

	$scope.utmUrls = [],

	$scope.submit = function() {
		if($scope.url) {
			$scope.utmUrls.push($scope.url + '?utm_source=' + $scope.utm.source + '&utm_campaign=' + $scope.utm.campaign + '&utm_medium=' + $scope.utm.medium);
		}
	} 

}]);