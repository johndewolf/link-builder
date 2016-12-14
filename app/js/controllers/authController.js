angular.module('linkBuilder')
	.controller('authController', function(Auth, $state){
		var authCtrl = this;

		authCtrl.user = {
			email: '',
			password: ''
		}

		authCtrl.login = function() {
			Auth.$authWithPassword(authCtrl.user).then(function (auth) {
				$state.go('utmBuilder');
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
