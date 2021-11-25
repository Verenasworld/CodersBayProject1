
//Home und Galleryseite navigation , mobile burger on click event öfnet sich erst das Menü
const toggleButton = document.getElementById('toggle');
const navlist = document.getElementById('navlist');


toggleButton.addEventListener('click', () => {
    navlist.classList.toggle('active')
})


//Gallery Seite :  wenn ich auf das Bild klicke soll ein popup erscheinen über die webseite mit Mehr text und Bild

let popup = document.getElementById("myModal");
let img = document.getElementById("popup1");

img.onclick = function () {
    popup.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

let popup2 = document.getElementById("myModal1");
