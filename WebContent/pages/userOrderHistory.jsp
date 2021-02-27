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
<link rel="stylesheet" href="../css/userOrderHistoryStyle.css" type="text/css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript">var contextPath = '${pageContext.request.contextPath}' + '/'</script>
<script src="../js/userOrderHistoryScript.js"></script>
<script src="../js/bootstrap.js"></script>
<title>Order History</title>
</head>
<body>
<input type="button" id="backBtn" value="back">

	<table border="1">
		<tr>
			<td>Name</td>
			<td>Quantity</td>
			<td>Total Amount</td>
			<td>Mode of Payment</td>
			<td>Purchase Date</td>
		</tr>
		<c:forEach var="ordr" items="${orders}">
    		<tr>
    			<td><c:out value="${ordr.getProductName()}"/></td>
    			<td><c:out value="${ordr.getQty()}"/></td>
    			<td><c:out value="${ordr.getTotal()}"/></td>
    			<td><c:out value="${ordr.getPaymentMethod()}"/></td>
    			<td><c:out value="${ordr.getPurchaseDate()}"/></td>
    		</tr>
   		</c:forEach>
	</table>
    <p id="msg">${message}</p>

<div id="orderdatacontainer">

</div>
<script type="text/javascript">
		$(document).ready(function(){
			initOrderHistory();
		});
</script>
</body>
</html>