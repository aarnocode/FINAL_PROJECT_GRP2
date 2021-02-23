/*IF JS USE <PAGE NAME><"SCRIPT">.js*/
$(document).ready(function(){
	$.ajax({
		url:contextPath+"home",
		method:"POST",
		success:function(result){
			$("#mainContainer").html(result);
		}
	});
	
	
});