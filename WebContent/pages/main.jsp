<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="css/userRegistrationStyle.css" type="text/css">
<link rel="stylesheet" href="css/footer.css" type="text/css">
<link rel="stylesheet" href="css/header.css" type="text/css">
<link rel="stylesheet" href="css/mainStyle.css" type="text/css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="js/userRegistrationScript.js"></script>
<script src="js/bootstrap.js"></script>
<title>Online Store</title>
</head>
<body>
	<nav class="navbar navbar-dark " id="header">
	
		<div class="container-fluid ">
			<div >
			<a class="navbar-brand" href="#"> 
			<div class="logo">
			<img src="images/logo.png">
			</div>
			<div class="brandName">
				GESZ
			</div>
			</a>
			</div>
			
			<!--  
			<div class="searchBarWrapper" >
				<div class="searchIcon" >
				<i class="material-icons" style="font-size:36px; color:white">search</i>
				
				</div>
				<div class="searchField" >
				<input class="searchBar" type="text"
					placeholder="Search for products" >
				</div>
			</div> 
			-->


			<div class="rightControls">
				
				<i class="material-icons cart" style="font-size:36px; color:white">shopping_cart</i><span class='badge' id='lblCartCount'>
					<c:if test="${cartCount >= 1}">
						${cartCount}
					</c:if>
				</span>
				<i id="btnNavHome" class="material-icons d-inline-block align-top" style="font-size:36px; color:white">home</i>
				<i id="btnNavAccount" class="material-icons" style="font-size:36px; color:white">account_circle</i>
			</div>
			
		</div><!-- end of container-fluid div -->
	
</nav>
	<div id="mainContainer">
		<div id="gesz">
			<p>GESZ</p>
		</div>
	</div>
	<jsp:include page="footer.jsp"/>
</body>
<script src="js/mainScript.js"></script>
<script src="../js/header.js"></script>
</html>