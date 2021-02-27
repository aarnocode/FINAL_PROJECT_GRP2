function initOrderHistory(){
	getOrderHistory();
}
function getOrderHistory(){
	alert('f');
	$.ajax({
		url: contextPath + "pages/orderhistory",
		method: "POST",
		success: function(result){
			$("#orderdatacontainer").html(result);
		}
	});
}