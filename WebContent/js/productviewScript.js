var isLoggedIn = $("input[type=hidden]").val();

$(".loginBlur").hide();
$("#addCartStatus").hide();
$(document).ready(function(){
	var status = $("#status").val();
	
	if(status == "success"){
		$("#addCartMessage").text("Successfully added to cart!");
		$("#addCartStatus").show();
	}else if(status == "failed"){
		$("#addCartMessage").text("Sorry! This item is out of stock");
		$("#addCartStatus").show();
	}
});

$(".btnBuy").on({
    click: function(){
    	if(isLoggedIn == "true"){
    		window.location = "../pages/checkout.jsp";
    		/*$.ajax({
    			url: contextPath + "buynow",
    			method:"POST",
    			data:{
    				action:"buy"
    			},
    			success: function(){
    				$.ajax({
    					url:contextPath + "cart",
    					method:"POST",
    					success: function(){
    						window.location = "../pages/cart.jsp";
    					}
    				});
    			}
    		});*/
    	}else{
    		$(".loginBlur").show();
    	}
        
    },
    mouseenter:function(){
        $(this).css({
            "background-color":"red",
            "box-shadow":"2px 2px 5px dimgray"
        });
    },
    mouseleave:function(){
        $(this).css({
            "background-color":"black",
            "box-shadow":"none"
    });
    }
});

$(".btnAddCart").on({
	click: function(){
    	if(isLoggedIn == "true"){
    		$.ajax({
    			url: contextPath + "addtocart",
    			method: "POST",
    			data:{
    				action:"addToCart"
    			},
    			success:function(){
    				window.location = "../pages/productview.jsp";
    			}
    			
    		});
    		/*$.ajax({
    			url: contextPath + "buynow",
    			method:"POST",
    			data:{
    				action:"buy"
    			},
    			success: function(){
    				$.ajax({
    					url:contextPath + "cart",
    					method:"POST",
    					success: function(){
    						window.location = "../pages/cart.jsp";
    					}
    				});
    			}
    		});*/
    	}else{
    		$(".loginBlur").show();
    	}
    },
    mouseenter:function(){
        $(this).css({
            "background-color":"red",
            "box-shadow":"2px 2px 5px dimgray"
        });
    },
    mouseleave:function(){
        $(this).css({
            "background-color":"black",
            "box-shadow":"none"
    });
    }
});

$(".cart").on({
    click: function(){
        window.location="cart.html";
    },
});

//Sir Ralph, dito po yung click event ng register. Lagyan mo nalag ajax sa loob.
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
			window.location="../pages/productview.jsp";
		}
	});
});

$(".navtabs").on({
    mouseenter:function(){
        $(this).css("border-bottom","1px solid white");
        $(".window").css({"height":"30%","display":"block"});
    },
    mouseleave:function(){
        $(this).css("border","none");
        $(".window").css({"height":"0","display":"none"});
    }
});

