angular.module('linkBuilder')
	.controller('topController', function($scope, $mdSidenav){
	  $scope.openRightMenu = function() {
	    $mdSidenav('right').toggle();
	  };
	});