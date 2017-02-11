$(document).ready(function(){
	$("#fs").change(function() { 
	    $('.changeMe').css("font-family", $(this).val());

	});

	$("#size").change(function() {
	    $('.changeMe').css("font-size", $(this).val() + "px");
	});
	
	$("#sole").change(function() {
	    $('.changeMe').css("textalign", $(this).val());
	});
	
	$("#shall").change(function() {
	    $('.changeMe').css("text-align", $(this).val());
	});
	
	$("#show").change(function() {
	    $('.changeMe').css("text-align", $(this).val());
	});
	
	
});