const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
})

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class","ri-menu-line");
})

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollRevealOption().reveal(".container__left h1",{
    ...scrollRevealOption,
});

ScrollRevealOption().reveal(".container__left .container__btn",{
    ...scrollRevealOption,
    delay:500,
});

ScrollRevealOption().reveal(".container__right h4",{
    ...scrollRevealOption,
    delay:2000,
});

ScrollRevealOption().reveal(".container__right h2",{
    ...scrollRevealOption,
    delay:2500,
});

ScrollRevealOption().reveal(".container__right h3",{
    ...scrollRevealOption,
    delay:3000,
});

ScrollRevealOption().reveal(".container__right p",{
    ...scrollRevealOption,
    delay:3500,
});

ScrollRevealOption().reveal(".container__right .tent-1",{
    duration:1000,
    delay:4000,
});

ScrollRevealOption().reveal(".container__right .tent-2",{
    duration:1000,
    delay:4000,
});

ScrollRevealOption().reveal(".location",{
    ...scrollRevealOption,
    origin:"left",
    delay:5000,
});

ScrollRevealOption().reveal(".socials span",{
    ...scrollRevealOption,
    origin:"top",
    delay:5500,
    interval:500,
});
