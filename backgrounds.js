const bodyBg = document.querySelector("body");
const imgs = ["1.jpg","2.jpg","3.jpg"];
const randomImg = imgs[Math.floor(Math.random()*imgs.length)]


bodyBg.style.backgroundImage = "url(' ${randomImg}')";
