function initUserProfile(){
	$.ajax({
		url: contextPath + "pages/profile",
		method: "POST",
		success: function(result){
			$("#profilecontainer").html(result);
		}
	});
}