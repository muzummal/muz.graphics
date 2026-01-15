var text = ["design wizard", "technical artist", "problem solver"];
var counter = 0;
var elem = document.getElementById("adj-noun");
var inst = setInterval(changeTitle, 5000);



function changeTitle() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter =0;
    }
}

window.addEventListener("load", function () {
            baguetteBox.run(".gallery", {
              captions: false,
              buttons: "auto",
              animation: "fadeIn",
            });
})