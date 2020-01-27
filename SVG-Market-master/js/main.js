//// this is a self-invoking anonymous function (IIFE/module)

(() => {
  // print("some message");
  console.log("Hello from JavaScript");

  // find the button element on the page by its ID with JavaScript
  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
      svgImage = document.querySelector("#svgImage");

  // changes the heading text
  function changeText() {
    theHeading.textContent = "Hope you enjoy! Come again soon!";
  }

  function toggleSelected() {
    debugger;
     this.classList.toggle('selected');
  }

  // log the id of the svg to the console when a user hovers on it
  function logSVG() {
    console.log(this.id);
  }

  theButton.addEventListener("click", changeText);
  svgImage.addEventListener("mouseover", logSVG);
  svgImage.addEventListener("click", toggleSelected);
  //document.querySelector('h1').textContent = "Hello from the console";

   const    svgImg1 = document.querySelector('#svgImg1'),
            svgImg2 = document.querySelector('#svgImg2'),
            svgImg3 = document.querySelector('#svgImg3'),
            svgImg4 = document.querySelector('#svgImg4'),
            svgImg5 = document.querySelector('#svgImg5'),
            svgImg6 = document.querySelector('#svgImg6'),
            svgImg7 = document.querySelector('#svgImg7'),
            svgImg8 = document.querySelector('#svgImg8'),
            svgImg9 = document.querySelector('#svgImg9'),
            svgImg10 = document.querySelector('#svgImg10');

    function logoSVG() {
        this.classList.toggle("selected");

    svgImg1.addEventListener("click", logoSVG);
    svgImg2.addEventListener("click", logoSVG);
    svgImg3.addEventListener("click", logoSVG);
    svgImg4.addEventListener("click", logoSVG);
    svgImg5.addEventListener("click", logoSVG);
    svgImg6.addEventListener("click", logoSVG);
    svgImg7.addEventListener("click", logoSVG);
    svgImg8.addEventListener("click", logoSVG);
    svgImg9.addEventListener("click", logoSVG);
    svgImg10.addEventListener("click", logoSVG);
 }

})();
