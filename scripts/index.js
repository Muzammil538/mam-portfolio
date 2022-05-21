// This is the menu functionality
const menuIcon = document.querySelector("#menuIcon"); // Menu Icon
const Header = document.querySelector("header");
const Nav = document.querySelector("nav");

menuIcon.addEventListener("click", ()=>{
    Header.classList.toggle("active");
    Nav.classList.toggle("active");
    if(Header.classList == "active"){
        menuIcon.classList.remove("bi-list");
        menuIcon.classList.add("bi-x");
    }else{
        menuIcon.classList.add("bi-list");
        menuIcon.classList.remove("bi-x");
    }
})
