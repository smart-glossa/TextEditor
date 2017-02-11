$(document).ready(function(){
	$("#fs").change(function() { 
	    $('.changeMe').css("font-family", $(this).val());

	});

	$("#size").change(function() {
	    $('.changeMe').css("font-size", $(this).val() + "px");
	});
	
	$("#sole").click(function() {
	    $('.changeMe').css("textalign", $(this).val());
	});
	
	$("#shall").click(function() {
	    $('.changeMe').css("text-align", $(this).val());
	});
	
	$("#show").click(function() {
	    $('.changeMe').css("text-align", $(this).val());
	});
	
	
});