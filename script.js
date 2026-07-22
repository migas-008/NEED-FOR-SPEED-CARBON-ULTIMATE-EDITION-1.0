// =======================
// LOADING SCREEN
// =======================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    },1200);

});

// =======================
// ANIMAÇÃO AO FAZER SCROLL
// =======================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section,.card,.gallery img").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// =======================
// MENU TRANSPARENTE
// =======================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        nav.style.background="rgba(0,0,0,.90)";

    }

    else{

        nav.style.background="rgba(0,0,0,.65)";

    }

});

// =======================
// BOTÃO DOWNLOAD
// =======================

document.querySelectorAll(".button").forEach
