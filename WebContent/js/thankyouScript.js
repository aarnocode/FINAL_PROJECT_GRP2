$("#btnHome").click(function(){
	$.ajax({
		url:contextPath + "home",
		method :"POST",
		success: function(){
			window.location = "../pages/home.jsp";
		}
	});
});