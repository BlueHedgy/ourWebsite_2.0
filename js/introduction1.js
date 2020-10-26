setTimeout(introSlideUp, 150);

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
    var bdayTess = document.getElementById("bdayTess");
    bdayTess.innerHTML = "24th October";
    bdayTess.style.opacity = "1";
    
    
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
