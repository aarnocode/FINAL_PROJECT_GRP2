<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
    	<div class="cards">
    	 <input type="hidden" value="${prod.getId()}">
         <img src="${prod.getImage()}">
         <h6 class="itemName"><b>${prod.getName()}</b></h6>
         <h6 class="itemPrice">
         	<fmt:formatNumber type="number" pattern="P ###,###,###.##" value="${prod.getPrice()}"/>
       	</h6>
    	</div>
   	</c:forEach>
</div>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/homeStyle.css" type="text/css">
<script src="js/homeScript.js"></script>