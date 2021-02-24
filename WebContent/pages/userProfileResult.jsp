
<img src="../images/user_img.png" alt="User Image" class="userImg">
<div>
	
	<h1 class="dataheader">Name: </h1><h1>${myuser.firstname} ${myuser.mi} ${myuser.lastname}</h1>
	<h5 class="dataheader">@</h5><h5 id="username">${myuser.username}</h5>
	<h2 class="dataheader">Email: </h2><h2 id="email">${myuser.email}</h2>
	<h2 class="dataheader">Contact no: </h2><h2 id="contactno">${myuser.contactno}</h2>
	<h2 class="dataheader">Address: </h2><h2 id="address">Address: ${streetaddress}, ${zipcode}, ${city}, ${state}, ${country}</h2>
	<h2 class="dataheader">Credit Card: <h2 id="ccno">${myuser.ccno}</h2><br><a id="addcc" href="#">Add a credit card</a>
	
	
	${updatemsg}
	
	
	
	<div class="notvisible">
		<p id="firstname">${myuser.firstname}</p>
		<p id="mi">${myuser.mi}</p>
		<p id="lastname">${myuser.lastname}</p>
	</div>
	
	
<script type="text/javascript">
		$(document).ready(function(){
			initUserProfileResult();
		});
</script>
</div>