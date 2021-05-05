console.log("hello")

function placeSticky(){
  //get all of the html elements ive written, thast i know are in my index html that have that class bubble
  let allstickies = document.querySelectorAll(".sticky");

  allstickies.forEach(function(sticky) {
    console.log(sticky)
    let randomHorizontal = Math.floor(Math.random() * window.innerWidth);
      let randomVertical = Math.floor(Math.random() * window.innerHeight);


      sticky.style.top=randomVertical + "px";
      sticky.style.left= randomHorizontal + "px";

  })
}
let imageArray=[
"images/sticky1.png",
"images/sticky2.png",
"images/sticky3.png",
"images/sticky4.png",
"images/sticky5.png",
"images/sticky6.png",
"images/sticky7.png",
"images/sticky8.png",
"images/sticky9.png",
"images/sticky10.png",
"images/sticky11.png",
"images/sticky12.png",
"images/sticky13.png",
"images/sticky15.png",
"images/sticky16.png",
"images/sticky17.png",
];
document.addEventListener('keydown', addSticky);
function addSticky(event) {
  if(event.code === "Space") {
   console.log("space bar clicked!");
let randomSticky = Math.floor(Math.random() * imageArray.length);
  let stickyAdder = document.createElement("div");
  stickyAdder.classList.add("sticky");
let stickyImage = document.createElement("img");
stickyImage.src=imageArray[randomSticky]
  stickyAdder.appendChild(stickyImage);
  stickyAdder.style.display="block";
  document.body.appendChild(stickyAdder);
  placeSticky();
  } else {
    console.log("key pressed, not spacebar");
  }
}
