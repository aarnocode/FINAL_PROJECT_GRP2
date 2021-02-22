$("#btnLogin").click(function(){
	console.log("clicked login");
	$.ajax({
		url:contextPath + "adminlogin",
		method:"POST",
		data:{
			username:$("#txtUsername").val(),
			password:$("#txtPassword").val()
		},
		success:function(result){
			$("#mainContainer").html(result);
		}
		
	});
});