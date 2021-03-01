var isLoggedIn = $("#isLoggedIn").val();
if(isLoggedIn == "false"){
	$(".loginBlur").show();
}else{
	$(".loginBlur").hide();
}
$(document).ready(function(){
    $(".cards").on({
        mouseenter: function(){
            $(this).css({"box-shadow":"3px 3px 5px dimgray"})
        },
        mouseleave: function(){
            $(this).css({"box-shadow":"0px 0px"})
        }
    });

    $(".cards").on({
        click: function(){
        	if($("h5",this).text() != "OUT OF STOCK"){
        		$.ajax({
                	url:contextPath + "productview",
                	method:"POST",
                	data: {
                		id:$("input[type=hidden]",this).val()
                	},
                	success:function(result){
                		window.location = "../pages/productview.jsp";
                	}
                });
        	}
            
        },
    });
    
    $(".leftPanel input[type=button]").on({
    	mouseenter:function(){
    		$(this).css({
    			"background-color":"dimgray",
    			"color":"White"
    				});
    	},
    	mouseleave:function(){
    		$(this).css({
    			"background-color":"white",
    			"color":"black"
    				});
    	},
    	click:function(){
    		
    	}
    });
    
    $(".category").click(function(){
    	var category = $(this).attr("id");
    	$.ajax({
    		url:contextPath+"home",
    		method:"POST",
    		data:{
    			category:category
    		},
    		success:function(result){
    			window.location = "../pages/home.jsp";
    			$(window).scrollTop(0);
    		}
    	});
    });
    
});

$("#register").click(function(){
	window.location.href = 'http://localhost:8080/OnlineStore/pages/userRegistration.jsp';
	console.log("register clicked!");
});

$(".btnLogin").click(function(){
	console.log("clicked");
	$.ajax({
		url:contextPath + "login",
		method: "POST",
		data:{
			username:$(".txtUsername").val(),
			password:$(".txtPassword").val()
		},
		success: function(){
			window.location="../pages/home.jsp";
		}
	});
});

$(".txtPassword, .txtUsername").keyup(function(e){
	if(e.keyCode === 13){
		$(".btnLogin").trigger("click");
	}
});

$("#btnClose").click(function(){
	$(".txtUsername").val("");
	$(".txtPassword").val("");
	$("#notice").text("");
	$(".loginBlur").fadeOut(500);
	if(isLoggedIn == "false"){
		$.ajax({
			url: contextPath + "resetstate",
			method:"POST"
		});
	}
});

$(".cart").click(function(){
	if(isLoggedIn == "true"){
		$.ajax({
			url: contextPath + "cart",
			method: "POST",
			success: function(){
				window.location = contextPath+"pages/cart.jsp";
			}
		});
	}else{
		$(".loginBlur").fadeIn(1000);
	}
	
});
function getData(img,name,price){
    var str;
    str = "name="+String(name) + "&" +
          "price=" +String(price).substring(2) + "&" +
          "img="+String(img).substring(50);
    
    return str;
}


