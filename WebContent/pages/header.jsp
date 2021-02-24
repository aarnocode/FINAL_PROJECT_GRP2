<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<nav class="navbar navbar-dark " id="header">
	
		<div class="container-fluid ">
		
			<a class="navbar-brand" href="#"> 
			<img src="images/logo.png" alt=""  class="d-inline-block align-top"> 
				GESZ
			</a>
		

			<div class="searchBarWrapper">
				<img src="https://img.icons8.com/android/24/ffffff/search.png" />
				<!-- search icon -->
				<input class="searchBar" type="text"
					placeholder="Search for products">
			</div>
			<!-- end of searchBard div -->


			<div class="rightControls">
				<img class="cart" src="https://img.icons8.com/windows/32/ffffff/favorite-cart.png" /><span class='badge' id='lblCartCount'>
					<c:if test="${cartCount >= 1}">
						${cartCount}
					</c:if>
				</span>
				<img class="login" src="https://img.icons8.com/pastel-glyph/32/ffffff/person-male--v3.png"/>
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