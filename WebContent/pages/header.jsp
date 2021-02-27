<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<nav class="navbar navbar-dark " id="header">
	
		<div class="container-fluid ">
			<div >
			<a class="navbar-brand" href="#"> 
			<div class="logo" >
			<img src="../images/logo.png">
			</div>
			<div class="brandName">
				GESZ
			</div>
			</a>
			</div>
			
			<!--  
			<div class="searchBarWrapper" >
				<div class="searchIcon" >
				<i class="material-icons" style="font-size:36px; color:white">search</i>
				
				</div>
				<div class="searchField" >
				<input class="searchBar" type="text"
					placeholder="Search for products" >
				</div>
			</div> 
			-->


			<div class="rightControls">
				
				<i class="material-icons cart" style="font-size:36px; color:white">shopping_cart</i><span class='badge' id='lblCartCount'>
					<c:if test="${cartCount >= 1}">
						${cartCount}
					</c:if>
				</span>
				<i id="btnNavHome" class="material-icons d-inline-block align-top" style="font-size:36px; color:white">home</i>
				<i id="btnNavAccount" class="material-icons" style="font-size:36px; color:white">account_circle</i>
			</div>
			
		</div><!-- end of container-fluid div -->
		<div class="controlPanel">
			<input id="btnLogin" type="button" value="Login">
			<input id="btnProfile" type="button" value="Profile">
			<hr>
			<input id="btnOrder" type="button" value="Order History">
			<hr>
			<input id="btnLogout" type="button" value="Logout">
		</div>
	
</nav>

<script> 
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
		success: function(result){
			window.location.href= 'http://localhost:8080/OnlineStore/pages/userOrderHistory.jsp';
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
</script>