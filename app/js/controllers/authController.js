angular.module('linkBuilder')
	.controller('authController', function(Auth, $state, $log){
		var authCtrl = this;

		authCtrl.user = {
			email: '',
			password: ''
		}

		authCtrl.login = function() {
			Auth.$authWithPassword(authCtrl.user).then(function (auth) {
				$state.go('urlBuilder');
			}, function (error){
				authCtrl.error = error;
			});
		};

		authCtrl.register = function () {
			Auth.$createUser(authCtrl.user).then(function (user){
				authCtrl.login();
			}, function(error){
				authCtrl.error = error;
				authCtrl.$log = 'bye';
			});
		};
		

	});