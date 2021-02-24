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
	
	$('#editsave').click(function(){
		alert('b');
		var edit = true;
		
	});
	
	$('#cancel').click(function(){
		alert('f');
		Update();
		
	});
}

function initUserProfileResult(){
	alert('a');
	if($('#ccno').text === null){	
		$('#ccno').text('No Credit Card');	
	}
	else{
		Console.log($('#ccno').text());
		alert($('#ccno').text());
		$('#addcc').text('');
	}
	
	
}
function Update(){
	$.ajax({
		url: contextPath + "pages/updateprofile",
		method: "POST"
		
	});

}
