/*IF JS USE <PAGE NAME><"SCRIPT">.js*/
window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function(){
	$.ajax({
		url:contextPath+"home",
		method:"POST",
		success:function(result){
			$("#mainContainer").html(result);
		}
	});
	
	
});
