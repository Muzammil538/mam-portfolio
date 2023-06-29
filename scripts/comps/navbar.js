const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelector(".nav-links");

navMenu.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
    if(navMenu.className == "bi bi-list"){
        navMenu.classList.remove("bi-list");
        navMenu.classList.add("bi-x-lg")
    }else{
        navMenu.classList.remove("bi-x-lg")
        navMenu.classList.add("bi-list");
    }
});