function artButtonClick()
{
    var linkToArt = document.createElement("a");
    linkToArt.href = "Artwork.html";
    linkToArt.innerHTML = "ARTWORKS";
    var artButton = document.getElementsByClassName("naviMenu")[4];
    artButton.appendChild(linkToArt);
}

