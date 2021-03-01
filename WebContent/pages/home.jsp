<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="../css/userRegistrationStyle.css" type="text/css">
<link rel="stylesheet" href="../css/footer.css" type="text/css">
<link rel="stylesheet" href="../css/header.css" type="text/css">
<link rel="stylesheet" href="../css/homeStyle.css" type="text/css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="../js/userRegistrationScript.js"></script>
<script src="../js/bootstrap.js"></script>
<title>Online Store</title>
</head>
<body>
	<jsp:include page="header.jsp"/>
		<div class="loginBlur">
		<input id="isLoggedIn" type="hidden" value="${isLoggedIn}">
		<input id="isAdmin" type="hidden" value="${isAdmin}">
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
<div class="leftPanel mt-5">
	<p>Category</p>
		<input id="All" class="category" type="button" value="All">
	<c:forEach var="category" items="${categories}">
		<input id="${category}" class="category" type="button" value="${category}">
	</c:forEach>
</div>
<div class="productContainer mt-4">
<!-- MALE ITEMS -->
    	<c:forEach var="prod" items="${products}">
    	<c:choose>
    		<c:when test="${prod.getStock() == 0 }">
    			<div class="cards" style="background-color:rgb(230,230,230)">
    			<input type="hidden" value="${prod.getId()}">
	    		<img src="${prod.getImage()}">
			    <h6 class="itemName"><b>${prod.getName()}</b></h6>
			    <h6 class="itemPrice">
	         		<fmt:formatNumber type="number" pattern="P ###,###,###.##" value="${prod.getPrice()}"/>
	       		</h6>
    			<h5 class="outOfStock">OUT OF STOCK</h5>
    			</div>
    		</c:when>
    		<c:otherwise>
    			<div class="cards">
    			<input type="hidden" value="${prod.getId()}">
	    		<img src="${prod.getImage()}">
			    <h6 class="itemName"><b>${prod.getName()}</b></h6>
			    <h6 class="itemPrice">
	         		<fmt:formatNumber type="number" pattern="P ###,###,###.##" value="${prod.getPrice()}"/>
	       		</h6>
	       		<h5 class="outOfStock"></h5>
	       		</div>
    		</c:otherwise>
    	</c:choose>
   	</c:forEach>
</div>



<jsp:include page="footer.jsp"/>
</body>
<script src="../js/homeScript.js"></script>
<script src="../js/header.js"></script>
</html>


