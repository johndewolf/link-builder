angular.module('linkBuilder')
	.controller('navController', function(Auth, $state, $scope, $timeout, $mdSidenav, $log){
    // any time auth status updates, add the user data to scope
    Auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });

    $scope.logout = function() {
    	Auth.$unauth();
    	$state.go('utmBuilder');
    };

    $scope.toggleRight = buildToggler('right');

    $timeout(function() {
    	$scope.doFade = true;
    }, 2500);

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
 	});
