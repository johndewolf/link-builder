'use strict';

angular.module('linkBuilder')
	.controller('socialLinkController', function() {
		var socialLinkCtrl = this;
		socialLinkCtrl.url = '';
		socialLinkCtrl.twitterCopy = '';

		function replaceSpaces(copy, network) {
			if(network === 'twitter'){
				var tweetLength = copy.substr(0, 119)
				return encodeURIComponent(tweetLength);

	  	} else {
				return encodeURIComponent(copy);
			}
		};

		socialLinkCtrl.twitterReturnUrl = function() {
			return 'http://twitter.com/intent/tweet?text='+ replaceSpaces(socialLinkCtrl.twitterCopy, 'twitter') + '&' + 'url=' + socialLinkCtrl.url;
		};

		socialLinkCtrl.tweetFullChara = function() {
			return socialLinkCtrl.twitterCopy.length + socialLinkCtrl.url.length + 9;
		};

		socialLinkCtrl.facebookReturnUrl = function() {
			return 'http://www.facebook.com/sharer/sharer.php?u=' + socialLinkCtrl.url;
		};

		socialLinkCtrl.linkedin = {
			title: '',
			summary: ''
		};

		socialLinkCtrl.linkedinReturnUrl = function() {
			return 'http://www.linkedin.com/shareArticle?mini=true&url=' + socialLinkCtrl.url + '&title=' + replaceSpaces(socialLinkCtrl.linkedin.title, 'linkedin') + '&summary=' + replaceSpaces(socialLinkCtrl.linkedin.summary, "linkedin");
		};

		socialLinkCtrl.gplusReturnUrl = function(){
			return 'https://plus.google.com/share?url=' + socialLinkCtrl.url;
		};
});
