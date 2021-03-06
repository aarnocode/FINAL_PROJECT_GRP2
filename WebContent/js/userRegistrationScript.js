var isLoggedIn = ""; 


function initUserReg(){
	isLoggedIn = $("#isLoggedIn").val();
	if(isLoggedIn == "false"){
		$(".loginBlur").show();
	}else{
		$(".loginBlur").hide();
	}
	$(".logo").click(function(){
		//toMainMenu();
	});
	$("#submitregBtn").click(function(){
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		var mi = $("#mi").val();
		var username = $("#username").val();
		var password = $("#password").val();
		var email = $("#email").val();
		var contactno = $("#contactno").val();
		var address = $("#streetaddress").val() + ", "+$("#zipcode").val()+", "+$("#city").val()+", "+$("#state").val()+", "+$("#country").val();
		var errmsg = "Error "+address;
		refreshErrMsg();
		
		if(validation(firstname,lastname,mi,username,password,email,contactno,address)){
			clearErrMssg();
			Register(firstname,lastname,mi,username,password,email,contactno,address);
			cleartTxtBox();
		}
		
		
	});
	maxLengthValidation();
	
}

function refreshErrMsg(){//Clears Relevant Message every time user registers
	$("#errMessage1").text('');
	$("#errMessage2").text('');
	$("#errMessage3").text('');
	$("#pwerror").text('');
	$("#contacterror").text('');
	$("#countryerror").text('');
	$("#msgresult1").text('');
	$("#msgresult2").text('');
}
function toMainMenu(){//Redirect to Main Menu if you click the logo
	if(window.location.href == "http://localhost:8080/OnlineStore/pages/userRegistration.jsp" ||
			window.location.href == "http://localhost:8080/OnlineStore/pages/userRegistration.jsp#"){
		window.location.href = 'http://localhost:8080/OnlineStore/pages/home.jsp';
	}
}
function Register(firstname,lastname,mi,username,password,email,contactno,address){
	$.ajax({
		url: contextPath + "pages/register",
		method: "POST",
		data: {
			firstname: firstname,
			lastname: lastname,
			mi: mi,
			username: username,
			password: password,
			email: email,
			contactno: contactno,
			address: address
		},
		success: function(result){
			//window.location.href = 'http://localhost:8080/OnlineStore/';
			$("#regcontainer").html(result);
		}
	});
}
function clearErrMssg(){
	$("#errMessage1").text('');
	$("#errMessage2").text('');
	$("#errMessage3").text('');
	$("#fnerror").text('');
	$("#lnerror").text('');
	$("#mierror").text('');
	$("#unerror").text('');
	$("#pwerror").text('');
	$("#emailerror").text('');
	$("#contacterror").text('');
	$("#countryerror").text('');
}
function cleartTxtBox(){
	$("#firstname").val('');
	$("#lastname").val('');
	$("#mi").val('');
	$("#username").val('');
	$("#password").val('');
	$("#confirmpass").val('');
	$("#email").val('');
	$("#contactno").val('');
	$("#streetaddress").val('');
	$("#zipcode").val('');
	$("#city").val('');
	$("#state").val('');
	$("#country").val("Please Select");
}
function validation(firstname,lastname,mi,username,password,email,contactno,address){//Validation for the Data Inputted by user
	var res = true;
	var zipcode = $("#zipcode").val();
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
	var formatemail = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
	//Check if any of the input field is null or empty
	if(isEmptyOrNull(firstname)|| isEmptyOrNull(lastname) || isEmptyOrNull(mi) || isEmptyOrNull(username)
			|| isEmptyOrNull(password) || isEmptyOrNull(email) || isEmptyOrNull(contactno) || isEmptyOrNull($("#streetaddress").val())
			|| isEmptyOrNull(zipcode)  || isEmptyOrNull($("#city").val()) || isEmptyOrNull($("#state").val()) || isEmptyOrNull($("#country").val())){
		errmsg = "There Are Some Empty Fields, Please Fill them up";
		$("#errMessage1").text(errmsg);
		
		res = false;
		
	}
	//Check if any of the input field exceeded the max. char length and displays and error message
	if(firstname.length > 20 || lastname.length > 20 || mi.length > 1 || username.length > 16 || (password.length > 30 || password.length < 8) ||
			email.length > 50 || contactno.length > 11 || address.length > 300){
		if(firstname.length > 20)
			$("#fnerror").text("First Name is only up to 20 Character ");
		if(lastname.length > 20)
			$("#lnerror").text("Last Name is only up to 20 Character ");
		if(mi.length > 1)
			$("#mierror").text("Middle initial is only up to 1 Character ");
		if(mi.length > 16)
			$("#unerror").text("Username is only up to 16 Character ");
		if(password.length > 30 || password.length < 8)
			$("#pwerror").text("Password must have at least 8 Characters and only up to 30 Character ");
		if(email.length > 50)
			$("#emailerror").text("Email is only up to 50 Character ");
		if(contactno.length > 11)
			$("#contacterror").text("Contact Number is only up to 11 Character ");
		if(address.length > 300)
			$("#errMessage2").text("Address is only up to 300 Character ");
		res = false;
	}
	
	if($('#password').val() != $('#confirmpass').val()){
		$("#pwerror").text("Password Doesnt Match ");
		
		res = false;
	}
	
	//Checks for special/illegal Characters
	if(format.test(firstname)||format.test(lastname)||format.test(mi)||format.test(username)||format.test(password)||formatemail.test(email)||
			format.test(contactno)||format.test($("#city").val())||format.test($("#state").val())){
		$("#errMessage3").text("Some Fields Contains Special Characters");
		res = false;
	}
	//Check for negative numbers
	if(contactno < 0 ||zipcode < 0){
		if(contactno < 0)
			$("#contacterror").text("Invalid contact Number");
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
function maxLengthValidation(){//Validation while typing for textbox
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
	$('#username').on('keydown', function (e) {
	    if($(this).val().length>15 && e.which != 8 && e.which != 9){
	    	$("#unerror").text("Username is only up to 16 Character ");
	    	return false;
	    }
	          
	    if($(this).val().length<=16){
	    	$("#unerror").text("");
	    }
	});
	$('#password').on('keydown', function (e) {
	    if($(this).val().length>29 && e.which != 8 && e.which != 9){
	    	$("#pwerror").text("Password is only up to 30 Character ");
	    	return false;
	    }
	    else if($(this).val().length <= 28 && $(this).val().length >= 7){
	    	$("#pwerror").text("");
	    	
	    }
	    
	});
	$('#confirmpass').on('keydown', function (e) {
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
function isEmptyOrNull(item){//Returns Results if data is null or empty
	if ($.trim(item) == "" || item.length == 0 || item == null)
	    return true;
	else
		return false;
	
}
function messageResult(){//Change success message to green
	if($("#msgresult1").text() === "You have Successfully Registered"){
		$("#msgresult1").removeClass("errormsg");
		$("#msgresult1").addClass("successmsg");
	}
}

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
			window.location="../pages/userRegistration.jsp";
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
	if(isLoggedIn == "false"){
		$.ajax({
			url: contextPath + "resetstate",
			method:"POST"
		});
	}
});

$("#register").click(function(){
	window.location.href = 'http://localhost:8080/OnlineStore/pages/userRegistration.jsp';
});

