function initUserReg(){
	
	
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
		$("#errMessage1").text('');
		$("#errMessage2").text('');
		$("#errMessage3").text('');
		$("#contacterror").text('');
		
		
		if(validation(firstname,lastname,mi,username,password,email,contactno,address)){
			alert("validation passed");
			Register(firstname,lastname,mi,username,password,email,contactno,address);
		}
		
		
		
	});
	
	
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
			address: address,
		},
		success: function(result){
			$("#mycontainer").html(result);
		}
	});
}

function validation(firstname,lastname,mi,username,password,email,contactno,address){
	var res = true;
	var zipcode = $("#zipcode").val();
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
	var formatemail = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
	//Check if any of the input field is null or empty
	if(isEmptyOrNull(firstname)|| isEmptyOrNull(lastname) || isEmptyOrNull(mi) || isEmptyOrNull(username)
			|| isEmptyOrNull(password) || isEmptyOrNull(email) || isEmptyOrNull(contactno) || isEmptyOrNull(streetaddress)
			|| isEmptyOrNull(zipcode)  || isEmptyOrNull(city) || isEmptyOrNull(state) || isEmptyOrNull(city)){
		errmsg = "There Are Some Empty Fields, Please Fill them up";
		$("#errMessage1").text(errmsg);
		
		res = false;
		
	}
	//Check if any of the input field exceeded the max. char length and displays and error message
	if(firstname.length > 20 || lastname.length > 20 || mi.length > 1 || username.length > 16 || password.length > 30 ||
			email.length > 50 || contactno.length > 11 || address.length > 300){
		if(firstname.length > 20) 
		$("#fnerror").text("First Name is only up to 20 Character ");
		if(lastname.length > 20)
			$("#lnerror").text("Last Name is only up to 20 Character ");
		if(mi.length > 1)
			$("#mierror").text("Middle initial is only up to 1 Character ");
		if(username.length > 16)
			$("#unerror").text("Username is only up to 20 Character ");
		if(password.length > 30 || password.length < 8)
			$("#pwerror").text("Password is must at least have 8 Charater and only up to 30 Character ");
		if(email.length > 50)
			$("#emailerror").text("Email is only up to 20 Character ");
		if(contactno.length > 11)
			$("#contacterror").text("Contact Number is only up to 11 Character ");
		if(address.length > 300)
			$("#errMessage2").text("Address is only up to 300 Character ");
		
		res = false;
	}
	//Checks for special/illegal Characters
	if(format.test(firstname)||format.test(lastname)||format.test(mi)||format.test(username)||format.test(password)||formatemail.test(email)||
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
		$("#countryerror").text("Invalid Zip Code");
		res = false;
	}
	
	
	
	if(res)
		return true;
	else
		return false;
			
}
function isEmptyOrNull(item){
	if (item == "" || item.length == 0 || item == null)
	    return true;
	else
		return false;
	
}