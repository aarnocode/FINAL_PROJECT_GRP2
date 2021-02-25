function initializeEvents(){
	$("#btnAddProduct").click(function(){
		clearUpdate();
		$("#pnlContentAdd").show();
		$("#pnlContentUpdate").hide();
	});

	$("#btnUpdateProduct").click(function(){
		clearAdd();
		$("#pnlContentUpdate").show();
		$("#pnlContentAdd").hide();
	});
	
	$("#btnLogout").click(function(){
		$.ajax({
			url: contextPath + "logout",
			method:"POST",
			success:function(){
				window.location = "../pages/adminLogin.jsp";
			}
		});
	});

	$("#txtSearchLink").keypress(function(){
		console.log($("#txtSearchLink").val());
		$("#imgSourceUpdate").attr("src",$("#txtSearchLink").val());
	});

	$("#txtSearchLink").keyup(function(e){
		if(e.keyCode == 8){
			$("#imgSourceUpdate").attr("src",$("#txtSearchLink").val());
		}
	})

	$("#txtAddImage").keypress(function(){
		console.log($("#txtSourceAdd").val());
		$("#imgSourceAdd").attr("src",$("#txtAddImage").val());
	});

	$("#txtAddImage").keyup(function(e){
		if(e.keyCode == 8){
			$("#imgSourceAdd").attr("src",$("#txtAddImage").val());
		}
	})


	const addImage = document.querySelector('#txtAddImage');

	addImage.addEventListener('paste', (event) => {
	    let paste = (event.clipboardData || window.clipboardData).getData('text');
	    /*paste = paste.toUpperCase();*/
	    $("#txtAddImage").val(paste);
	    $("#imgSourceAdd").attr("src",paste);

	    event.preventDefault();
	});

	const updateImage = document.querySelector('#txtSearchLink');

	updateImage.addEventListener('paste', (event) => {
	    let paste = (event.clipboardData || window.clipboardData).getData('text');
	    /*paste = paste.toUpperCase();*/
	    $("#txtSearchLink").val(paste);
	    $("#imgSourceUpdate").attr("src",paste);

	    event.preventDefault();
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
				$("#pnlContentAdd").hide();
				$("#pnlContentUpdate").show();
				$("#pnlControl").show();
				$(".loginPop").hide();
				initializeEvents();
				$(document).ready(function(){
					$("#btnUpdateProduct").trigger("click");
					$("#result input").prop("disabled",false);
					$("#imgSourceUpdate").attr("src",$("#txtSearchLink").val());
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
					clearUpdate();
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
					clearAdd();
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
}

$(document).ready(function(){
	initializeEvents();
})






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

function clearAdd(){
	$("#txtAddName").val("");
	$("#txtAddName").val("");
	$("#txtAddCategory").val("");
	$("#txtAddPrice").val("");
	$("#txtAddStock").val("");
	$("#txtAddDescription").val("");
	$("#txtAddImage").val("");
	$("#imgSourceAdd").attr("src","");
}

function clearUpdate(){
	$("#lblProductId").text("");
	$("#txtSearchValue").val("");
	$("#txtSearchName").val("");
	$("#txtSearchPrice").val("");
	$("#txtSearchStock").val("");
	$("#txtSearchLink").val("");
	$("#imgSourceUpdate").val("");
	$("#imgSourceUpdate").attr("src","");
}