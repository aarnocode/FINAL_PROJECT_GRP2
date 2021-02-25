var isLoggedIn = $("#isLoggedIn").val();
$(".loginBlur").hide();
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
            $.ajax({
            	url:contextPath + "productview",
            	method:"POST",
            	data: {
            		id:$("input[type=hidden]",this).val()
            	},
            	success:function(result){
            		window.location = "pages/productview.jsp";
            	}
            });
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
    			$("#mainContainer").html(result);
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
			window.location=contextPath;
		}
	});
});

$(".cart").click(function(){
	if(isLoggedIn == "true"){
		$.ajax({
			url: contextPath + "cart",
			method: "POST",
			success: function(){
				window.location = "../pages/cart.jsp";
			}
		});
	}else{
		$(".loginBlur").show();
	}
	
});
function getData(img,name,price){
    var str;
    str = "name="+String(name) + "&" +
          "price=" +String(price).substring(2) + "&" +
          "img="+String(img).substring(50);
    
    return str;
}


