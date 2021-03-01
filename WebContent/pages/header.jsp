<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<nav class="navbar navbar-dark " id="header">
	
		<div class="container-fluid ">
			<div >
			<a class="navbar-brand"> 
			<div class="logo" >
			<img src="../images/logo.png">
			</div>
			<div class="brandName">
				GESZ
			</div>
			</a>
			</div>


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