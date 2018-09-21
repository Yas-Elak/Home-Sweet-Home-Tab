$(window).on("load", function (e) {
  $("#notes").css("background-color", " rgba(255, 255, 255, .2)");
  $("#sudoku").css("background-color", " rgba(255, 255, 255, .2)");
  $(".save-done-list-container").css("background-color", " rgba(255, 255, 255, .2)");
  $(".save-todo-list-container").css("background-color", " rgba(255, 255, 255, .2)");
  $("#application-container").css("background-color", " rgba(255, 255, 255, .2)");



  let delayOpacity = 12500;
  let opacityNotes = false;
  $("#notes").mouseenter(function(){
    opacityNotes = true;
    $(this).css("background-color", " rgba(255, 255, 255, .7)");
    console.log(opacityNotes);
  });
  $("#notes").mouseleave(function(){
    opacityNotes = false;
    console.log(opacityNotes);
    $(this).stop(true, false).delay(delayOpacity)
        .queue(function (next) {
          if(!opacityNotes){
            $(this).css("background-color", " rgba(255, 255, 255, .2)")
            next();
          }
        });
    });

  let opacitySudoku = false;
    $("#sudoku").mouseenter(function(){
      opacitySudoku = true;
      $(this).css("background-color", " rgba(255, 255, 255, .7)");
    });
    $("#sudoku").mouseleave(function(){
      opacitySudoku = false;
      $(this).stop(true, false).delay(delayOpacity)
          .queue(function (next) {
            if(!opacitySudoku){
              $(this).css("background-color", " rgba(255, 255, 255, .2)")
              next();
            }
          });
      });

  let opacityDone = false;
    $(".save-done-list-container").mouseenter(function(){
      opacityDone = true;
      $(this).css("background-color", " rgba(255, 255, 255, .7)");
      $(".save-todo-list-container").css("background-color", " rgba(255, 255, 255, .7)");
    });
    $(".save-done-list-container").mouseleave(function(){
      opacityDone = false;
      $(this).stop(true, false).delay(delayOpacity)
          .queue(function (next) {
            if(!opacityDone){
              $(this).css("background-color", " rgba(255, 255, 255, .2)")
              $(".save-todo-list-container").css("background-color", " rgba(255, 255, 255, .2)")
              next();
            }
          });
      });

  let opacityTodo = false;
    $(".save-todo-list-container").mouseenter(function(){
      opacityTodo = true;
      $(this).css("background-color", " rgba(255, 255, 255, .7)");
      $(".save-done-list-container").css("background-color", " rgba(255, 255, 255, .7)");
    });
    $(".save-todo-list-container").mouseleave(function(){
      opacityTodo = false;
      $(this).stop(true, false).delay(delayOpacity)
          .queue(function (next) {
            if(!opacityTodo){
              $(this).css("background-color", " rgba(255, 255, 255, .2)")
              $(".save-done-list-container").css("background-color", " rgba(255, 255, 255, .2)")
              next();
            }
          });
      });

    $("#application-container").hover(function () {
        $(this).css("background-color", " rgba(255, 255, 255, .7)");
    }, function () {
        $(this).delay(delayOpacity)
            .queue(function (next) {
                $(this).css("background-color", " rgba(255, 255, 255, .2)")
                next();
            });
    });
    let opacityApp = false;
      $("#application-container").mouseenter(function(){
        opacityApp = true;
        $(this).css("background-color", " rgba(255, 255, 255, .7)");
      });
      $("#application-container").mouseleave(function(){
        opacityApp = false;
        $(this).stop(true, false).delay(delayOpacity)
            .queue(function (next) {
              if(!opacityApp){
                $(this).css("background-color", " rgba(255, 255, 255, .2)")
                next();
              }
            });
        });


$('#background-btn').mouseover( function (event) {
  $(".container").stop(true,true).delay(2000).fadeOut('slow');
}).mouseout( function (event) {
   $(".container").stop(true,true).fadeIn('slow');
 });

    //resize everything
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
