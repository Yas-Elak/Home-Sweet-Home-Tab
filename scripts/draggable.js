//$(window).on("load", function (e) { allow to run this script in the last one
//I need that because it apply on element who MUST be there before the script act
$(window).on("load", function (e) {
  //the jquery librairie allow to drag and drop in a few lines
  $('.sortable').sortable({
      connectWith: "ul",
  }).disableSelection();

  //TODO correct the bug who moves the input element when you drag an element
  //from one list to another

  //as one of the last script to run I Show the container that I Hide in
  //backgroun.js
  $(".container").show();
})
