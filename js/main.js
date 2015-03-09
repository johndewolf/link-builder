$(document).ready(function(){
	$("#twitterSubmit").on("click", function() {
		$( "#twitterComplete" ).text( "http://twitter.com/intent/tweet?url=http://" + 
				$("#twitterUrl").val() + "&amp;text=" + 
				$("#twitterCopy").val().replace(/ /g, "%20")); 
	});
});