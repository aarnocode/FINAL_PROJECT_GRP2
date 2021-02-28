$(".loginBlur").hide();
	$(".controlPanel").hide();
	$("#btnLogout").hide();
	$("#btnProfile").hide();
	$("#btnOrder").hide();
	$("#btnLogin").show();
	var isLoggedIn = $("#isLoggedIn").val();

	$(document).ready(function(){
		if(isLoggedIn == "true"){
			$("#btnLogout").show();
			$("#btnProfile").show();
			$("#btnOrder").show();
			$("#btnLogin").hide();
		}
	});
	window.onscroll = function() {myFunction()};

	var header = document.getElementById("header");
	var sticky = header.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
	    header.classList.add("sticky");
	  } else {
	    header.classList.remove("sticky");
	  }
	}

	$(".cart").click(function(){
		console.log("cart clicked");
		if(isLoggedIn == "true"){
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

	$("#btnNavHome").click(function(){
		$.ajax({
			url: contextPath + "home",
			method: "POST",
			success: function(){
				window.location = "../pages/home.jsp";
			}
		});
	});

	$("#btnNavAccount").click(function(){
		$(".controlPanel").slideToggle();
	});

	$("#btnProfile").click(function(){
		if(isLoggedIn == "true"){
			$.ajax({
				url: contextPath + "pages/profile",
				method: "POST",
				success: function(){
					window.location = "../pages/userProfile.jsp";
				}
			});
		}else{
			$(".loginBlur").show();
		}
	});
	
	$("#btnOrder").click(function(){
		$.ajax({
			url: contextPath + "pages/orderhistory",
			method: "POST",
			success: function(){
				window.location = "../pages/userOrderHistory.jsp";
			}
		});
	});

	$("#btnLogout").click(function(){
		$.ajax({
			url: contextPath + "logout",
			method:"POST",
			success:function(){
				window.location=contextPath;
			}
		});
	});

	$("#btnLogin").click(function(){
		$(".loginBlur").show();
	});

	$("#btnClose").click(function(){
		$(".txtUsername").val("");
		$(".txtPassword").val("");
		$("#notice").text("");
		$(".loginBlur").hide();
		if(isLoggedIn == "false"){
			$.ajax({
				url: contextPath + "resetstate",
				method:"POST"
			});
		}
	});