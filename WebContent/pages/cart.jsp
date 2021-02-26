<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="../css/footer.css" type="text/css">
<link rel="stylesheet" href="../css/header.css" type="text/css">
<link rel="stylesheet" href="../css/cartStyle.css" type="text/css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="../js/bootstrap.js"></script>
<title>My Cart</title>
</head>
<body>
<jsp:include page="header.jsp"/>

<!-- CONTENTS HERE -->
<div class=cartContainer>
	<input id="isLoggedIn" type="hidden" value="${isLoggedIn}" style="display:none">
     <h1>My Cart</h1>
     <h5>${cartNotice}</h5>
     <table class="cartTable">
         <tr>
         	 <th>Select</th>
             <th>Item</th>
             <th>Quantity</th>
             <th>Price</th>
             <th>Total</th>
             <th>Image</th>
             <th>Remove</th>
         </tr>
         <c:set var="total" value="${0}"/>
         <c:forEach var="cart" items="${myCart}">
         	<tr>
         	<td><input class="center" type="checkbox" name="${cart.getCart_id()}"></td>
             <td class="columnName">${cart.getName()}</td>
             <td class="columnQuantity">
                 <span>
                     <input id="decrease" type="button" value="-" name="${cart.getCart_id()}">
                 </span>
                 <span id="quantity${cart.getCart_id()}" class="quantity">${cart.getQuantity()}</span>
                 <span>
                     <input id="increase" type="button" value="+" name="${cart.getCart_id()}">
                 </span></td>
             <td class="columnPrice"><fmt:formatNumber type="currency" currencySymbol="P" value="${cart.getPrice()}"/></td>
             <td class="columnTotal"><fmt:formatNumber type="currency" currencySymbol="P" value="${cart.getPrice()*cart.getQuantity()}"/></td>
             <td class="columnImage"><img src="${cart.getImage()}"></td>
             <td><img id="imgDelete${cart.getCart_id()}" name="delete" class="trash center" src="https://img.icons8.com/fluent-systems-regular/48/000000/trash--v1.png"/></td>
         </tr>
         <c:set var="total" value="${cart.getPrice()*cart.getQuantity() + total}"/>
         </c:forEach>
         <tr>
         	<td colspan="3"><strong>Total</strong></td>
         	<td><strong><fmt:formatNumber type="currency" currencySymbol="P" value="${total}"/></strong></td>
         </tr>
     </table>
     <div class="center">
     	<input id="btnCheckout" type="button" value = "Checkout">
     </div>
     
</div>


<div class="footer">
	<div class="container">
		<div class="footerRow">
			<div class="footer-col-3">
				<h4>Developers</h4>
				<ul>
					<li>Aaron Miranda</li>
					<li>Ralph Chung</li>
					<li>Lynette Puzon</li>
				</ul>
			</div>
				
			<div class="footer-col-1">
				<h4>Contact  Us</h4>
				<ul>
					<li>Address: Manila, PH</li>
					<li>Email: email@gmail.com</li>
					<li>Phone: 084682807</li>
					
				</ul>
			</div>
			<div class="footer-col-1">
				<h4>Follow Us</h4>
				<ul>
					<li><a href="https://www.facebook.com/"><img class="fblogo" src="../images/fblogo.png">Facebook</a></li>
					<li><a href="https://www.instagram.com/"><img class="fblogo" src="../images/instalogo.png">Instagram</a></li>
					<li><a href=""><img class="fblogo" src="../images/twitterlogo.png">Twitter</a></li>
					
				</ul>
			</div>
		</div>
	</div>
</div>
</body>
<script src="../js/cartScript.js"></script>
</html>