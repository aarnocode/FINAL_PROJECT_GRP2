var isLoggedIn =false;
hideLogin();
hideAccount();
$(document).ready(function(){
    if(!isLoggedIn && checkIsLogged()["logged"] != "true"){
        showLogin();
    }else if(checkIsLogged()["logged"] == "true"){
        hideLogin();
    }
    $(".cards").on({
        mouseenter: function(){
            $(this).css({"box-shadow":"3px 3px 5px dimgray"})
        },
        mouseleave: function(){
            $(this).css({"box-shadow":"0px 0px"})
        }
    });

    $(".cart").on({
        click: function(){
            window.location="cart.html";
        },
    });

    $(".cards").on({
        click: function(){
            var img = $("img",this).attr('src');
            var name = $("h3", this).text();
            var price = $("h4", this).text();
            window.location = "item.html?"+getData(img,name,price);
        },
    });

    $(".btnLogin").on({
        click:function(){
            var username = $(".txtUsername").val();
            var password = $(".txtPassword").val();
            if(username == "guest" && password=="guest123"){
                isLoggedIn=true;
                hideLogin();
            }else{
                $("#notice").text("Inavlid username/password. Please try again.");
            }
            
        }
    });

    $(".badge").click(function(){
        window.location = "home.html?logged=true";
    })
    
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


function getData(img,name,price){
    var str;
    str = "name="+String(name) + "&" +
          "price=" +String(price).substring(2) + "&" +
          "img="+String(img).substring(50);
    
    return str;
}

function showLogin(){
    $(".loginBlur").show();
}

function hideLogin(){
    $(".loginBlur").hide();
}

function checkIsLogged(){
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

