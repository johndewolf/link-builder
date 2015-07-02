'use strict';

angular.module('linkBuilder')
	.controller('urlshortenerController', function(Auth, $http){
		var navCtrl = this;

		navCtrl.fullUrl = '';

		navCtrl.urls = [];

		navCtrl.postUrl = function() {
 			if (navCtrl.fullUrl) {
				debugger;
				gapi.client.urlshortener.url.insert({
					'longUrl': navCtrl.fullUrl
				})
				.then(function(response) {
					navCtrl.urls.push(response.result.id);
					navCtrl.fullUrl = '';
				}, function(reason) {
					console.log('Error: ' + reason.result.error.message);
				});
			}
		};

		navCtrl.submitUrl = function() {
			$http.post('https://www.googleapis.com/urlshortener/v1/url?fields=id&key=AIzaSyA2Fox4Wo3AS_-UrSls7FEsIv8g0useZCc', {'longUrl': navCtrl.fullUrl}).
				success(function(data) {
					var response = data.id;
					navCtrl.urls.push(response);
				});
		}
	});
