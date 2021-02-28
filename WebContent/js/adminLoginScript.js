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
			window.location = "../pages/adminControl.jsp";
		}
		
	});
});

$("#txtUsername, #txtPassword").keyup(function(e){
	if(e.keyCode === 13){
		$("#btnLogin").trigger("click");
	}
});