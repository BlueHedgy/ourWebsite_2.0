function burgerAndFries()
{
    burgerClick += 1;

    burger = document.getElementById("hamburger");
    slice = document.getElementsByClassName("slice");
    fries = document.getElementById("sidebar");
    
    if (burgerClick % 2 == 1)
    {
        slice[0].style.top = "50%";
        slice[1].style.opacity = "0";
        slice[2].style.top = "50%";
        setTimeout(animateBurger, 100);

        dimOverLay.style.opacity = "1";
        dimOverLay.style.visibility = "visible";
    }

    else
    {
        slice[0].style.transform = "rotateZ(0deg)";
        slice[2].style.transform = "rotateZ(0deg)";
        setTimeout(resetBurger, 100);
        
        dimOverLay.style.opacity = "0";
        dimOverLay.style.visibility = "hidden";
    }

    checkSidebarClick();
}


function animateBurger()
{
    slice[0].style.transform = "rotateZ(45deg)";
    slice[2].style.transform = "rotateZ(-45deg)";

    revealSidebar();
}

function resetBurger()
{
    slice[0].style.top = "30%";
    slice[1].style.opacity = "1";
    slice[2].style.top = "70%";

    hideSidebar();
}


function revealSidebar()
{
    fries.style.width = "70%";

    var naviMenuSide = document.getElementsByClassName("naviMenu2");
    
    for (var i=0; i<=4; i++)
    {
        naviMenuSide[i].style.width = "100%";
        naviMenuSide[i].style.left = "0";
    }

    setTimeout(function(){
        var naviLinkSide = document.getElementsByClassName("naviLink2");
        for (var i=0; i<=2; i++)
        {
            naviLinkSide[i].style.opacity = "1";
        }
    }, 200);

}


function hideSidebar()
{
    var naviLinkSide = document.getElementsByClassName("naviLink2");
    for (var i=0; i<=2; i++)
    {
        naviLinkSide[i].style.opacity = "0";
    }

    setTimeout(function(){
        fries.style.width = "0";
    }, 50);
}

var overlayClick = 0;
function checkSidebarClick()
{
    var dimOverLay = document.getElementById("dim_overlay");
    if (overlayClick == 1)
    {
        overlayClick == 0;
    }

    else 
    {
        dimOverLay.onclick = burgerAndFries;
        overlayClick += 1;
    }
}