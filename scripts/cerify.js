const popCerti = document.querySelector("#certi-view");
const closeBtn = document.querySelector("#close");
const certiBoxes = document.querySelectorAll(".certi-box");
const viewTitle = document.querySelector("#view-title");
const certiTitle = document.querySelectorAll(".certi-title");
const viewImage = document.querySelector("#view-img");
const certiImage = document.querySelectorAll(".certi-img");


for(let i=0; i< certiBoxes.length; i++){
  certiBoxes[i].addEventListener("click", ()=>{
    popCerti.classList.add("active");
    viewTitle.innerHTML = certiTitle[i].innerHTML;
    viewImage.setAttribute('src',certiImage[i].getAttribute('src'));
    console.log(certiImage[i].getAttribute('src'))
  });
}

closeBtn.addEventListener("click", ()=>{
  popCerti.classList.remove("active")
});
