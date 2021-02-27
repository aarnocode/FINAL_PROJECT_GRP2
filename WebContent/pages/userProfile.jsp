<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">

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
		<div class="profilePage">
		<div id="profilecontainer">
			
	 	</div>
	 	
	 	
	 	<input class="notvisible" type="button" id="editBtn" value="Edit">&emsp;&emsp;
	 	<input class="notvisible" type="button" id="viewOrderBtn" value="View Orders">
	 	
	 	</div>
	 	
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
					<div class="modal-row">
					<div class="left-column-3">
					<h4 id="personal-title">--Personal Info--</h4>
					<div class="fname-row">
					<div class="left-column-3">First Name</div>
					<div class="right-column-3"><input type="text"  id="firstname" placeholder="First Name"></div>
					<p class="errormsg" id="fnerror"></p>
					</div>
					
					<div>
					<div class="left-column-3">Last Name</div>
					<div class="right-column-3">
					<input type="text" id="lastname" placeholder="Last Name">
					</div>
					<p class="errormsg" id="lnerror"></p>
					</div>
					
					<div>
					<div class="left-column-3">Middle Initial</div>
					<div class="right-column-3">
					<input type="text" id="mi" placeholder="Middle Initial">
					</div>
					<p class="errormsg" id="mierror"></p>
					</div>
					
					<div>
					<div class="left-column-3">Old Password</div>
					<div class="right-column-3">
					<input type="password" id="oldpassword" placeholder="Old Password">
					</div>
					</div>
					
					<div>
					<div class="left-column-3">New Password</div>
					<div class="right-column-3">
					<input type="password" id="newpassword" placeholder="New Password"><a id="editpass"href="#">Edit Password</a>
					</div>
					<p class="errormsg notvisible" id="pwerror">Password must have at least 8 Characters</p>
					</div>
					
					<div>
					<div class="left-column-3">Email</div>
					<div class="right-column-3">
					<input type="text" id="email" placeholder="Email">
					</div>
					<p class="errormsg" id="emailerror"></p>
					</div>
					
					<div>
					<div class="left-column-3">Contact no.</div>
					<div class="right-column-3">
					<input type="number" id="contactno" placeholder="Contact No">
					</div>
					<p class="errormsg" id="contacterror"></p>
					</div>
					
					</div> <!-- end of main left column -->
					
					
					<div class="right-column-3">
					<h4 id="delivery-title">--Delivery Details--</h4>
					<div>
					<div class="left-column-3">Street Address</div>
					<div class="right-column-3">
					<input type="text" id="streetaddress" placeholder="Street Address">
					</div>
					</div>
				
					<div>
					<div class="left-column-3">City</div>
					<div class="right-column-3">
					<input type="text" id="city" placeholder="City">
					</div>
					</div>
				
					<div>
					<div class="left-column-3">State/Province</div>
					<div class="right-column-3">
					<input type="text" id="state" placeholder="State/Province">
					</div>
					</div>
				
					<div>
					<div class="left-column-3">Postal / Zip Code</div>
					<div class="right-column-3">
					<input type="number" id="zipcode" placeholder="Postal / Zip Code">
					</div>
					<p class="errormsg" id="ziperror"></p>
					</div>
				
					<div>	
					<div class="left-column-3">Country</div>
					<div class="right-column-3">			
					<select name="country" id="country">
					<option selected="selected">Please Select</option>
					<option value="Philippines">Philippines</option>
				    <option value="Malaysia">Malaysia</option>
				    <option value="Indonesia">Indonesia</option>
				    <option value="Japan">Japan</option>
				  </select>
				  </div>
				  	</div>
				  
				  <div>
				  <div class="left-column-3">Credit Card No.</div>
				  <div class="right-column-3">	
				  <input type="number" id="ccnoinput" placeholder="Credit Card No."><a id="editccno"href="#">Edit CC No</a><br>
					</div>
					<p class="errormsg notvisible" id="ccnoinputerror"></p>
					</div>
					
				</div> <!-- end of main right column -->
				</div>	<!-- END of modal-row -->		
					 
				  <div class="modal-buttons">
				  <input type="button" id="submitEditBtn" value="Save">&emsp;&emsp;			  
	 			  <input type="button" id="cancelEditBtn" value="Cancel">
	 			  </div>
	 			  
				</div> <!-- end of editform -->
			</div>  <!-- end of modal-content -->      
		</div> <!-- end of editModal -->
		
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
	<div id="updatecontainer">
  			
  	</div>
<script type="text/javascript">
		$(document).ready(function(){
			initUserProfile();
		});
</script>

</body>
<jsp:include page="footer.jsp"/>
</html>



