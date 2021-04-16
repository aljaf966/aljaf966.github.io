console.log("hi is it working yuhhh it is")

function placeBubbles(){
  //get all of the html elements ive written, thast i know are in my index html that have that class bubble
  let bubbles = document.querySelectorAll(".bubble");
  //console.log is a friend, here we're just making sure the funciton actually works
  // i know that there are six bubbles, i want to position EACH of those bubbles in a different PLACE on the page
bubbles.forEach(function(bubble) {

    let randomHorizontal = Math.floor(Math.random() * window.innerWidth);
    let randomVertical = Math.floor(Math.random() * window.innerHeight);

    console.log(randomHorizontal, randomVertical)
    bubble.style.top=randomVertical + "px";
    bubble.style.left= randomHorizontal + "px";
})

}

document.addEventListener('keydown', addBubble);

function addBubble(event) {
  if(event.key === "b") {
  let bubbleAdder = document.createElement("div")
  bubbleAdder.classlist.add("bubble")
  document.body.appendChild(bubbleAdder);
  placeBubbles();
  } else {

  }




}






// calling the function above, leave them at the bottom of the file after code
placeBubbles();
