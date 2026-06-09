// =========================
// SMOOTH APPEAR ANIMATION
// =========================

const sections = document.querySelectorAll(
  ".service-card, .project-card, .journey-card, .stats-card, .skill-pill"
);

window.addEventListener("scroll", () => {

  sections.forEach((section) => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

      section.classList.add("show");

    }

  });

});




// =========================
// TYPING EFFECT
// =========================

const text = [
  "Frontend Developer",
  "UI/UX Designer",
  "Aspiring Full Stack Developer",
  "Creative Web Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){
    count = 0;
  }

  currentText = text[count];

  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;

  if(letter.length === currentText.length){

    count++;

    index = 0;

    setTimeout(type, 1500);

  } else {

    setTimeout(type, 100);

  }

})();




// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 20){

    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";

  } else {

    navbar.style.boxShadow = "none";

  }

});




// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

  button.addEventListener("click", function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripple = document.createElement("span");

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });

});
