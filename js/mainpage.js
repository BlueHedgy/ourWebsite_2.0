slideInfo_card();
setTimeout(showPreview, 900);

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
