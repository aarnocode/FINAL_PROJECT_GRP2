$("#failed").hide();
$("#btnHome").click(function(){
	$.ajax({
		url:contextPath + "home",
		method :"POST",
		success: function(){
			window.location = "../";
		}
	});
});

$(document).ready(function(){
	if($("#checkoutStatus").val() == "failed"){
		$("#failed").show();
		$("#success").hide();
	}
});