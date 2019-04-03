/*jshint esversion: 6 */


// We first need to listen for the scroll event on the page
// Next, when our browser reaches a certain distance form the top of the page we need to change the body elements background color

const bodyTag = document.querySelector("body");
document.addEventListener("scroll", function() {

  //do something when the h1 is clicked//
  //bodyTag.innerHTML = "h1 has been clicked!";
  //bodyTag.style.fontSize = "50px";
  //bodyTag.style.backgroundColor = "Green";


  console.log("Page has been scrolled! Woooo!");

  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  if (distanceFromTop > 1000) {
    console.log("More than 1000 pixels");
    //bodyTag.style.backgroundColor = "red";
    bodyTag.classList.add("brogue-active");
  } else {
    //console.log("Less than 1000 pixels");
    //bodyTag.style.backgroundColor = "#f5f5f5";
    bodyTag.classList.remove("brogue-active");

  }

  if (distanceFromTop > 4400) {
    console.log("More than 4400 pixels");
    //bodyTag.style.backgroundColor = "red";
    bodyTag.classList.add("stationary-active");
  } else {
    //console.log("Less than 1000 pixels");
    //bodyTag.style.backgroundColor = "#f5f5f5";
    bodyTag.classList.remove("stationary-active");

  }

});


const images = document.querySelectorAll("section img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

console.log(images);
images.forEach(image => {

  image.addEventListener("click", function() {

    console.log("image clicked!");
    lightbox.classList.add("fadeIn");

    let imageSrc = this.getAttribute("src");
    console.log(imageSrc);
    lightboxImage.setAttribute("src", imageSrc);
  });

});

lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn");

});