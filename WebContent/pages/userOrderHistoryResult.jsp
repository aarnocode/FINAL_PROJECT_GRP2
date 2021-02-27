	<table border="1">
		<tr>
			<td>Namee</td>
			<td>Quantity</td>
			<td>Total Amount</td>
			<td>Mode of Payment</td>
			<td>Purchase Date</td>
		</tr>
		<c:forEach var="ordr" items="${orders}">
    		<tr>
    			<td><c:out value="${ordr.productName}"/></td>
    			<td><c:out value="${ordr.qty}"/></td>
    			<td><c:out value="${ordr.total}"/></td>
    			<td><c:out value="${ordr.paymentMethod}"/></td>
    			<td><c:out value="${ordr.purchaseDate}"/></td>
    		</tr>
   		</c:forEach>
	</table>