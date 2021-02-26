var isLoggedIn = $("#isLoggedIn").val();
if(isLoggedIn == "false"){
	$(".loginBlur").show();
}else{
	$(".loginBlur").hide();
}

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

$(".cart").click(function(){
	if(isLoggedIn == "true"){
		console.log("logged in");
		$.ajax({
			url: contextPath + "cart",
			method: "POST",
			success: function(){
				window.location = "../pages/cart.jsp";
			}
		});
	}else{
		$(".loginBlur").show();
	}
	
});

$(".btnLogin").click(function(){
	console.log("clicked");
	$.ajax({
		url:contextPath + "login",
		method: "POST",
		data:{
			username:$(".txtUsername").val(),
			password:$(".txtPassword").val()
		},
		success: function(){
			window.location="../pages/cart.jsp";
		}
	});
});

$("#btnClose").click(function(){
	$(".txtUsername").val("");
	$(".txtPassword").val("");
	$("#notice").text("");
	$(".loginBlur").hide();
});