$(window).on("load", function (e) {
  //the jquery librairie allow to drag and drop in a few lines
  $('.sortable').sortable({
      connectWith: "ul",
  }).disableSelection();

 //On click of the "+" in the todo notes I add elements
  $(".add-done").click(function () {
      var newItem = $(".input-done").val();
      if (newItem != "") {
          $(".ul-done").append('<li>' + newItem + '<button class="btn-delete"><img src="images/delete.png" alt="delete"></button></li>');
          $(".input-done").val("")
          $(".input-done").attr("placeholder", "Add a new task");
      };
  });
  $(".add-todo").click(function () {
      var newItem = $(".input-todo").val();
      if (newItem != "") {
          $(".ul-todo").append('<li>' + newItem + '<button class="btn-delete"><img src="images/delete.png" alt="delete"></button></li>');
          $(".input-todo").val("")
          $(".input-todo").attr("placeholder", "Add a new task");
      };
  });
  //and delete them
  $(document).on('click', '.btn-delete', function () {
      $(this).parent().remove();
  });

})
