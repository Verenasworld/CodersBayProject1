
//Home und Galleryseite navigation , mobile burger on click event klappt sich die navigation auf
const toggleButton = document.getElementById('toggle');
const navlist = document.getElementById('navlist');


toggleButton.addEventListener('click', () => {
    navlist.classList.toggle('active')
})

// hier ensteht eine funktion für das Formular beim cklick auf senden soll eine Anzeige nur einmal vorerst erscheinen das es funktioniert hat in späterer Folge / eine if else
function infobox(){
    let submitbutton = document.getElementById("btn-submit").innerHTML= "deine nachricht wurde erfolgreich gesendet ";

}




//test
//Gallery Seite :  wenn ich auf das Bild klicke soll ein popup erscheinen über die webseite mit Mehr text und Bild

let popup = document.getElementById("myModal");
// let img = document.getElementById("popup1");

// img.onclick = function () {
//      popup.style.display = "block";
//
// }
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

