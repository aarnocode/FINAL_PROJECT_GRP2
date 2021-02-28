<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="../css/header.css" type="text/css">
<link rel="stylesheet" href="../css/footer.css" type="text/css">
<link rel="stylesheet" href="../css/thankyouStyle.css" type="text/css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<script src="js/bootstrap.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<title>Thank you!</title>
</head>
<body>
<jsp:include page="header.jsp"/>
<input id="isLoggedIn" type="hidden" value="${isLoggedIn}" style="display:none">
<input id="isAdmin" type="hidden" value="${isAdmin}" style="display:none">
<input id="checkoutStatus" type="hidden" value="${checkoutStatus}" style="display:none">
<div class="loginBlur">
		<input id="isLoggedIn" type="hidden" value="${isLoggedIn}" style="display:none">
		<input id="isAdmin" type="hidden" value="${isAdmin}" style="display:none">
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
    
<div id="failed" class="container mt-4 mb-4">
	<h1 class="center">Purchase failed...</h1>
	<h5>Oops! We're sorry but the product you are trying to purchase has ran out of stock.</h5>
</div>
<div id="success" class="container mt-4 mb-4">
	<h1 class="center">Thank you for your purchase!</h1>
	<table class="cartTable">
	<tr>
		<td><b>Transaction Date: </b></td>
		<td><b>${date}</b></td>
	</tr>
	<tr>
		<td colspan="5">ITEMS</td>
	</tr>
	<tr>
		<th>Item</th>
		<th>Quantity</th>
		<th>Price</th>
		<th>Total</th>
		<th>Image</th>
	</tr>
	<c:choose>
		<c:when test="${from == 'cartCheckout'}">
			<c:forEach var="items" items="${itemBought}">
				<tr>
					<td>${items.getName()}</td>
					<td>${items.getQuantity()}</td>
					<td><fmt:formatNumber type="currency" currencySymbol="P" value="${items.getPrice()}"/></td>
					<td><fmt:formatNumber type="currency" currencySymbol="P" value="${items.getQuantity() * items.getPrice()}"/></td>
					<td><img src="${items.getImage()}"></td>
				</tr>
			</c:forEach>
		</c:when>
		<c:otherwise>
		<tr>
			<td>${productView.getName()}</td>
			<td>${productQuantity}</td>
			<td><fmt:formatNumber type="currency" currencySymbol="P" value="${productView.getPrice()}"/></td>
			<td><fmt:formatNumber type="currency" currencySymbol="P" value="${productView.getPrice() * productQuantity}"/></td>
			<td><img src="${productView.getImage()}"></td>
		</tr>
		</c:otherwise>
	</c:choose>
		<tr><td><hr></td></tr>
		<tr>
			<td colspan="3"><b>Grand Total: </b></td>
			<td><fmt:formatNumber type="currency" currencySymbol="P" value="${grandTotal}"/></td>
		</tr>
		<c:choose>
			<c:when test="${method == 'Cash On Delivery'}">
				<tr>
					<td colspan="3"><b>Payment Method: </b>${method}</td>
					<td><fmt:formatNumber type="currency" currencySymbol="P" value="${amount}"/></td>
				</tr>
				<tr>
					<td colspan="3"><b>Change: </b></td>
					<td><fmt:formatNumber type="currency" currencySymbol="P" value="${amount - grandTotal}"/></td>
				</tr>
			</c:when>
			<c:otherwise>
				<tr>
					<td colspan="3"><b>Payment Method: </b>${method}</td>
					<td>${card}</td>
				</tr>
			</c:otherwise>
		</c:choose>
	</table>
	<div class="center">
		<input id="btnHome" type="button" value="Home">
	</div>
</div>
<jsp:include page="footer.jsp"/>
</body>
<script src="../js/thankyouScript.js"></script>
<script src="../js/header.js"></script>
</html>