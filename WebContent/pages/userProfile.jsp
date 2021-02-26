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
<title>User Profile</title>
</head>
<body>
	<jsp:include page="header.jsp"/>
	
	<div>
		${updatemsg}
		<div id="profilecontainer">
			
	 	</div>
	 	<input class="notvisible" type="button" id="editBtn" value="Edit">&emsp;&emsp;
	 	<input class="notvisible" type="button" id="cancel" value="Update">
		<div id="updatecontainer">
			
	 	</div>
		
<!-- 		Hidden Edit Modal -->
		<div id="editModal" class="modal">
		    <div class="modal-content">
		    <div class="modal-header">
			    	<h5 class="modal-title">Update User Info</h5>
			    	<span id="modalCloseBtn" class="close">&times;</span>	
			    </div>  
			     <div class="editform">
			   		<p class="errormsg" id="errMessage1"></p>
					<p class="errormsg" id="errMessage2"></p>
					<p class="errormsg" id="errMessage3"></p>
					
					<input type="text"  id="firstname" placeholder="First Name"><br>
					<p class="errormsg" id="fnerror"></p>
					
					<input type="text" id="lastname" placeholder="Last Name"><br>
					<p class="errormsg" id="lnerror"></p>
					
					<input type="text" id="mi" placeholder="Middle Initial"><br>
					<p class="errormsg" id="mierror"></p>
					
					<input type="password" id="oldpassword" placeholder="Old Password"><br>
					<input type="password" id="newpassword" placeholder="New Password"><a id="editpass"href="#">Edit</a><br>
					<p class="errormsg notvisible" id="pwerror">Password must have at least 8 Characters</p>
					<br>
					<input type="text" id="email" placeholder="Email"><br>
					<p class="errormsg" id="emailerror"></p>
					
					<input type="number" id="contactno" placeholder="Contact No"><br>
					<p class="errormsg" id="contacterror"></p>
					
					<input type="text" id="streetaddress" placeholder="Street Address"><br>
				
					<input type="text" id="city" placeholder="City"><br>
				
					<input type="text" id="state" placeholder="State/Province"><br>
				
					<input type="number" id="zipcode" placeholder="Postal / Zip Code"><br>
					<p class="errormsg" id="ziperror"></p>
				
					Country: <select name="country" id="country">
					<option selected="selected">Please Select</option>
					<option value="Philippines">Philippines</option>
				    <option value="Malaysia">Malaysia</option>
				    <option value="Indonesia">Indonesia</option>
				    <option value="Japan">Japan</option>
				  </select><br>
				  <input type="number" id="ccnoinput" placeholder="Credit Card No."><a id="editccno"href="#">Edit</a><br>
					<p class="errormsg notvisible" id="ccnoinputerror"></p><br>
				  
				  <input type="button" id="submitEditBtn" value="Save">&emsp;&emsp;			  
	 			  <input type="button" id="cancelEditBtn" value="Cancel">
				</div>
			</div>        
		</div>
<!-- 		Hidden Add Credit Card -->
		<div id="ccModal" class="modal">
				 <div class="cc-modal-content">
				    <div class="modal-header">
				    	<h5 class="modal-title">Add Credit Card</h5>
				    	<span id="modalCloseBtn" class="close">&times;</span>	
				    </div>  
				    <div class="">
					   		<p class="errormsg" id="ccerrMessage1"></p>
							<input type="number"  id="addccnoinput" placeholder="Credit Card Number"><br>
							<p class="errormsg" id="addccnoerror"></p><br><br>
						  <input type="button" id="addccBtn" value="Add">&emsp;&emsp;			  
			 			  <input type="button" id="cancelccBtn" value="Cancel">
					</div>
				</div>        
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