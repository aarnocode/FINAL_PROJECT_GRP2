<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="css/userRegistrationStyle.css" type="text/css">
<link rel="stylesheet" href="css/footer.css" type="text/css">
<link rel="stylesheet" href="css/header.css" type="text/css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="js/userRegistrationScript.js"></script>
<script src="js/bootstrap.js"></script>
<title>Online Store</title>
</head>
<body>
	<nav class="navbar navbar-dark " id="header">
		<div class="container-fluid ">
			<a class="navbar-brand" href="#"> 
			<img src="images/logo.png" alt=""  class="d-inline-block align-top"> 
				GESZ
			</a>
			<div class="searchBarWrapper">
				<img src="https://img.icons8.com/android/24/ffffff/search.png" />
				<!-- search icon -->
				<input class="searchBar" type="text"
					placeholder="Search for products">
			</div>
			<!-- end of searchBard div -->
			<div class="rightControls">
				<img class="cart" src="https://img.icons8.com/windows/32/ffffff/favorite-cart.png" /><span class='badge' id='lblCartCount'>
					<c:if test="${cartCount >= 1}">
						${cartCount}
					</c:if>
				</span>
				<img class="login" src="https://img.icons8.com/pastel-glyph/32/ffffff/person-male--v3.png"/>
			</div>
		</div><!-- end of container-fluid div -->
</nav>
	<div id="mainContainer">
	
	</div>
	<jsp:include page="footer.jsp"/>
</body>
<script src="js/mainScript.js"></script>
</html>