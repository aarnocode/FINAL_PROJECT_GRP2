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
				<i class="material-icons d-inline-block align-top" style="font-size:36px; color:white">home</i>
				<i class="material-icons" style="font-size:36px; color:white">account_circle</i>
			</div>
			
		</div><!-- end of container-fluid div -->
	
</nav>

<script> 
$(".loginBlur").hide();
var isLoggedIn = $("#isLoggedIn").val();
console.log(contextPath);
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
</script>