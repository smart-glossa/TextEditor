$(document).ready(function(){
	$("#fs").change(function() { 
	    $('.changeMe').css("font-family", $(this).val());

	});

	$("#size").change(function() {
	    $('.changeMe').css("font-size", $(this).val() + "px");
	});
	
	$('.p').each(function() {
	      var width = $(this).width();   
	       alert(width);
	       $(this).css({'margin-left': -width / 2, 'text-align': 'center'}).after('<br /><br />');    
	   });
	
});