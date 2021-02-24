<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="../css/footer.css" type="text/css">
<link rel="stylesheet" href="../css/header.css" type="text/css">
<link rel="stylesheet" href="../css/userProfileStyle.css" type="text/css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="../js/userProfileScript.js"></script>
<script src="../js/bootstrap.js"></script>
<title>User Registration</title>
</head>
<body>
	<jsp:include page="header.jsp"/>
	
	<div>
		
		<div id="profilecontainer">
			
	 	</div>
		
		
		<div class="editform">
			<p class="errormsg" id="errMessage2"></p>
			<p class="errormsg" id="errMessage3"></p>
			
			<input type="textbox" id="firstname" placeholder="First Name"><br>
			<p class="errormsg" id="fnerror"></p>
			
			<input type="textbox" id="lastname" placeholder="Last Name"><br>
			<p class="errormsg" id="lnerror"></p>
			
			<input type="textbox" id="mi" placeholder="Middle Initial"><br>
			<p class="errormsg" id="mierror"></p>
			
			<input type="textbox" id="username" placeholder="Username"><br>
			<p class="errormsg" id="unerror"></p>
			
			<input type="password" id="password" placeholder="Password"><br>
			<input type="password" id="confirmpass" placeholder="Confirm Password"><br>
			<p class="errormsg" id="pwerror">Password must have at least 8 Characters</p>
			
			<input type="textbox" id="email" placeholder="Email"><br>
			<p class="errormsg" id="emailerror"></p>
			
			<input type="number" id="contactno" placeholder="Contact No"><br>
			<p class="errormsg" id="contacterror"></p>
			
			<input type="textbox" id="streetaddress" placeholder="Street Address"><br>
		
			<input type="textbox" id="city" placeholder="City"><br>
		
			<input type="textbox" id="state" placeholder="State/Province"><br>
		
			<input type="number" id="zipcode" placeholder="Postal / Zip Code"><br>
			<p class="errormsg" id="ziperror"></p>
		
			Country: <select name="country" id="country">
			<option selected="selected">Please Select</option>
			<option value="Philippines">Philippines</option>
		    <option value="Malaysia">Malaysia</option>
		    <option value="Indonesia">Indonesia</option>
		    <option value="Japan">Japan</option>
		  </select>
		  <p class="errormsg" id="countryerror"></p>
		  <br>
		  
		  <input type="button" id="submitregBtn" value="Register">
		</div>
	</div>
	
	<div id="regcontainer">
  			
  	</div>
	
	
	 


<script type="text/javascript">
		$(document).ready(function(){
			initUserProfile();
		});
</script>
</body>
</html>