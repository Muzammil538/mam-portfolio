const popCerti = document.querySelector("#pop-certi");
const certis = document.querySelectorAll(".certi-box");
const ele = document.querySelector("#pop-certi h3")
for(let a=0; a<certis.length; a++){
    certis[a].addEventListener("click", ()=>{
        popCerti.showModal();
    })
}
ele.addEventListener("click", ()=>{
    popCerti.open = false;
});

