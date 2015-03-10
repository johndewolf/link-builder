$(document).ready(function(){
	$("#twitterSubmit").on("click", function() {
		$( "#twitterComplete" ).text( "http://twitter.com/intent/tweet?url=http://" +
				$("#twitterUrl").val() + "&amp;text=" +
				$("#twitterCopy").val().replace(/ /g, "%20"));
	});

  $("#facebookSubmit").on("click", function() {
    $("#facebookComplete").text("https://www.facebook.com/sharer/sharer.php?u="+$("#facebookURL").val());
  });
});