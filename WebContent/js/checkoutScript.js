$(document).ready(function(){
	getTotal();
});


$("#increase").click(function(){
	$.ajax({
		url:contextPath + "checkout",
		method:"POST",
		data:{
			quantity:parseInt($("#quantity").text())+1
		},
		success:function(){
			window.location = "../pages/checkout.jsp";
		}
	});
	/*var currQuantity = parseInt($("#quantity").text());
	$("#quantity").text(currQuantity+1);
	getTotal();*/
});

$("#decrease").click(function(){
	var currQuantity = parseInt($("#quantity").text());
	if(currQuantity > 1){
		$("#quantity").text(currQuantity-1);
		getTotal();
	}
});

$("#btnCancel").click(function(){
	window.location = "../";
})

function getTotal(){
	var total = parseFloat($(".columnPrice").text().substring(1).replace(",","") * parseInt($("#quantity").text()));
	$(".columnTotal").text("P"+total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}