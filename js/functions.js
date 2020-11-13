function pageInit()
{
    artButtonClick();
    homeButtonClick();
    introButtonClick();

    var x = window.matchMedia("(max-width: 700px)");
    lessThan700px(x);
    x.addEventListener("change", lessThan700px);
}

function artButtonClick()
{
    var linkToArt = document.createElement("a");
    linkToArt.setAttribute("class", "naviLink");
    linkToArt.href = "Artwork.html";
    linkToArt.innerHTML = "ARTWORKS";

    var artButton = document.getElementsByClassName("naviMenu")[4];
    artButton.appendChild(linkToArt);


    var linkToArt2 = document.createElement("a");
    linkToArt2.setAttribute("class", "naviLink2");
    linkToArt2.href = "Artwork.html";
    linkToArt2.innerHTML = "ARTWORKS";
    var artButtonSide = document.getElementsByClassName("naviMenu2")[4];
    artButtonSide.appendChild(linkToArt2);
}


function homeButtonClick()
{
    var linkToHome = document.createElement("a");
    linkToHome.setAttribute("class", "naviLink");
    linkToHome.href = "Mainpage.html";
    linkToHome.innerHTML = "MAIN PAGE";

    var homeButton = document.getElementsByClassName("naviMenu")[0];
    homeButton.appendChild(linkToHome);


    var linkToHome2 = document.createElement("a");
    linkToHome2.setAttribute("class", "naviLink2");
    linkToHome2.href = "Mainpage.html";
    linkToHome2.innerHTML = "MAIN PAGE";

    var homeButtonSide = document.getElementsByClassName("naviMenu2")[0];
    homeButtonSide.appendChild(linkToHome2);
}

function introButtonClick()
{
    var linkToIntro = document.createElement("a");
    linkToIntro.setAttribute("class", "naviLink");
    linkToIntro.href = "Introduction.html";
    linkToIntro.innerHTML = "INTRODUCTION";

    var introButton = document.getElementsByClassName("naviMenu")[1];
    introButton.appendChild(linkToIntro);


    var linkToIntro2 = document.createElement("a");
    linkToIntro2.setAttribute("class", "naviLink2");
    linkToIntro2.href = "Introduction.html";
    linkToIntro2.innerHTML = "INTRODUCTION";

    var introButtonSide = document.getElementsByClassName("naviMenu2")[1];
    introButtonSide.appendChild(linkToIntro2);
}

var burgerClick = 0;

function lessThan700px(x)
{
    naviMenuFull = document.getElementsByClassName("naviMenu");
    sidebar = document.getElementById("sidebar");
    dimOverLay = document.getElementById("dim_overlay");
    hamburger = document.getElementById("hamburger");
    naviBar = document.getElementById("navi_bar");
    slice = document.getElementsByClassName("slice");

    if (x.matches)
    {

        for (var i=0; i<=4; i++)
        {
            naviMenuFull[i].style.visibility ="hidden";
        }

        hamburger.style.visibility = "visible";
        hamburger.style.opacity = "1";
        naviBar.style.height = "7%";
        sidebar.style.top = "7%";
        sidebar.style.height = "93%";

        console.log(burgerClick);
    }
    
    else
    {
        burgerClick = 0;

        for (var i=0; i<=4; i++)
        {
            naviMenuFull[i].style.visibility ="visible";
        }
        
        naviBar.style.height = "10%";

        hamburger.style.visibility = "hidden";
        hamburger.style.opacity = "0";

        dimOverLay.style.opacity = "0";

        sidebar.style.width = "0";
        sidebar.style.top = "10%";
        sidebar.style.height = "90%";

        slice[0].style.transform = "rotateZ(0deg)";
        slice[2].style.transform = "rotateZ(0deg)";
        setTimeout(resetBurger, 200);

        console.log(burgerClick);
    }
}
