<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="css/userRegistrationStyle.css" type="text/css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="js/userRegistrationScript.js"></script>
<script src="js/bootstrap.js"></script>
<title>Main</title>
</head>
<body>

	<input type="textbox" id="firstName" placeholder="First Name"><br>
	<input type="textbox" id="lastname" placeholder="Last Name"><br>
	<input type="textbox" id="mi" placeholder="Middle Initial"><br>
	<input type="textbox" id="username" placeholder="Username"><br>
	<input type="textbox" id="password" placeholder="Password"><br>
	<input type="textbox" id="email" placeholder="Email"><br>
	<input type="number" id="contactno" placeholder="Contact No"><br>
	<input type="textbox" id="streetaddress" placeholder="Street Address"><br>
	<input type="textbox" id="city" placeholder="City"><br>
	<input type="textbox" id="state" placeholder="State/Province"><br>
	<input type="textbox" id="zipcode" placeholder="Postal / Zip Code"><br>
	Country: <select name="country" id="country">
	<option selected="selected">Please Select</option>
	<option value="ph">Philippines</option>
    <option value="malay">Malaysia</option>
    <option value="id">Indonesia</option>
    <option value="jp">Japan</option>
  </select>
  <br>

	<input type="button" id="submitregBtn" value="Register">


<script type="text/javascript">
		$(document).ready(function(){
			document.title = "User Registrationn";
		});
</script>
</body>
</html>