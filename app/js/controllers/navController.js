angular.module('linkBuilder')
	.controller('navController', function(Auth, $state, $scope, $timeout){
    // any time auth status updates, add the user data to scope
    Auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });

    $scope.logout = function() {
    	Auth.$unauth();
    	$state.go('utmBuilder');
    };

    $timeout(function() {
    	$scope.doFade = true;
    }, 2500);

    // $scope.message = 'Welcome ' + $scope.authData.password.email;

 	});