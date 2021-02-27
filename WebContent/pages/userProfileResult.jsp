<div class="user-header">
<div class="my-profile">My Profile</div>
<div class="subtitle">Manage and protect your account</div>
</div>
<center><hr></center>

${errMessage}


<div>
	<div class="content-row">
	<div class="left-column" >
	<div><img src="../images/user_img.png" alt="User Image" class="userImg"></div>
	<div class="myName"><h1 id="name">${myuser.firstname} ${myuser.mi}. ${myuser.lastname}</h1></div>
	</div>
	<div class="right-column" >
	<div ><div class="left-column-2">Username</div><div class="right-column-2"><h5 class="dataheader atSign">@</h5><h5 id="myuserusername">${myuser.username}</h5></div></div>
	<div><div class="left-column-2"><h2 class="dataheader">Email </h2></div><div class="right-column-2"><h2 id="myuseremail">${myuser.email}</h2></div></div>
	<div><div class="left-column-2"><h2 class="dataheader">Contact no </h2></div><div class="right-column-2"><h2 id="myusercontactno">${myuser.contactno}</h2></div></div>
	<div><div class="left-column-2"><h2 class="dataheader">Address </h2></div><div class="right-column-2"><h2 id="myuseraddress"> ${streetaddress}, ${zipcode}, ${city}, ${state}, ${country}</h2></div></div>
	<div><div class="left-column-2"><h2 class="dataheader">Credit Card</h2></div><div class="right-column-2"> <h2 id="myuserccno">${myuser.ccno}</h2><br><a id="addcc" href="#" onclick="openCC()">Add a credit card</a></div></div>
	</div>
	</div>
	
	${updatemsg}
	
	
	
	<div class="notvisible">
		<p id="myuserfirstname">${myuser.firstname}</p>
		<p id="myusermi">${myuser.mi}</p>
		<p id="myuserlastname">${myuser.lastname}</p>
		<p id="myuserpassword">${myuser.password}</p>
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