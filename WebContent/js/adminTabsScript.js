$("#btnAddProduct").click(function(){
	$("#pnlContentAdd").show();
	$("#pnlContentUpdate").hide();
});

$("#btnUpdateProduct").click(function(){
	$("#pnlContentUpdate").show();
	$("#pnlContentAdd").hide();
});

$("#btnSearch").click(function(){
	console.log("searched");
	$.ajax({
		url: contextPath + "searchproduct",
		method: "POST",
		data:{
			option: $("#selSearchOption option:selected").val(),
			searchValue: $("#txtSearchValue").val()
		},
		success:function(result){
			$("#mainContainer").html(result);
			$(document).ready(function(){
				$("#btnUpdateProduct").trigger("click");
				$("#result input").prop("disabled",false);
			});
		}
	});
});

$("#btnUpdate").click(function(){
	if(validateUpdate()){
		$.ajax({
			url:contextPath + "updateproduct",
			method:"POST",
			data:{
				product_id:$("#lblProductId").text(),
				name: $("#txtSearchName").val(),
				price:$("#txtSearchPrice").val(),
				stock:$("#txtSearchStock").val(),
				image:$("#txtSearchLink").val()
			},
			success:function(result){
				$("#mainContainer").html(result);
				$(document).ready(function(){
					$("#btnUpdateProduct").trigger("click");
					$("#result input").prop("disabled",false);
					$(".loginPop").show();
					setInterval(() => {
						$(".loginPop").hide();
					}, 2000);
				});
			}
		});
	}
});

$("#btnAdd").click(function(){
	if(validateAdd()){
		$.ajax({
			url:contextPath + "addproduct",
			method:"POST",
			data:{
				name:$("#txtAddName").val(),
				description:$("#txtAddDescription").val(),
				category:$("#txtAddCategory").val(),
				price:$("#txtAddPrice").val(),
				stock:$("#txtAddStock").val(),
				image:$("#txtAddImage").val()
			},
			success:function(result){
				$("#mainContainer").html(result);
				$("#pnlContentUpdate").hide();
				$(".loginPop").hide();
				$(document).ready(function(){
					$(".loginPop").show();
					setInterval(() => {
						$(".loginPop").hide();
					}, 2000);
				});
			}
		});
	}
	
});

$("#btnLogout").click(function(){
	window.location = "../pages/adminLogin.jsp";
//	$("#mainContainer").load("pages/adminLogin.jsp");
});




function validateUpdate(){
	var result = true;
	if($("#txtSearchName").val() == null || $("#txtSearchName").val() == ""){
		$("#warnName").text(" Do not leave this field empty");
		$("#txtSearchName").css("border-color","red");
		result=false;
	}
	if($("#txtSearchLink").val() == null || $("#txtSearchLink").val() == ""){
		$("#warnImage").text(" Do not leave this field empty");
		$("#txtSearchLink").css("border-color","red");
		result=false;
	}
	return result;
}


function validateAdd(){
	var result = true;
	if($("#txtAddName").val() == null || $("#txtAddName").val() == ""){
		$("#warnNameAdd").text(" Do not leave this field empty");
		$("#txtAddName").css("border-color","red");
		result=false;
	}
	if($("#txtAddImage").val() == null || $("#txtAddImage").val() == ""){
		$("#warnImageAdd").text(" Do not leave this field empty");
		$("#txtAddImage").css("border-color","red");
		result=false;
	}
	
	if($("#txtAddDescription").val() == null || $("#txtAddDescription").val() == ""){
		$("#warnDescAdd").text(" Do not leave this field empty");
		$("#txtAddDescription").css("border-color","red");
	}
	
	if($("#txtAddCategory").val() == null || $("#txtAddCategory").val() == ""){
		$("#warnCategoryAdd").text(" Do not leave this field empty");
		$("#txtAddCategory").css("border-color","red");
	}
	return result;
}