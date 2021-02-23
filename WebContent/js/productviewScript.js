var isLoggedIn = $("input[type=hidden]").val();

$(".loginBlur").hide();
$(document).ready(function(){
	console.log($("input[type=hidden]").val());
});

$(".btnBuy").on({
    click: function(){
    	if(isLoggedIn == "true"){
    		console.log("bought");
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

