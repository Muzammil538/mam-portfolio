// navbar
const menuIcon = document.querySelector(".menu-toggle i");
const navLinks = document.querySelector(".nav-menu-desk");
menuIcon.addEventListener("click", ()=>{
  navLinks.classList.toggle("active");
  if(menuIcon.classList.contains("bi-list")){
    menuIcon.classList.remove("bi-list")
    menuIcon.classList.add("bi-x-lg")
  }else{
    menuIcon.classList.remove("bi-x-lg")
    menuIcon.classList.add("bi-list")
  }
});

// banner 
const bannerText = document.querySelector("#txt");
const bannerImg = document.querySelector(".banner-img");

const bannerInfo = [
  {
    txt: "A Web Designer",
    img: '../Images/web-designer.jpg'
  },
  {
    txt: "A Student",
    img: '../Images/student.jpg'
  },
  {
    txt: "A Python Programmer",
    img: '../Images/python-programmer.jpg'
  },
  {
    txt: "A Tutor",
    img: '../Images/online-tutor.jpg'
  },
];

let curntIndex = 0;
const durationTime = 3000;

function updateInfo() {
  let bdata = bannerInfo[curntIndex];
  bannerText.textContent = bdata.txt;
  bannerImg.setAttribute("style", `background-image:url(${bdata.img})`);
  curntIndex++;
  if(curntIndex >= bannerInfo.length){
    curntIndex = 0;
  }
};
updateInfo();
setInterval(updateInfo , durationTime);

// Pop Div 
const popDivs = document.querySelectorAll(".pop-div");
const boxViewer = document.querySelector(".box-viewer")

for (let i = 0; i < popDivs.length; i++) {
  const ele = popDivs[i];
  ele.addEventListener("click", ()=>{
    boxViewer.classList.add("active");
  });
  
}

function closePop(params) {
  boxViewer.classList.remove("active")
}
