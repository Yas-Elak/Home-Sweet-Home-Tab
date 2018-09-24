$(function () {
//this script is one of the first to run, so I Hide the containers here
//to hide the elements when they are being construct
  $(".container").hide();
  let recentlClosed;

//I know how many background I Have, so I choose a random number
let backgroundNumber = Math.floor((Math.random() * 18) + 1);
//then I apply yhe background on the body
document.body.style.background = "#D3D3D3 url(images/backgrounds/" + backgroundNumber + ".jpg) no-repeat center center fixed";

//TODO Add a way to choose the backgrouns and apply it for every session


});
