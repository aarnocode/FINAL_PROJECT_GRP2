<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
    <link rel="stylesheet" href="../css/header.css" type="text/css">
    <link rel="stylesheet" href="../css/footer.css" type="text/css">
    <link rel="stylesheet" href="../css/productviewStyle.css" type="text/css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <script src="js/bootstrap.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
    <title>View Item</title>
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
    <div class="addCartBlur">
    	<div id="addCartStatus" class="addCartPop">
	    	<input id="status" type="hidden" value="${addCartStatus}">
	     	<h3 id="addCartMessage"></h3>
	     	<div class="addCartButtons">
	     		<input id="btnViewCart" type="button" value="View my cart">
	     		<input id="btnHome" type="button" value="Home">
	     	</div>
		</div>
    </div>
    
    
	<div class="itemContainer">
        <div class="itemView">
            <img src="${productView.getImage()}">
        </div>
        <div class="itemDesc">
            <h3 class="itemName">${productView.getName()}</h3>
            <h4 class="itemPrice"><fmt:formatNumber type="number" pattern="P ###,###,###.##" value="${productView.getPrice()}"/></h4>
            <input class="btnBuy" type="button" value="Buy now!">
            <input class="btnAddCart" type="button" value="Add to Cart"><br>
            <label>Description</label>
            <p class="description">${productView.getDescription()}</p>
        </div>
    </div>
<jsp:include page="footer.jsp"/>
</body>
<script src="../js/productviewScript.js"></script>
</html>