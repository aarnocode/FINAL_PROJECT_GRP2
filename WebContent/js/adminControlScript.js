var isAdmin = $("#isAdmin").val();
$(document).ready(function(){
	if(isAdmin == "true"){
		$("#pnlContentUpdate").hide();
		$("#pnlView").hide();
		$(".loginPop").hide();
	}
	else{
		window.location = "../pages/adminLogin.jsp";
	}
});

