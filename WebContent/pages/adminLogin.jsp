<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="../css/footer.css" type="text/css">
<link rel="stylesheet" href="../css/header.css" type="text/css">
<link rel="stylesheet" href="../css/adminLoginStyle.css" type="text/css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="../js/userRegistrationScript.js"></script>
<script src="../js/bootstrap.js"></script>
<title>Online Store</title>
</head>
<body>
<nav class="navbar navbar-dark " id="header">
	
		<div class="container-fluid ">
			<div >
			<a class="navbar-brand" href="#"> 
			<div class="logo" >
			<img src="../images/logo.png">
			</div>
			<div class="brandName">
				GESZ
			</div>
			</a>
			</div>
			
		</div><!-- end of container-fluid div -->
</nav>

	<div id="mainContainer">
		<div class="inputBackground bg-light">
			<h2 class="mt-4">Administrator Page</h2>
			<h5>${loginMessage}</h5>
			<label for="txtUsername">Username</label><br>
			<input id="txtUsername" type="text" class="mb-3"><br>
			<label for="txtPassword">Password</label><br>
			<input id="txtPassword" type="password" class="mb-3"><br>
			<input id="btnLogin" type="button" value="Login">
		</div>
	</div>
	<jsp:include page="footer.jsp"/>
</body>
<script src="../js/adminLoginScript.js"></script>
</html>