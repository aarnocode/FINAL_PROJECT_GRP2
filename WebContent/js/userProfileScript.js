function initUserProfile(){	
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
		$("#pwerror").removeClass("notvisible");
	});
	//Edit Credit Card No.
	$('#editccno').click(function(){
		$("#ccnoinput").attr("disabled", false);
		$("#ccnoinputerror").removeClass("notvisible");	
	});
	
	//Open Edit Modal
	$('#editBtn').click(function(){
		$("#editModal").css("display", "block");	
	});
	$('#cancel').click(function(){
		//Update2();
		
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
	});
	$('#cancelccBtn').click(function(){
		modalClose();
	});
	//UPDATE USER DATA
	$('#submitEditBtn').click(function(){
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		var mi = $("#mi").val();
		var password = $("#oldpassword").val();
		var newpassword = $("#newpassword").val();
		var email = $("#email").val();
		var contactno = $("#contactno").val();
		var address = $("#streetaddress").val() + ", "+$("#zipcode").val()+", "+$("#city").val()+", "+$("#state").val()+", "+$("#country").val();
		var errmsg = "Error "+address;
		var ccno = $("#ccnoinput").val();
		var isPassInputDisabled = $('#newpassword').prop('disabled');
		var isCcnoInputDisabled = $('#ccnoinput').prop('disabled');
		
		$("#errMessage1").text('');
		$("#errMessage2").text('');
		$("#errMessage3").text('');
		$("#contacterror").text('');
		if(validation(firstname,lastname,mi,password,email,contactno,address,newpassword,ccno,isPassInputDisabled,isCcnoInputDisabled)){
			var sameemail = false;
			clearErrMssg();
			if(isPassInputDisabled === true){
				newpassword = $('#myuserpassword').text();
			}
			if(isCcnoInputDisabled === true){
				ccno = "0";
			}
			if($("#myuseremail").text() === $.trim(email)){
				sameemail = true;
			}
			var streetaddress =$("#streetaddress").val();
			var zipcode =$("#zipcode").val();
			var city =$("#city").val();
			var state =$("#state").val();
			var country =$("#country").val();
			alert(sameemail);
			Update(firstname,lastname,mi,email,contactno,streetaddress,zipcode,city,state,country,newpassword,ccno,sameemail);
		}
		
	});
	//ADD CREDIT CARD
	$('#addccBtn').click(function(){
		var ccno = $("#addccnoinput").val();
		$("cc#errMessage1").text('');
		if(addCreditCardValidation(ccno)){
			clearErrMssg();
			alert("validation pass");
			AddCreditCard(ccno);
		}
	});
	$("#ccnoinput").attr("disabled", true);
	$("#oldpassword").attr("disabled", true);
	$("#newpassword").attr("disabled", true);
	//Optional Modal Close Function
//	window.onclick = function(event) {
//	  if (event.target == document.getElementById("editModal") || event.target == document.getElementById("ccModal")) {
//		  modalClose();
//	  }
//	}
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
	$("#ccnoinput").val($('#myuserccno').text());
	$("#email").val($('#myuseremail').text());
	$("#streetaddress").val($('#myuserstreetaddress').text());
	$("#zipcode").val($('#myuserzipcode').text());
	$("#city").val($('#myusercity').text());
	$("#state").val($('#myuserstate').text());
	$("#country").val($('#myusercountry').text());
}
//Condition if User does/doesnt have Credit Card
function initUserProfileResult(){
	$("#editBtn").removeClass("notvisible");
	$("#cancel").removeClass("notvisible");
	
	if($.trim($('#myuserccno').text()) == ""){//No Credit Card
		$("#ccnoinput").attr("placeholder", "No Credit Card");
		$('#addcc').removeClass("notvisible");
		//Dont put #myuserccno.text above this
		$('#myuserccno').text('No Credit Card');	
	}
	else{//Have Credit Card
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
}
//Update Function
function Update(firstname,lastname,mi,email,contactno,streetaddress,zipcode,city,state,country,newpassword,ccno,sameemail){
	$.ajax({
		url: contextPath + "pages/updateprofile",
		method: "POST",
		data: {
			firstname: firstname,
			lastname: lastname,
			mi: mi,
			email: email,
			contactno: contactno,
			streetaddress: streetaddress,
			zipcode: zipcode,
			city: city,
			state: state,
			country: country,
			password: newpassword,
			ccno : ccno,
			sameemail : sameemail
		}
//	,
//		success: function(result){
//			$("#updatecontainer").html(result);
//		}
	});
}
function AddCreditCard(ccno){
	$.ajax({
		url: contextPath + "pages/addcc",
		method: "POST",
		data: {
			ccno : ccno
		}
	});
}
//Test Update Function
function Update2(){
	$.ajax({
		url: contextPath + "pages/updateprofile",
		method: "POST"
		
	});

}
// Validation for Add Credit Card
function addCreditCardValidation(ccno){
	var res = true;
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	//Check if any of the input field is null or empty
	if(isEmptyOrNull(ccno)){
		//alert('a');
		errmsg = "There Are Some Empty Fields, Please Fill them up";
		$("#ccerrMessage1").text(errmsg);
		
		res = false;
		
	}
	//Check if any of the input field exceeded the max. char length and displays and error message
	if(ccno.length > 25){
		//alert('b');
		$("#addccnoerror").text("Credit Card Number is only up to 25 Character ");				
		res = false;
	}	
	//Checks for special/illegal Characters
	if(format.test(ccno)){
		//alert('d');
		$("#ccerrMessage1").text("Some Fields Contains Special Characters");
		res = false;
	}
	//Check for negative numbers
	if(ccno <= 0){
		//alert('e');
		$("#addccnoerror").text("Invalid Credit Card Number");
		res = false;
	}	
	
	if(res)
		return true;
	else
		return false;
}
//Input Validation
function validation(firstname,lastname,mi,password,email,contactno,address,newpassword,ccno,isPassInputDisabled,isCcnoInputDisabled){
	var res = true;
	var zipcode = $("#zipcode").val();
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
	var formatemail = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
	//Check if any of the input field is null or empty
	if(isEmptyOrNull(firstname)|| isEmptyOrNull(lastname) || isEmptyOrNull(mi) || (isEmptyOrNull(password)&&isPassInputDisabled === false)
			|| isEmptyOrNull(email) || isEmptyOrNull(contactno) || isEmptyOrNull(streetaddress) || isEmptyOrNull(zipcode) 
			|| isEmptyOrNull(city) || isEmptyOrNull(state) || isEmptyOrNull(city) || (isEmptyOrNull(newpassword)&&isPassInputDisabled === false)
			||	(isEmptyOrNull(ccno) && isCcnoInputDisabled === false)){
		//alert('a');
		errmsg = "There Are Some Empty Fields, Please Fill them up";
		$("#errMessage1").text(errmsg);
		
		res = false;
		
	}
	//Check if any of the input field exceeded the max. char length and displays and error message
	if(firstname.length > 20 || lastname.length > 20 || mi.length > 1  || ((password.length > 30 || password.length < 8)&&isPassInputDisabled === false) || 
			email.length > 50 || contactno.length > 11 || address.length > 300 || ((newpassword.length > 30 || newpassword.length < 8)&&isPassInputDisabled === false)||
				(ccno.length > 25 && isCcnoInputDisabled === false)){
		//alert('b');
		if(firstname.length > 20)
			$("#fnerror").text("First Name is only up to 20 Character ");
		if(lastname.length > 20)
			$("#lnerror").text("Last Name is only up to 20 Character ");
		if(mi.length > 1)
			$("#mierror").text("Middle initial is only up to 1 Character ");
		if(((password.length > 30 || password.length < 8)&&isPassInputDisabled === false) || ((newpassword.length > 30 || newpassword.length < 8)&&isPassInputDisabled === false))
			$("#pwerror").text("Password must have at least 8 Characters and only up to 30 Character ");
		if(email.length > 50)
			$("#emailerror").text("Email is only up to 50 Character ");
		if(contactno.length > 11)
			$("#contacterror").text("Contact Number is only up to 11 Character ");
		if(address.length > 300)
			$("#errMessage2").text("Address is only up to 300 Character ");
		if(ccno.length > 25)
			$("#ccnoinputerror").text("Credit Card Number is only up to 25 Character ");				
		res = false;
	}
	//Check is Oldpassword matches Current Password while edit password is enabled
	if(password != $('#myuserpassword').text() && isPassInputDisabled === false){
		//alert('c');
		$("#pwerror").text("Old Password Doesnt Match Your Current Password ");
		res = false;
	}
	
	//Checks for special/illegal Characters
	if(format.test(firstname)||format.test(lastname)||format.test(mi)||formatemail.test(email)||
			format.test(contactno)||(format.test(newpassword)&&isPassInputDisabled === false)||(format.test(password)&&isPassInputDisabled === false)||
			(format.test(ccno)&&isCcnoInputDisabled === false)){
		//alert('d');
		$("#errMessage3").text("Some Fields Contains Special Characters");
		res = false;
	}
	//Check for negative numbers
	if(contactno < 0 ||zipcode < 0 || ccno < 0){
		//alert('e');
		if(contactno < 0)
			$("#contacterror").text("Invalid contact Number");
		if(ccno < 0)
			$("#ccnoinputerror").text("Invalid Credit Card Number");
		if(zipcode < 0)
			$("#ziperror").text("Invalid Zip Code");
		
		res = false;
	}
	//Check if no countries is Selected
	if($("#country").val() == "Please Select"){
		//alert('f');
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
	$('#ccnoinput').on('keydown', function (e) {
	    if($(this).val().length>24 && e.which != 8 && e.which != 9){
	    	$("#ccnoinputerror").text("Credit Card Number is only up to 25 Character ");
	    	return false;
	    }
	          
	    if($(this).val().length<=25){
	    	$("#ccnoinputerror").text("");
	    }
	});	
	$('#addccnoinput').on('keydown', function (e) {
	    if($(this).val().length>24 && e.which != 8 && e.which != 9){
	    	$("#addccnoerror").text("Credit Card Number is only up to 25 Character ");
	    	return false;
	    }
	          
	    if($(this).val().length<=25){
	    	$("#addccnoerror").text("");
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
	 $("#ccnoinput").keypress(function (e) {

         var key = e.charCode || e.keyCode || 0;

         // only numbers
         if (key < 48 || key > 58) {

             return false;
         }

     });
	 $("#addccnoinput").keypress(function (e) {

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
	$("#ccerrMessage1").text('');
	$("#fnerror").text('');
	$("#lnerror").text('');
	$("#mierror").text('');
	$("#pwerror").text('');
	$("#emailerror").text('');
	$("#contacterror").text('');
	$("#ccnoinputerror").text('');
	$("#addccnoerror").text('');
	
}