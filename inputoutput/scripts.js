console.log("hello")

function placeSticky(){
  //get all of the html elements ive written, thast i know are in my index html that have that class bubble
  let allstickies = document.querySelectorAll(".sticky");

sticky.forEach(function(sticky) {

  let randomHorizontal = Math.floor(Math.random() * window.innerWidth);
    let randomVertical = Math.floor(Math.random() * window.innerHeight);


    stickies.style.top=randomVertical + "px";
    stickies.style.left= randomHorizontal + "px";

})
}



document.addEventListener('keydown', addSticky);

function addSticky(event) {
  if(event.key === "Space character") {
  let stickyAdder = document.createElement("div")
  stickyAdder.classlist.add("sticky")
  document.body.appendChild(stickyAdder);
  placeSticky();
  } else {

  }
}
