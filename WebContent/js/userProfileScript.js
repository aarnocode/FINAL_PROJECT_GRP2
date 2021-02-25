function initUserProfile(){
var enterNewPass = false;
	
	$.ajax({
		url: contextPath + "pages/profile",
		method: "POST",
		success: function(result){
			$("#profilecontainer").html(result);
		}
	});
	//Edit the Password
	$('#editpass').click(function(){
		$("#oldpassword").attr("disabled", false);
		$("#newpassword").attr("disabled", false);
		enterNewPass = true;
		
	});
	
	//Open Edit Modal
	$('#editBtn').click(function(){
		$("#editModal").css("display", "block");	
	});
	$('#cancel').click(function(){
		alert('f');
		Update();
		
	});
	//Close Edit modal
	$('#modalCloseBtn').click(function(){
		modalClose();
	});
	//Close Edit modal
	$('.close').click(function(){
		modalClose();
	});
	//Close Edit modal
	$('#cancelEditBtn').click(function(){
		modalClose();
	//UPDATE USER DATA
	});
	$('#submitEditBtn').click(function(){
		if(validation(firstname,lastname,mi,username,password,email,contactno,address)){
			clearErrMssg();
			Register(firstname,lastname,mi,username,password,email,contactno,address);
		}
		
	});
	
	
	$("#oldpassword").attr("disabled", true);
	$("#newpassword").attr("disabled", true);
	
	window.onclick = function(event) {
	  if (event.target == document.getElementById("editModal") || event.target == document.getElementById("ccModal")) {
		  modalClose();
	  }
	}
	maxLengthValidation();
}
//Optional Function(Inactive)
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
//Trasnfers data sent from controller to Edit Form
function transferInfoToEditInput(){
	$("#firstname").val($('#myuserfirstname').text());
	$("#lastname").val($('#myuserlastname').text());
	$("#mi").val($('#myusermi').text());
	//$("#oldpassword").val($('#myuserpassword').text());
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
		$("#ccnoinput").attr("disabled", true);
		$("#ccnoinput").attr("placeholder", "No Credit Card");
		//Dont put #myuserccno.text above this
		$('#myuserccno').text('No Credit Card');	
	}
	else{
		$('#addcc').addClass("notvisible");
	}
	
	
	transferInfoToEditInput();
}
//Open add Credit Card Modal
function openCC(){
	$("#ccModal").css("display", "block");	
}
//Clear Error Message After Successfull Update on User Info
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
//Close Modal Function
function modalClose(){

    $("#editModal").css("display", "none");
    $("#ccModal").css("display", "none");
//    $('.active').removeClass('active');
//    $('#username').val('');
//    $('#password').val('');
//    document.getElementById("errMsg").style.display = "none"
}
//Update Function
function Update(){
	$.ajax({
		url: contextPath + "pages/updateprofile",
		method: "POST"
		
	});

}

function validation(firstname,lastname,mi,password,email,contactno,address,newpassword){
	var res = true;
	var zipcode = $("#zipcode").val();
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
	var formatemail = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
	//Check if any of the input field is null or empty
	if(isEmptyOrNull(firstname)|| isEmptyOrNull(lastname) || isEmptyOrNull(mi) || isEmptyOrNull(password)
			|| isEmptyOrNull(password) || isEmptyOrNull(email) || isEmptyOrNull(contactno) || isEmptyOrNull(streetaddress)
			|| isEmptyOrNull(zipcode)  || isEmptyOrNull(city) || isEmptyOrNull(state) || isEmptyOrNull(city)){
		errmsg = "There Are Some Empty Fields, Please Fill them up";
		$("#errMessage1").text(errmsg);
		
		res = false;
		
	}
	//Check if any of the input field exceeded the max. char length and displays and error message
	if(firstname.length > 20 || lastname.length > 20 || mi.length > 1  || (password.length > 30 || password.length < 8) ||
			email.length > 50 || contactno.length > 11 || address.length > 300){
		if(password.length > 30 || password.length < 8)
			$("#pwerror").text("Password must have at least 8 Characters and only up to 30 Character ");
		if(address.length > 300)
			$("#errMessage2").text("Address is only up to 300 Character ");
		
		res = false;
	}
	
	if($('#oldpassword').val() != $('#myuserpassword').val()){
		$("#pwerror").text("Old Password Doesnt Match Your Current Password ");
		
		res = false;
	}
	
	//Checks for special/illegal Characters
	if(format.test(firstname)||format.test(lastname)||format.test(mi)||format.test(password)||formatemail.test(email)||
			format.test(contactno)){
		$("#errMessage3").text("Some Fields Contains Special Characters");
		res = false;
	}
	//Check for negative numbers
	if(contactno < 0 ||zipcode < 0){
		if(contactno < 0)
			$("#contacterror").text($("#contacterror").text()+"Invalid contact Number");
		if(zipcode < 0)
			$("#ziperror").text("Invalid Zip Code");
		
		res = false;
	}
	//Check if no countries is Selected
	if($("#country").val() == "Please Select"){
		$("#countryerror").text("Please Select a Country");
		res = false;
	}
	
	
	
	if(res)
		return true;
	else
		return false;
			
}
function maxLengthValidation(){
	//Check the max lenght and display messages and prevent from further input
	$('#firstname').on('keydown', function (e) {
	    if($(this).val().length>19 && e.which != 8 && e.which != 9){
	    	$("#fnerror").text("First Name is only up to 20 Character ");
	    	return false;
	    }
	          
	    if($(this).val().length<=20){
	    	$("#fnerror").text("");
	    }
	});
	$('#lastname').on('keydown', function (e) {
	    if($(this).val().length>19 && e.which != 8 && e.which != 9){
	    	$("#lnerror").text("Last Name is only up to 20 Character ");
	    	return false;
	    }
	   
	          
	    if($(this).val().length<=20){
	    	$("#lnerror").text("");
	    }
	});
	$('#mi').on('keydown', function (e) {
	    if($(this).val().length>0 && e.which != 8 && e.which != 9){
	    	$("#mierror").text("Middle initial is only up to 1 Character ");
	    	return false;
	    }
	          
	    if($(this).val().length<=1){
	    	$("#mierror").text("");
	    }
	});
	$('#oldpassword').on('keydown', function (e) {
	    if($(this).val().length>29 && e.which != 8 && e.which != 9){
	    	$("#pwerror").text("Password is only up to 30 Character ");
	    	return false;
	    }
	    else if($(this).val().length <= 28 && $(this).val().length >= 7){
	    	$("#pwerror").text("");
	    	
	    }
	    
	});
	$('#newpassword').on('keydown', function (e) {
	    if($(this).val().length>29 && e.which != 8 && e.which != 9){
	    	$("#pwerror").text("Password is only up to 30 Character ");
	    	return false;
	    }
	    else if($(this).val().length <= 28 && $(this).val().length >= 7){
	    	$("#pwerror").text("");
	    	
	    }
	    
	});
	$('#email').on('keydown', function (e) {
	    if($(this).val().length>49 && e.which != 8 && e.which != 9){
	    	$("#emailerror").text("Email is only up to 50 Character ");
	    	return false;
	    }
	          
	    if($(this).val().length<=50){
	    	$("#emailerror").text("");
	    }
	});
	$('#contactno').on('keydown', function (e) {
	    if($(this).val().length>10 && e.which != 8 && e.which != 9){
	    	$("#contacterror").text("Contact Number is only up to 11 Character ");
	    	return false;
	    }
	          
	    if($(this).val().length<=11){
	    	$("#contacterror").text("");
	    }
	});	
	
	 $("#contactno").keypress(function (e) {

         var key = e.charCode || e.keyCode || 0;

         // only numbers
         if (key < 48 || key > 58) {

             return false;
         }

     });
	 $("#zipcode").keypress(function (e) {

         var key = e.charCode || e.keyCode || 0;

         // only numbers
         if (key < 48 || key > 58) {

             return false;
         }

     });
}
function isEmptyOrNull(item){
	if (item == "" || item.length == 0 || item == null)
	    return true;
	else
		return false;
	
}
function clearErrMssg(){
	$("#errMessage1").text('');
	$("#errMessage2").text('');
	$("#errMessage3").text('');
	$("#fnerror").text('');
	$("#lnerror").text('');
	$("#mierror").text('');
	$("#pwerror").text('');
	$("#emailerror").text('');
	$("#contacterror").text('');
}