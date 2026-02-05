//title change
var text = ["design wizard", "technical artist", "problem solver"];
var counter = 0;
var elem = document.getElementById("adj-noun");
var inst = setInterval(changeTitle, 5000);



function changeTitle() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}

//gallary
window.addEventListener("load", function () {
    baguetteBox.run(".gallery");
});

//animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal')
    .forEach(el => observer.observe(el));