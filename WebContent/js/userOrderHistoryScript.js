function initOrderHistory(){
	
	$('#backBtn').click(function(){
		var prevURL = document.referrer;
		window.location.href = prevURL;
	});

}

