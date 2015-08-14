'use strict';

angular.module('linkBuilder')
	.factory('User', function($firebaseAuth,$firebaseObject, FirebaseUrl) {
    var userDetails = [];

    var addUserDetails = function(detail) {
      userDetails.push(detail);
    };

    var getUserDetails = function() {
      return userDetails;
    }
    return {
      addUserDetails: addUserDetails,
      getUserDetails: getUserDetails
    }
	});
