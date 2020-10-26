function pageInit()
{
    artButtonClick();
    homeButtonClick();
    introButtonClick();
}

function artButtonClick()
{
    var linkToArt = document.createElement("a");
    linkToArt.setAttribute("class", "naviLink");
    linkToArt.href = "Artwork.html";
    linkToArt.innerHTML = "ARTWORKS";

    var artButton = document.getElementsByClassName("naviMenu")[4];
    artButton.appendChild(linkToArt);
}


function homeButtonClick()
{
    var linkToHome = document.createElement("a");
    linkToHome.setAttribute("class", "naviLink");
    linkToHome.href = "OurWebsiteV2.html";
    linkToHome.innerHTML = "MAIN PAGE";

    var homeButton = document.getElementsByClassName("naviMenu")[0];
    homeButton.appendChild(linkToHome);

    slideInfo_card();
    setTimeout(showPreview, 900)
}


function introButtonClick()
{
    var linkToIntro = document.createElement("a");
    linkToIntro.setAttribute("class", "naviLink");
    linkToIntro.href = "Introduction.html";
    linkToIntro.innerHTML = "INTRODUCTION";

    var introButton = document.getElementsByClassName("naviMenu")[1];
    introButton.appendChild(linkToIntro);

    setTimeout(introSlideUp, 150)
}

function introSlideUp()
{
    introDetails = document.getElementsByClassName("details");
    introDetails[0].style.transition = "0.8s ease-out";
    introDetails[0].style.top = "20%";
    introDetails[0].style.opacity = "1";

    introDetails[1].style.transition = "0.8s ease-out";
    introDetails[1].style.top = "20%";
    introDetails[1].style.opacity = "1";
    
    setTimeout(revealInfo, 620);
    setTimeout(slideDescribe, 1100);
    setTimeout(slideBirthday, 1300);
    setTimeout(slide3, 1500);
    setTimeout(slide4, 1700);
}

function revealInfo()
{
    var infos = document.getElementsByClassName("detailsExtend");
    infos[0].style.height = "350%";
    infos[1].style.height = "350%";

    var infosFooter = document.getElementsByClassName("footerIntro");
    infosFooter[0].style.top = "450%";
    infosFooter[1].style.top = "450%";
}

function slideDescribe()
{
    var selfDescribe = document.getElementsByClassName("introEntry");
    selfDescribe[0].style.transition = "0.5s ease";
    selfDescribe[4].style.transition = "0.5s ease";

    selfDescribe[0].style.width = "90%";
    selfDescribe[4].style.width = "90%";
    selfDescribe[4].style.marginLeft = "0";
}

function slideBirthday()
{
    
    setTimeout(function(){
        var bdayTess = document.getElementById("bdayTess");
        bdayTess.innerHTML = "24th October";
    }, 800);
    
    var birthdayInfo = document.getElementsByClassName("introEntry");
    birthdayInfo[1].style.transition = "0.5s ease";
    birthdayInfo[5].style.transition = "0.5s ease";

    birthdayInfo[1].style.width = "90%";
    birthdayInfo[5].style.width = "90%";
    birthdayInfo[5].style.marginLeft = "0";
}

function slide3()
{
    var threeInfo = document.getElementsByClassName("introEntry");
    threeInfo[2].style.transition = "0.5s ease";
    threeInfo[6].style.transition = "0.5s ease";

    threeInfo[2].style.width = "90%";
    threeInfo[6].style.width = "90%";
    threeInfo[6].style.marginLeft = "0";
}

function slide4()
{
    var fourInfo = document.getElementsByClassName("introEntry");
    fourInfo[3].style.transition = "0.5s ease";
    fourInfo[7].style.transition = "0.5s ease";

    fourInfo[3].style.width = "90%";
    fourInfo[7].style.width = "90%";
    fourInfo[7].style.marginLeft = "0";
}


function slideInfo_card()
{
    setTimeout(slideInfo1, 200);
    setTimeout(slideInfo2, 400);
    setTimeout(slideInfo3, 600);

    function slideInfo1()
    {
        var info_card1 = document.getElementById("info1");
        info_card1.style.opacity = "0.7";
        info_card1.style.bottom = "0";
    }

    function slideInfo2()
    {
        var info_card2 = document.getElementById("info2");
        info_card2.style.opacity = "0.7";
        info_card2.style.bottom = "0";
    }

    function slideInfo3()
    {
        var info_card3 = document.getElementById("info3");
        info_card3.style.opacity = "0.7";
        info_card3.style.bottom = "0";
    }
}

function showPreview()
{
    var preview = document.getElementById("preview");
    preview.style.opacity = "0.7";
}
