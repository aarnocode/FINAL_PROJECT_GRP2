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
<link rel="stylesheet" href="../css/checkoutStyle.css" type="text/css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="../js/bootstrap.js"></script>
<title>Checkout</title>
</head>
<body>
<nav class="navbar navbar-dark ">
	<div class="container-fluid ">
		<a class="navbar-brand" href="#"> 
		<img src="../images/logo.png" alt=""  class="d-inline-block align-top"> 
			GESZ
		</a>
		<div class="searchBarWrapper">
			<img src="https://img.icons8.com/android/24/ffffff/search.png" />
			
			<input class="searchBar" type="text"
				placeholder="Search for products">
		</div>
		<div class="rightControls">
			<img class="cart" src="https://img.icons8.com/windows/32/ffffff/favorite-cart.png" />
			<img class="login" src="https://img.icons8.com/pastel-glyph/32/ffffff/person-male--v3.png"/>
		</div>
	</div>
</nav>

<!-- CONTENTS HERE -->
<div class=cartContainer>
     <h1>Checkout</h1>
     <table class="cartTable">
         <tr>
             <th>Item</th>
             <th>Quantity</th>
             <th>Price</th>
             <th>Image</th>
         </tr>
         <c:forEach var="cart" items="${myCart}">
         	<tr>
             <td class="columnName">${cart.getName()}</td>
             <td class="columnQuantity">
                 <span id="quantity${cart.getCart_id()}">${cart.getQuantity()}</span></td>
             <td class="columnPrice">${cart.getPrice()*cart.getQuantity()}</td>
             <td class="columnImage"><img src="${cart.getImage()}"></td>
         </tr>
         </c:forEach>
     </table>
     
     <h1>Payment method:</h1>
        <input type="radio" name="method">Cash On Delivery
        <input type="radio" name="method">Credit/Debit Card
        <input type="radio" name="method">PayPal
        <h1>Shipping Information:</h1>
        <table class="addressTable">
            <tr>
                <td><label>First Name</label></td>
                <td><label>Last Name</label></td>
            </tr>
            <tr>
                <td><input id="firstName" type="text" value="${user.getFirstname()}" readonly></td>
                <td> <input id="lastName" type="text" value="${user.getLastname()}" readonly></td>
            </tr>
            <tr>
                <td colspan="3"><label>Address</label></td>
            </tr>
            <tr>
                <td colspan="3"><input id="address" type="text" value="${user.getAddress()}" readonly></td>
            </tr>
            <tr>
                <td><label>Contact Number</label></td>
            </tr>
            <tr>
                <td><input id="contactNumber" type="number" value="${user.getContactno()}" readonly></td>
            </tr>
        </table>
       	<div class="center">
				<input id="btnCheckout" type="button" value="Confirm Checkout">
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
<script src="../js/checkoutScript.js"></script>
</html>