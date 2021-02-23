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
    
});
function getData(img,name,price){
    var str;
    str = "name="+String(name) + "&" +
          "price=" +String(price).substring(2) + "&" +
          "img="+String(img).substring(50);
    
    return str;
}


