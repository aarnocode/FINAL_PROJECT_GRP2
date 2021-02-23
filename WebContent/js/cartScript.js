$("input[type=button]").click(function(){
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
			id:id
		},
		success:function(){
			window.location="../pages/cart.jsp";
		}
	});
});