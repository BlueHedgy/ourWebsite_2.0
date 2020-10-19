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
}


function introButtonClick()
{
    var linkToIntro = document.createElement("a");
    linkToIntro.setAttribute("class", "naviLink");
    linkToIntro.href = "Introduction.html";
    linkToIntro.innerHTML = "INTRODUCTION";

    var introButton = document.getElementsByClassName("naviMenu")[1];
    introButton.appendChild(linkToIntro);

    introSlideUp();
}

function introSlideUp()
{
    introDetails = document.getElementsByClassName("details");
    introDetails[0].style.transition = "0.6s ease-out";
    introDetails[0].style.top = "20%";

    introDetails[1].style.transition = "0.6s ease-out";
    introDetails[1].style.top = "20%";
    
    
    setTimeout(dropDescribe, 500);
    setTimeout(dropBirthday, 600);
}

function dropDescribe()
{
    var selfDescribe = document.getElementsByClassName("selfDescription");
    selfDescribe[1].style.right = "0";
    selfDescribe[0].style.transition = "0.5s ease";
    selfDescribe[1].style.transition = "0.5s ease";

    selfDescribe[0].style.width = "80%";
    selfDescribe[1].style.width = "80%";
    selfDescribe[1].style.marginLeft = "0";
}

function dropBirthday()
{
    var birthdayInfo = document.getElementsByClassName("birthday");
    birthdayInfo[0].style.transition = "0.5s ease";
    birthdayInfo[1].style.transition = "0.5s ease";

    birthdayInfo[0].style.width = "80%";
    birthdayInfo[1].style.width = "80%";
    birthdayInfo[1].style.marginLeft = "0";
}   