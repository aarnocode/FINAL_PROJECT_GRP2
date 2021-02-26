var isLoggedIn = $("#isLoggedIn").val();
if(isLoggedIn == "false"){
	$(".loginBlur").show();
}else{
	$(".loginBlur").hide();
}

$("#increase,#decrease").click(function(){
	var id=$(this).attr('name');
	var quantity = parseInt($("#quantity"+id).text());
	if($(this).val() == "-" && quantity > 1){
		quantity-=1;
	}else if($(this).val() == "+"){
		quantity+=1;
	}
	$("#quantity"+id).text(quantity);
	$.ajax({
		url:contextPath+"updatecart",
		method:"POST",
		data:{
			quantity:quantity,
			id:id,
			action:$(this).attr("id")
		},
		success:function(){
			window.location="../pages/cart.jsp";
		}
	});
});

$("#btnCancel").click(function(){
	$.ajax({
		url: contextPath + "buynow",
		method: "POST",
		data: {
			action:"cancel",
			quantity:$(".quantity").text()
		},
		success:function(){
			window.location = "../";
		}
	});
});

$("#btnCheckout").click(function(){
	console.log("clicked");
	var selected ="";
	$("input[type=checkbox]").each(function(){
		if ($(this).is(':checked')) {
			selected=selected + $(this).attr("name")+",";
		}
	});
	console.log("selected: "+selected );
	if(selected === ""){
		$("#cartNotice").text("Select items you wish to checkout.");
	}else{
		$.ajax({
			url:contextPath + "checkout",
			method:"POST",
			data: {
				selected:selected
			},
			success:function(){
				window.location = "../pages/checkout.jsp";
			}
		});
	}
});

$("img[name=delete").click(function(){
	var cartId = ($(this).attr("id")).substring(9);
	console.log("cart_id "+cartId);
	$.ajax({
		url: contextPath + "removecartitem",
		method: "POST",
		data:{
			cartId: cartId,
			quantity: $("#quantity"+cartId).text()
		},
		success: function(){
			window.location = "../pages/cart.jsp";
		}
	});
});


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
			console.log("success cart cliked");
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