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
    var a = window.matchMedia("(max-width: 700px)");
    mainpageSub700px(a);
    a.addEventListener("change", mainpageSub700px);
    
    var preview = document.getElementById("preview");
    preview.style.opacity = "0.7";
    randomNyan();
}


// function swipeInfoLeft()
// {
//     var infocard = document.getElementsByClassName("info_card");

//     for (var i=1; i<=3)
//     infocard[0].addEventListener("swiped-left", function(){
//         infocard[0]
//     })
// }


function randomNyan()
{
    var nyanList = ["sekanyan.png", "Doggo.png"];
    var nyanDir = "url('img/sekanyan.png)";

    var sekaNyan = document.getElementById("sekaNyan");
    var random = Math.floor((Math.random() * 4  ) + 1);

    var randomImg = Math.floor((Math.random() * 2  ) + 1);
    

    if (random == 1)
    {
        sekaNyan.style.left = "0";
        sekaNyan.style.right = "auto";
        sekaNyan.style.bottom = "auto";
        sekaNyan.style.top = "0"; 
        sekaNyan.style.background = "url('img/lb_youngfrog.png')";
        sekaNyan.style.backgroundRepeat = "no-repeat";
    }
    else if (random == 2)
    {
        sekaNyan.style.left = "auto";
        sekaNyan.style.right = "0";
        sekaNyan.style.bottom = "auto";
        sekaNyan.style.top = "0";   
        sekaNyan.style.background = "url('img/Wan.png')";
        sekaNyan.style.backgroundRepeat = "no-repeat";
    }
    else if(random == 3)
    {
        sekaNyan.style.left = "0";
        sekaNyan.style.right = "auto";
        sekaNyan.style.bottom = "0";
        sekaNyan.style.top = "auto";
        sekaNyan.style.background = "url('img/Wan.png')";
        sekaNyan.style.backgroundRepeat = "no-repeat";
    }
    else
    {
        sekaNyan.style.left = "auto";
        sekaNyan.style.right = "0";
        sekaNyan.style.bottom = "0";
        sekaNyan.style.top = "auto";
        sekaNyan.style.background = "url('img/lb_youngfrog.png')";
        sekaNyan.style.backgroundRepeat = "no-repeat";
    }

    setTimeout(randomNyan, 1000);
}

function mainpageSub700px(x)
{
    var preview = document.getElementById("preview");
    if (x.matches)
    {
        preview.style.width = "100%";
    }
    else
    {
        preview.style.width = "600px";
    }
    
}