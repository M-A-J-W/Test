// Current rotation angle in degrees
let angle = 0;

// Rotate the heading by 45° on each click
function rotateH1() {
  angle += 45; // increment angle
  document.getElementById("headline").style.transform = `rotate(${angle}deg)`;
}