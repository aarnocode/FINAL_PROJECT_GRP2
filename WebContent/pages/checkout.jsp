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
<jsp:include page="header.jsp"/>

<!-- CONTENTS HERE -->
<div class=cartContainer>
	 <h1>Checkout</h1>
	 <h3 id="notice">${notice}</h3>
<c:if test="${action != 'cartCheckout'}">
     <table class="cartTable">
         <tr>
             <th>Item</th>
             <th>Quantity</th>
             <th>Price</th>
             <th>Total</th>
             <th>Image</th>
         </tr>
         	<tr>
             <td class="columnName">${productView.getName()}</td>
             <td class="columnQuantity">
            	 <span>
                     <input id="decrease" type="button" value="-" name="${productView.getId()}">
                 </span>
                 <span id="quantity">${productQuantity}</span>
                 <span>
                     <input id="increase" type="button" value="+" name="${productView.getId()}">
                 </span></td>
             <td class="columnPrice"><fmt:formatNumber type="currency" currencySymbol = "P" value="${productView.getPrice()}"/></td>
             <td class="columnTotal"></td>
             <td class="columnImage"><img src="${productView.getImage()}"></td>
         </tr>
     </table>
</c:if>

<c:if test="${action == 'cartCheckout'}">
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
</c:if>

     
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
			<c:if test="${action != 'cartCheckout'}">
				<input id="btnCancel" type="button" value="Cancel">
			</c:if>	
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