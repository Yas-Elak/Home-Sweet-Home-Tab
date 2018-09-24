$(window).on("load", function (e) {
  const delayOpacity = 15000;

  //when the app close it saves the opacity of the element, I don't want that so
  //so I make them transparent again before they show.
  $("#notes").css("background-color", " rgba(255, 255, 255, .2)");
  $("#sudoku").css("background-color", " rgba(255, 255, 255, .2)");
  $(".save-done-list-container").css("background-color", " rgba(255, 255, 255, .2)");
  $(".save-todo-list-container").css("background-color", " rgba(255, 255, 255, .2)");
  $("#application-container").css("background-color", " rgba(255, 255, 255, .2)");

  //having a boolean for the opacity make it possible to enter the element,
  //get out of the element and reenter the element without losing the opacity
  //the mouseleave will not trigger to fast for that
  let opacityNotes = false;
  elementOpacityHandler("#notes","",opacityNotes);
  let opacitySudoku = false;
  elementOpacityHandler("#sudoku","",opacitySudoku);
  let opacityDone = false;
  elementOpacityHandler(".save-done-list-container",".save-todo-list-container",opacityDone);
  let opacityTodo = false;
  elementOpacityHandler(".save-todo-list-container",".save-done-list-container",opacityTodo);
  let opacityApplicationContainer = false;
  elementOpacityHandler("#application-container","",opacityApplicationContainer);

  //declaration of the Function upstair
  /*
  *I want to diminue the opacity of the element who aren't in use
  * So when the mouse enter the element the opacity is getting bigger
  * if the elemnt is not used, the opacity is getting smaller to let the backgrounds
  *showing
  */
  function elementOpacityHandler(element, secondElement, opacity){
       $(element).mouseenter(function(){
         opacity = true;
         $(this).css("background-color", " rgba(255, 255, 255, .7)");
         $(secondElement).css("background-color", " rgba(255, 255, 255, .7)");
       });
       $(element).mouseleave(function(){
         opacity = false;
         $(this).stop(true, false).delay(delayOpacity)
             .queue(function (next) {
               if(!opacity){
                 $(this).css("background-color", " rgba(255, 255, 255, .2)");
                 $(secondElement).css("background-color", " rgba(255, 255, 255, .2)")
                 next();
               }
             });
       });
    };

//upstairs is the oacity of the elemnts one by one
//downstar is the opacity of all the lements together

//I have a button in the up right, if you hover it every element is hiding
//and you have a perfect vue of the background
$('#background-btn').mouseover( function (event) {
  $(".container").stop(true,true).delay(1000).fadeOut('slow');
}).mouseout( function (event) {
   $(".container").stop(true,true).fadeIn('slow');
 });

  //resize everything with the mini button at the up right of the elements
  //I can resizeEverything// I use the queue to be sur the elements to hide are
  //hiding before the element I want to go big. It is just aesthetic
  let isItBig = false;
  resizeEverything('#app-size', '#container-down', '#todo-list-container', '#done-list-container', '#list-app-container', '50%', '45vh');
  resizeEverything('#todo-size', '#container-down', '#list-app-container', '#done-list-container', '#todo-list-container', '25%', '45vh');
  resizeEverything('#notes-size', '#container-up', '#sudoku-container', '#pet-container', '#notes-container', '50%', '43vh');

  function resizeEverything(button, containerToHide, widget1, widget2, widgetWhoGoBig, width, height) {
      $(button).click(function () {
          if (!isItBig) {
              $(widget1).hide().queue(function (next) {
                  $(widget2).hide();
                  next();
              }).queue(function (next) {
                  $(containerToHide).hide()
                  next();
              }).queue(function (next) {
                  $(widgetWhoGoBig).css({ width: '100%', height: '90vh' });
                  next();
              });
              isItBig = true;
              $('#notes-container iframe').css({ height: '65vh' });
          } else {
              $(widget1).show().queue(function (next) {
                  $(widget2).show();
                  next();
              }).queue(function (next) {
                  $(containerToHide).show()
                  next();
              }).queue(function (next) {
                  $(widgetWhoGoBig).css({ 'width': width, 'height': height });
                  next();
              });
              isItBig = false;
              $('#notes-container iframe').css({ height: '97%' });

          }
      });
  }

});
