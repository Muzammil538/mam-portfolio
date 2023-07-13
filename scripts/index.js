const header = document.querySelector("#headerbanner");

header.addEventListener("mouseover", ()=>{
  const homelink = document.querySelector("#homelink");
  homelink.classList.add("active")
})