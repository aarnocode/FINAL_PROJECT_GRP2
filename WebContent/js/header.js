
$(".controlPanel").hide();
$("#btnLogout").hide();
$("#btnProfile").hide();
$("#btnOrder").hide();
$("#btnLogin").show();
var isLoggedIn = $("#isLoggedIn").val();
var isAdmin = $("#isAdmin").val();
$(document).ready(function(){
	if(isLoggedIn == "true" && isAdmin != "true"){
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
	console.log("sticky triggered");
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
		$(".loginBlur").fadeIn(1000);
	}
	
});

$("#btnNavHome").click(function(){
	$.ajax({
		url: contextPath + "home",
		method: "POST",
		success: function(){
			window.location = "../";
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
		$(".loginBlur").fadeIn(1000);
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
	$(".loginBlur").fadeIn(1000);
});

$("#btnClose").click(function(){
	$(".txtUsername").val("");
	$(".txtPassword").val("");
	$("#notice").text("");
	$(".loginBlur").fadeOut(500);
	if(isLoggedIn == "false"){
		$.ajax({
			url: contextPath + "resetstate",
			method:"POST"
		});
	}
});