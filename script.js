const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
const text =
"Aspiring Full Stack Developer";

const typingText =
document.getElementById("typing-text");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typingText.innerHTML +=
        text.charAt(i);

        i++;

        setTimeout(typeWriter,70);
    }
}

typeWriter();
const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop;

        if(scrollY >= sectionTop - 150){

            current =
            section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
        link.getAttribute("href")
        ===
        `#${current}`
        ){
            link.classList.add("active");
        }
    });

});
const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("navbar-scroll");

    }

    else{

        navbar.classList.remove("navbar-scroll");
    }

});
const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

    });

}
