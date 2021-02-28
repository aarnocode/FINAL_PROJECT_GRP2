var isLoggedIn = $("#isLoggedIn").val();
if(isLoggedIn == "false"){
	$(".loginBlur").show();
}else{
	$(".loginBlur").hide();
}
$("#charge").hide();
$("#amountErr").hide();
$("#nameErr").hide();
$("#numberErr").hide();
$("#ccvErr").hide();
$("#expiryErr").hide();
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

$("#rdCashOnDelivery").click(function(){
	$("#cashOnDelivery").show();
	$("#charge").hide();
});

$("#rdCharge").click(function(){
	$("#charge").show();
	$("#cashOnDelivery").hide();
	
});

$("#btnCheckout").click(function(){
	var method="";
	var isValid = false;
	var amount=getAmount();
	var card=getCard();
	if($("#rdCashOnDelivery").is(":checked")){
		method = "Cash On Delivery";
		isValid=validateAmount();
	}else {
		method = "Credit Card"
		isValid=validateCard();
	}
	if(isValid == true){
		$.ajax({
		url: contextPath + "transact",
		method: "POST",
		data:{
			method:method,
			amount:amount,
			card:card,
			from: $("#fromCart").val()
		},
		success:function(){
			if($("#checkoutStatus").val() == "failed"){
				window.location="../pages/checkout.jsp";
			}else{
				window.location = "../pages/thankyou.jsp";
			}
		}
	});
	}

});

$("#expiry").keypress(function(){
	var value = $("#expiry").val().toString();
	if(value.length == 2){
		$("#expiry").val(value+"/");
	}
	if(value.length > 5){
		$("#expiry").val(value.substring(0,value.length-1));
	}
});

$("#ccv").keypress(function(){
	var value=$("#ccv").val();
	if(value.length > 2){
		$("#ccv").val(value.substring(0,value.length-1));
	}
});

$("#cardNumber").keypress(function(){
	var value = $("#cardNumber").val();
	if(value.length > 18){
		 $("#cardNumber").val(value.substring(0,value.length-1));
	}
	if(value.length==4 || value.length==9 || value.length==14){
		$("#cardNumber").val(value+" ");
	}
});

function validateAmount(){
	var amnt = $("#amount").val();
	var grandTotal = parseFloat($("#grandTotal").text().substring(1).replace(",",""));
	console.log(grandTotal);
	if(amnt ==="" || amnt < grandTotal){
		$("#amountErr").show();
		return false;
	}else{
		return true;
	}
	
}

function validateCard(){
	var result = true;
	var number = $("#cardNumber").val();
	var name = $("#accountName").val();
	var ccv = $("#ccv").val();
	var expiry = $("#expiry").val();
	if(hasNumbers(name)){
		$("#nameErr").show();
		result=false;
	}
	if(number.length < 19 || number === ""){
		$("#numberErr").show();
		result = false;
	}
	if(ccv.length < 3 || ccv === ""){
		$("#ccvErr").show();
		result=false;
	}
	if(expiry.length< 5 || expiry === ""){
		$("#expiryErr").show();
		result=false;
	}
	return result;
}

function hasNumbers(t)
{
	var regex = /\d/g;
	return regex.test(t);
}   

function getAmount(){
	if($("#amount").val() === ""){
		return 0;
	}else{
		return $("#amount").val();
	}
}

function getCard(){
	if($("#cardNumber").val() === ""){
		return "**** **** **** ****";
	}else{
		return $("#cardNumber").val();
	}
}