function wish()
{
    // console.log("works");
    setTimeout(fadeoutIntro, 1500)
    setTimeout(collapseInfo, 1000);
    setTimeout(hideDescribe, 800);
    setTimeout(hideBirthday, 600);
    setTimeout(hide3, 400);
    setTimeout(hide4, 200);

    setTimeout(revealBday, 1500);
    HappyBirthdayCounter();
}

function collapseInfo()
{
    var detailsExtend = document.getElementsByClassName("detailsExtend");
    detailsExtend[0].style.height = "0";
    detailsExtend[1].style.height = "0";

    var footerIntro = document.getElementsByClassName("footerIntro");
    footerIntro[0].style.top = "100%";
    footerIntro[1].style.top = "100%";
}

function hideDescribe()
{
    var selfDescribe = document.getElementsByClassName("introEntry");
    selfDescribe[0].style.transition = "0.5s ease";
    selfDescribe[4].style.transition = "0.5s ease";

    selfDescribe[0].style.width = "0%";
    selfDescribe[4].style.width = "0%";
    selfDescribe[4].style.marginLeft = "90%";
}

function hideBirthday()
{
    var birthdayInfo = document.getElementsByClassName("introEntry");
    birthdayInfo[1].style.transition = "0.5s ease";
    birthdayInfo[5].style.transition = "0.5s ease";

    birthdayInfo[1].style.width = "0%";
    birthdayInfo[5].style.width = "0%";
    birthdayInfo[5].style.marginLeft = "90%";
}

function hide3()
{
    var threeInfo = document.getElementsByClassName("introEntry");
    threeInfo[2].style.transition = "0.5s ease";
    threeInfo[6].style.transition = "0.5s ease";

    threeInfo[2].style.width = "0%";
    threeInfo[6].style.width = "0%";
    threeInfo[6].style.marginLeft = "90%";
}

function hide4()
{
    var fourInfo = document.getElementsByClassName("introEntry");
    fourInfo[3].style.transition = "0.5s ease";
    fourInfo[7].style.transition = "0.5s ease";

    fourInfo[3].style.width = "0%";
    fourInfo[7].style.width = "0%";
    fourInfo[7].style.marginLeft = "90%";
}


function fadeoutIntro()
{
    var details = document.getElementsByClassName("details");
    details[0].style.left = "-35%";
    details[0].style.opacity = "0%";

    details[1].style.right = "-35%";
    details[1].style.opacity = "0%";
}

function HappyBirthdayCounter()
{
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();


    hour = ("0" + hour).slice(-2);
    minute = ("0" + minute).slice(-2);
    second = ("0" + second).slice(-2);

    var HPBD = document.getElementById("HappyBirthday");

    HPBD.innerHTML = hour + ":" + minute + ":" + second;

    setTimeout(HappyBirthdayCounter, 500);

    setTimeout(HPBD_message, 500) ;
}

function revealBday()
{
    var HPBD = document.getElementById("HappyBirthday");
    var BDAYmessage = document.getElementById("HPBD_message");
    
    HPBD.style.transform = "scale(1)";
    HPBD.style.opacity = "1";

    BDAYmessage.style.transform = "scale(1)";
    BDAYmessage.style.opacity = "1";
}

function HPBD_message()
{
    var BDAYmessage = document.getElementById("HPBD_message");
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1;

    var i = 2020;
    var nextBday = new Date("10/24/"+ i.toString());
    var time_Difference = nextBday.getTime() - currentDate.getTime();
    var day_Difference = Math.floor(time_Difference/(1000 * 3600 * 24));
    var hour_Difference = Math.floor(time_Difference/(1000 * 3600));
    var minute_Difference = Math.floor(time_Difference/(1000 * 60));

    // if (minute_Difference > 60)
    // {
    //     minute_Difference = minute_Difference - 60;
    //     hour_Difference = hour_Difference + 1;
    // }

    if (date == 24 && month == 10)
    {
        BDAYmessage.innerHTML = "Happy Birthday Honey :3 I love you";
    }

    else if(date >= 24 && month == 10)
    {
        i = i + 1;

        BDAYmessage.innerHTML = "There are " + day_Difference.toString() + 
        " day(s), " +  hour_Difference.toString() + " hours and " 
        + minute_Difference.toString() + 
        " minutes left until your birthday :3";
    }
     
}
   
