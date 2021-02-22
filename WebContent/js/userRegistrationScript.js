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
		
		alert('ff');
		$("#errMessage").text(errmsg);
		
		alert(firstname.length);
		if(validation(firstname,lastname,mi,username,password,email,contactno,address)){
			alert("validation passed");
		}
	
		
	});
	
	
}
function validation(firstname,lastname,mi,username,password,email,contactno,address){
	var res = true;
	//Check if any of the input field is null or empty
	if(isEmptyOrNull(firstname)|| isEmptyOrNull(lastname) || isEmptyOrNull(mi) || isEmptyOrNull(username)
			|| isEmptyOrNull(password) || isEmptyOrNull(email) || isEmptyOrNull(contactno) || isEmptyOrNull(streetaddress)
			|| isEmptyOrNull(zipcode)  || isEmptyOrNull(city) || isEmptyOrNull(state) || isEmptyOrNull(city)){
		errmsg = "Empty Fields";
		$("#errMessage1").text(errmsg);
		
		res = false;
		
	}
	//Check if any of the input field exceeded the max. char length and displays and error message
	if(firstname.length > 20 || lastname.length > 20 || mi.length > 1 || username.length > 16 || password.length > 30 ||
			email.length > 50 || contactno.length > 11 || address.length > 300){
		if(firstname.length > 20)
		$("#fnerror").text("First Name is only up to 20 Character");
		if(lastname.length > 20)
			$("#lnerror").text("Last Name is only up to 20 Character");
		if(mi.length > 1)
			$("#mierror").text("Middle initial is only up to 1 Character");
		if(username.length > 16)
			$("#unerror").text("Username is only up to 20 Character");
		if(password.length > 30 || password.length < 8)
			$("#pwerror").text("Password is must at least have 8 Charater and only up to 30 Character");
		if(email.length > 50)
			$("#emailerror").text("Email is only up to 20 Character");
		if(contactno.length > 11)
			$("#contacterror").text("Contact Number is only up to 20 Character");
		if(address.length > 300)
			$("#errMessage2").text("Address is only up to 300 Character");
		
		res = false;
	}
	alert(res);
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