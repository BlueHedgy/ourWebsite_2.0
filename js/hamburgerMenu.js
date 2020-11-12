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
        setTimeout(animateBurger, 200);

        revealSidebar();
        dimOverLay.style.opacity = "1";
    }

    else
    {
        slice[0].style.transform = "rotateZ(0deg)";
        slice[2].style.transform = "rotateZ(0deg)";
        setTimeout(resetBurger, 200);
        
        fries.style.width = "0";
        dimOverLay.style.opacity = "0";
    }
    
}


function animateBurger()
{
    slice[0].style.transform = "rotateZ(45deg)";
    slice[2].style.transform = "rotateZ(-45deg)";
}

function resetBurger()
{
    slice[0].style.top = "30%";
    slice[1].style.opacity = "1";
    slice[2].style.top = "70%";
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
        for (var i=0; i<=3; i++)
        {
            naviLinkSide[i].style.opacity = "1";
        }
    }, 400);
}