${errMessage}
<img src="../images/user_img.png" alt="User Image" class="userImg">
<div>
	<h1 class="dataheader">Name: </h1><h1 id="name">${myuser.firstname} ${myuser.mi} ${myuser.lastname}</h1>
	<h5 class="dataheader">@</h5><h5 id="myuserusername">${myuser.username}</h5>
	<h2 class="dataheader">Email: </h2><h2 id="myuseremail">${myuser.email}</h2>
	<h2 class="dataheader">Contact no: </h2><h2 id="myusercontactno">${myuser.contactno}</h2>
	<h2 class="dataheader">Address: </h2><h2 id="myuseraddress">Address: ${streetaddress}, ${zipcode}, ${city}, ${state}, ${country}</h2>
	<h2 class="dataheader">Credit Card: <h2 id="myuserccno">${myuser.ccno}</h2><br><a id="addcc" href="#" onclick="openCC()">Add a credit card</a>
	
	${updatemsg}
	
	
	
	<div class="notvisible">
		<p id="myuserfirstname">${myuser.firstname}</p>
		<p id="myusermi">${myuser.mi}</p>
		<p id="myuserlastname">${myuser.lastname}</p>
		<p id="myuserstreetaddress">${streetaddress}</p>
		<p id="myuserzipcode">${zipcode}</p>
		<p id="myusercity">${city}</p>
		<p id="myuserstate">${state}</p>
		<p id="myusercountry">${country}</p>
	</div>
	
	
<script type="text/javascript">
		$(document).ready(function(){
			initUserProfileResult();
		});
</script>
</div>