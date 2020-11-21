var y = window.matchMedia("(max-width: 1300px)");
introSub1300px(y);
y.addEventListener("change", introSub1300px); 
   
function introSub1300px(browser_width)
{
    if (browser_width.matches)
    {
        setTimeout(introSlideUp2, 150);
    }
    else
    {
        setTimeout(introSlideUp, 150);
    }
}