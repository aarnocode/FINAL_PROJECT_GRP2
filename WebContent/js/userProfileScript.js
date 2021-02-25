function initUserProfile(){

	
	$.ajax({
		url: contextPath + "pages/profile",
		method: "POST",
		success: function(result){
			$("#profilecontainer").html(result);
		}
	});
	$('#editpass').click(function(){
		$("#oldpassword").attr("disabled", false);
		$("#newpassword").attr("disabled", false);
		
	});
	
	$('#editBtn').click(function(){
		$("#editModal").css("display", "block");
		//$("#ccModal").css("display", "block");	
	});
//	$('#addcc').click(function(){
//		alert('f');
//		$("#ccModal").css("display", "block");	
//	});
	$('#cancel').click(function(){
		alert('f');
		Update();
		
	});
	$('#modalCloseBtn').click(function(){
		modalClose();
	});
	$('.close').click(function(){
		modalClose();
	});
	
	$('#cancelEditBtn').click(function(){
		modalClose();
		
	});
	$("#oldpassword").attr("disabled", true);
	$("#newpassword").attr("disabled", true);
	
	window.onclick = function(event) {
	  if (event.target == document.getElementById("editModal") || event.target == document.getElementById("ccModal")) {
		  modalClose();
	  }
	}
}
function disableEditInput(){
	$("#firstname").attr("disabled", true);
	$("#lastname").attr("disabled", true);
	$("#mi").attr("disabled", true);
	$("#oldpassword").attr("disabled", true);
	$("#newpassword").attr("disabled", true);
	$("#contactno").attr("disabled", true);
	$("#email").attr("disabled", true);
	$("#streetaddress").attr("disabled", true);
	$("#city").attr("disabled", true);
	$("#state").attr("disabled", true);
	$("#zipcode").attr("disabled", true);
	$("#country").attr("disabled", true);
}
function transferInfoToEditInput(){
	$("#firstname").val($('#myuserfirstname').text());
	$("#lastname").val($('#myuserlastname').text());
	$("#mi").val($('#myusermi').text());
	$("#oldpassword").val($('#myuserpassword').text());
	$("#contactno").val($('#myusercontactno').text());
	$("#email").val($('#myuseremail').text());
	$("#streetaddress").val($('#myuserstreetaddress').text());
	$("#zipcode").val($('#myuserzipcode').text());
	$("#city").val($('#myusercity').text());
	$("#state").val($('#myuserstate').text());
	$("#country").val($('#myusercountry').text());
}
function initUserProfileResult(){
	$("#editBtn").removeClass("notvisible");
	$("#cancel").removeClass("notvisible");
	
	if($.trim($('#myuserccno').text()) == ""){	
		$('#myuserccno').text('No Credit Card');	
	}
	else{
		alert('b');
		$('#addcc').addClass("notvisible");
	}
	
	
	transferInfoToEditInput();
}
function openCC(){

	$("#ccModal").css("display", "block");	
}
function clearErrMssg(){
	$("#errMessage1").text('');
	$("#errMessage2").text('');
	$("#errMessage3").text('');
	$("#fnerror").text('');
	$("#lnerror").text('');
	$("#unerror").text('');
	$("#pwerror").text('');
	$("#emailerror").text('');
	$("#contacterror").text('');
}
function modalClose(){
    $("#editModal").css("display", "none");
    $("#ccModal").css("display", "none");
//    $('.active').removeClass('active');
//    $('#username').val('');
//    $('#password').val('');
//    document.getElementById("errMsg").style.display = "none"
}
function Update(){
	$.ajax({
		url: contextPath + "pages/updateprofile",
		method: "POST"
		
	});

}

