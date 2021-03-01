var isLoggedIn = $("#isLoggedIn").val();
if(isLoggedIn == "false"){
	$(".loginBlur").show();
}else{
	$(".loginBlur").hide();
}

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

$(".btnLogin").click(function(){
	console.log("clicked");
	$.ajax({
		url:contextPath + "login",
		method: "POST",
		data:{
			username:$(".txtUsername").val(),
			password:$(".txtPassword").val()
		},
		success: function(){
			console.log("success cart cliked");
			window.location="../";
		}
	});
});

$(".txtPassword, .txtUsername").keyup(function(e){
	if(e.keyCode === 13){
		$(".btnLogin").trigger("click");
	}
});

$("#btnClose").click(function(){
	$(".txtUsername").val("");
	$(".txtPassword").val("");
	$("#notice").text("");
	$(".loginBlur").fadeOut(500);
});