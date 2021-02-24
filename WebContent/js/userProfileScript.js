function initUserProfile(){
	$.ajax({
		url: contextPath + "pages/profile",
		method: "POST",
		success: function(result){
			$("#profilecontainer").html(result);
		}
	});
	
//	if(${user.ccno} != "" || ${user.ccno} == ""){
//		
//	}
}

function initUserProfileResult(){
	if($('#ccno').text === null){	
		$('#ccno').text('No Credit Card');	
	}
	else{
		Console.log($('#ccno').text());
		alert($('#ccno').text());
		$('#addcc').text('');
	}
	
	$('#editsave').click(function(){
		var edit = true;
		
	});
	

}