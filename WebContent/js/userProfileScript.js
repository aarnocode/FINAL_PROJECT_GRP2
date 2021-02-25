function initUserProfile(){

	
	$.ajax({
		url: contextPath + "pages/profile",
		method: "POST",
		success: function(result){
			$("#profilecontainer").html(result);
		}
	});
	
	
	$('#editBtn').click(function(){
		$("#editModal").css("display", "block");
//		if($('#editsave').val() == "Edit"){
//			$('#editsave').val("Save");
//		}
//		else if($('#editsave').val() == "Save"){
//			$('#editsave').val("Edit");
//		}
		
		
	});
	$('#cancel').click(function(){
		alert('f');
		Update();
		
	});
	$('#modalCloseBtn').click(function(){
		modalClose();
	});
	
	
	$('#cancelEditBtn').click(function(){
		modalClose();
		
	});
	
	window.onclick = function(event) {
	  if (event.target == document.getElementById("editModal")) {
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
		alert('a');
	}
	else{
		alert('b');
		$('#addcc').addClass("notvisible");
	}
	
	
	transferInfoToEditInput();
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

