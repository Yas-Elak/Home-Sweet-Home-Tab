$(window).on("load", function (e) {

   $("#notes").hover(function () {
       $(this).css("background-color", " rgba(255, 255, 255, .7)");
   }, function () {
           $(this).delay(10000)
               .queue(function (next) {
                   $(this).css("background-color", " rgba(255, 255, 255, .2)")
                   next();
               });
       });
    $("#sudoku").hover(function () {
        $(this).css("background-color", " rgba(255, 255, 255, .7)");
    }, function () {
        $(this).delay(10000)
            .queue(function (next) {
                $(this).css("background-color", " rgba(255, 255, 255, .2)")
                next();
            });
        });
    $(".save-done-list-container").hover(function () {
        $(this).css("background-color", " rgba(255, 255, 255, .7)");
    }, function () {
        $(this).delay(10000)
            .queue(function (next) {
                $(this).css("background-color", " rgba(255, 255, 255, .2)")
                next();
            });
        });
    $(".save-done-list-container").hover(function () {
        $(".save-todo-list-container").css("background-color", " rgba(255, 255, 255, .7)");
    }, function () {
        $(".save-todo-list-container").delay(10000)
            .queue(function (next) {
                $(".save-todo-list-container").css("background-color", " rgba(255, 255, 255, .2)")
                next();
            });
    });
    $(".save-todo-list-container").hover(function () {
        $(this).css("background-color", " rgba(255, 255, 255, .7)");
    }, function () {
        $(this).delay(10000)
            .queue(function (next) {
                $(this).css("background-color", " rgba(255, 255, 255, .2)")
                next();
            });
        });
    $(".save-todo-list-container").hover(function () {
        $(".save-done-list-container").css("background-color", " rgba(255, 255, 255, .7)");
    }, function () {
        $(".save-done-list-container").delay(10000)
            .queue(function (next) {
                $(".save-done-list-container").css("background-color", " rgba(255, 255, 255, .2)");
                next();
            });
        });
    $("#application-container").hover(function () {
        $(this).css("background-color", " rgba(255, 255, 255, .7)");
    }, function () {
        $(this).delay(10000)
            .queue(function (next) {
                $(this).css("background-color", " rgba(255, 255, 255, .2)")
                next();
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
