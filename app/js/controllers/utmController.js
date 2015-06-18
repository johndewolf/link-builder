angular.module('linkBuilder')
	.controller('utmController', function() {
		var utmCtrl = this;
		utmCtrl.url = '';
		utmCtrl.utm = {
			campaign: '',
			source: '',
			medium: '',
		},

		utmCtrl.urls = [],

		utmCtrl.submit = function() {
			if(utmCtrl.url) {
				utmCtrl.urls.push(utmCtrl.url + '?utm_source=' + utmCtrl.utm.source + '&utm_campaign=' + utmCtrl.utm.campaign + '&utm_medium=' + utmCtrl.utm.medium);
			}
		} 

});