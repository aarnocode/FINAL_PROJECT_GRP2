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
<link rel="stylesheet" href="../css/userOrderHistoryStyle.css" type="text/css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="../js/userOrderHistoryScript.js"></script>
<script src="../js/bootstrap.js"></script>
<title>Order History</title>
</head>
<body>
<jsp:include page="header.jsp"/>
<input id="isLoggedIn" type="hidden" value="${isLoggedIn}" style="display:none">
<!-- <input type="button" id="backBtn" value="back"> -->
<div class="backIcon">
<i class="fa fa-arrow-left" id="backBtn" style="font-size:36px"></i>
</div>

<div class="orderHistoryContainer">
	<h1>Order History</h1>
	<table border="1" class="orderHistoryTable">
		<tr>
			<th>Image</th>
			<th>Name</th>
			<th>Quantity</th>
			<th>Total Amount</th>
			<th>Mode of Payment</th>
			<th>Purchase Date</th>
		</tr>
		<c:forEach var="ordr" items="${orders}">
    		<tr>
    			<td> <img src="${ordr.getImage()}" height=70px; width=70px; ></td>
    			<td><c:out value="${ordr.getProductName()}"/></td>
    			<td><c:out value="${ordr.getQty()}"/></td>
    			<td><c:out value="${ordr.getTotal()}"/></td>
    			<td><c:out value="${ordr.getPaymentMethod()}"/></td>
    			<td id="purchaseDate"><c:out value="${ordr.getPurchaseDate()}"/></td>
    		</tr>
   		</c:forEach>
	</table>
    <p id="msg">${message}</p>
</div>
<div id="orderdatacontainer">

</div>
<jsp:include page="footer.jsp"/>
</body>
<script type="text/javascript">
		$(document).ready(function(){
			initOrderHistory();
		});
</script>
<script src="../js/header.js"></script>
</html>