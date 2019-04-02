/*jshint esversion: 6 */


// We first need to listen for the scroll event on the page
// Next, when our browser reaches a certain distance form the top of the page we need to change the body elements background color

const bodyTag = document.querySelector("body");
const h1Tag = document.querySelector("h1");
document.addEventListener("scroll", function() {

  //do something when the h1 is clicked//
  //bodyTag.innerHTML = "h1 has been clicked!";
  bodyTag.style.fontSize = "50px";
  bodyTag.style.backgroundColor = "Green";

});