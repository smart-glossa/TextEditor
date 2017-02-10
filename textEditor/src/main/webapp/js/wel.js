$(document).ready(function(){
	$("#fs").change(function() {
	    //alert($(this).val());
	    $('.changeMe').css("font-family", $(this).val());

	});

	$("#size").change(function() {
	    $('.changeMe').css("font-size", $(this).val() + "px");
	});
	
	
});