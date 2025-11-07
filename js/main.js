const eyes = document.querySelector("#eyes");
const feet = document.querySelector("#feet");
const hands = document.querySelector("#hands");

// Named event handlers for hotspots (figure 3)
function clickEyes() {
	console.log("Toggling hotspot: eyes");
  	eyes.style.opacity = "0";
}

function hoverEnterEyes() {
  	eyes.style.opacity = "0.5";
}
function hoverLeaveEyes() {
  	eyes.style.opacity = "0.0";
}


eyes.addEventListener("click", clickEyes);
eyes.addEventListener("mouseenter", hoverEnterEyes);
eyes.addEventListener("mouseleave", hoverLeaveEyes);
hands.addEventListener("click", clickHands);
feet.addEventListener("click", clickFeet);