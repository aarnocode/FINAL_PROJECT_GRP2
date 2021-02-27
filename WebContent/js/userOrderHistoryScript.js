function initOrderHistory(){
	
	$('#backBtn').click(function(){
		var oldURL = document.referrer;
		window.location.href = oldURL;
	});

}

