// navbar
const menuIcon = document.querySelector("#menuicon");
const navLinks = document.querySelector(".navbar-links");
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