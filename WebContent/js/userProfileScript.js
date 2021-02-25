function initUserProfile(){
	$.ajax({
		url: contextPath + "pages/profile",
		method: "POST",
		success: function(result){
			$("#profilecontainer").html(result);
		}
	});
	
	
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
	if($.trim($('#ccno').text()) == ""){	
		$('#ccno').text('No Credit Card');	
		alert('b');
	}
	else{
		alert($('#ccno').text());
		$('#addcc').text('');
		alert('c');
	}
	
	
}
function Update(){
	$.ajax({
		url: contextPath + "pages/updateprofile",
		method: "POST"
		
	});

}
