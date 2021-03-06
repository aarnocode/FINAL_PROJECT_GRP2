<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="../css/userRegistrationStyle.css"
	type="text/css">
<link rel="stylesheet" href="../css/header.css" type="text/css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.js"
	integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
	crossorigin="anonymous"></script>
<script type="text/javascript">
	var contextPath = '${pageContext.request.contextPath}' + '/'
</script>
<script src="../js/bootstrap.js"></script>
<title>User Registration</title>
</head>
<body>
	<jsp:include page="header.jsp"/>
	<div class="loginBlur">
		<input id="isLoggedIn" type="hidden" value="${isLoggedIn}">
        <div class="loginPop">
        	<input id="btnClose" type="button" value="X">
            <h3>GESZ</h3>
            <label id="notice">${logMsg}</label>
            <label>Username:</label><br>
            <input class="txtUsername" type="text"><br>
            <label>Password:</label><br>
            <input class="txtPassword" type="password"><br>
            <input class="btnLogin" type="button" value="Login">
            <p class="toRegister" id="register">"Not registered yet? Click here!"</p>
        </div>
    </div>  
	<div class="signup-form">
		
		<div class="form-header">
			<h1>Create Account</h1>
		</div>
		
		
		<div class="form-body">
		<div id="regcontainer"></div>
		<p class="errormsg" id="errMessage1"></p>
		<p class="errormsg" id="errMessage2"></p>
		<p class="errormsg" id="errMessage3"></p>
			<div class="row">
			
			<div class="column">
			<h4 style="text-align:center">--Personal Info--</h4>
			<div class="row">
			<div class="leftColumn">
			<p class="errormsg" id="fnerror"></p> 
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				First-Name:
				</div>
				 <div class="form-group right">
				<input type="textbox" id="firstname" placeholder="Enter you first name">
				</div>
				</div>
			
				 
			</div>
			</div> <!-- firstname row -->
			
			<div class="row">
			<div class="leftColumn">
			<p class="errormsg" id="lnerror"></p>
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Last-Name:
				</div>
				<div class="form-group right">
				<input type="textbox" id="lastname" placeholder="Enter your last name">
				</div>
			</div>

			</div>
			</div> <!-- lastname row -->
			
			<div class="row">
			<div class="leftColumn">
			<p class="errormsg" id="mierror"></p>
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Middle Initial: 
				</div>
				<div class="form-group right">
				<input type="textbox" id="mi" placeholder="Enter your middle initial">
				</div>
				

			</div>
			</div>
			</div> <!-- middle init row -->
			
			<div class="row">
			<div class="leftColumn">
			<p class="errormsg" id="unerror"></p>
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Username: 
				</div>
				<div class="form-group right">
				<input type="textbox" id="username" placeholder="Enter a username">
				</div>
				

			</div>
			</div>
			</div> <!-- username row -->

			<div class="row">
			<div class="leftColumn">
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Password: 
				</div>
				<div class="form-group right">
				<input type="password" id="password" placeholder="Enter a password">
				
				</div>
			</div>
			</div>
			</div> <!-- password row -->
			
			<div class="row">
			<div class="leftColumn">
			<p class="errormsg" id="pwerror">Password must have at least 8
					Characters</p>
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Confirm password: 
				</div>
				<div class="form-group right">
				
				<input type="password" id="confirmpass"
					placeholder="Retype your password">
			
				</div>
				
				
			</div>
			</div>
			</div> <!-- confirm password row -->
			
			<div class="row">
			
			<div class="leftColumn">
			<p class="errormsg" id="emailerror"></p>
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Email: 
				</div>
				<div class="form-group right">
				<input type="textbox" id="email" placeholder="Enter your email address">
				</div>
				

			</div>
			</div>
			</div> <!-- end email row -->
			</div> <!--  end of first column -->
			
			
			<div class="column">
			<h4 style="text-align:center">--Delivery Details--</h4>
			

			<div class="row">
			<div class="leftColumn">
			<p class="errormsg" id="contacterror"></p>
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Contact No: 
				</div>
				<div class="form-group right">
				<input type="number" id="contactno" placeholder="Enter your contact no">
				</div>
				

			</div>
			</div>
			</div> <!--  end contact row -->


			<div class="row">
			<div class="leftColumn">
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Street Address: 
				</div>
				<div class="form-group right">
				<input type="textbox" id="streetaddress"
					placeholder="Enter your street address">
					</div>
			</div>
			</div>
			</div> <!-- end street row -->

			<div class="row">
			<div class="leftColumn">
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				City: 
				</div>
				<div class="form-group right">
				<input type="textbox" id="city" placeholder="city">
				</div>
			</div>
			</div>
			</div> <!--  end city row -->
			
			<div class="row">
			<div class="leftColumn">
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
			<div class="form-group left" >
				State/Province: 
				</div>
				<div class="form-group right">
				<input type="textbox" id="state" placeholder="state/province">
				</div>
			</div>
			</div>
			</div> <!-- end state row -->

			<div class="row">
			<div class="leftColumn">
			<p class="errormsg" id="ziperror"></p>
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Postal/Zip Code: 
				</div>
				<div class="form-group right">
				<input type="number" id="zipcode" placeholder="postal / zip code">
				</div>
				

			</div>
			</div>
			</div> <!-- end zip row -->
			
			<div class="row">
			<div class="leftColumn">
			<p class="errormsg" id="countryerror"></p>
			</div>
			<div class="rightColumn">
			<div class="horizontal-group">
				<div class="form-group left" >
				Country: 
				</div>
				<div class="form-group  right">
				<select class="form-select" aria-label="Country Select" name="country" id="country">
					<option selected="selected">Please Select</option>
					<option value="Philippines">Philippines</option>
					<option value="Malaysia">Malaysia</option>
					<option value="Indonesia">Indonesia</option>
					<option value="Japan">Japan</option>
				</select>
				</div>
				

				
			</div>
			</div>
			</div> <!-- end country row -->
			</div> <!-- END of column2 -->
			</div> <!--  END of row -->

		</div>
		<!-- END of form-body div -->

		<div class="form-footer">
			<input type="button" id="submitregBtn" value="Register">
		</div>
	</div>
	<!-- END of signup-form div -->


	<jsp:include page="footer.jsp"/>
	<script type="text/javascript" src="../js/header.js"></script>
	<script src="../js/userRegistrationScript.js"></script>
	<script>
		$(document).ready(function() {
			//document.title = "User Registration";
			console.log("init");
			initUserReg();
		});
	</script>
</body>
</html>