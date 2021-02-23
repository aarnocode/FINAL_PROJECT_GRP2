var isLoggedIn = false;
$(".loginBlur").hide();
$(document).ready(function(){
	$(".btnBuy").on({
        click: function(){
        	if(isLoggedIn){
        		window.location = "checkout.html?name="+name+
                "&price="+price+
                "&img="+img;
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

    $(".badge").click(function(){
        window.location = "home.html?logged=true";
    })
});
//Sir Ralph, dito po yung click event ng register. Lagyan mo nalag ajax sa loob.
$("#register").click(function(){
	console.log("register clicked!");
});

$(".login").mouseenter(function(){
    showAccount();
});

$(".account").mouseleave(function(){
    hideAccount();
});

$("#logout").click(function(){
    window.location="home.html";
})

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

function getData(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function hideAccount(){
    $(".account").animate({
        width:0
    });
}
function showAccount(){
    $(".account").animate({
        width:"10%"
    });
}

