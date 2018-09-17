$(window).on("load", function (e) {
    $('.sortable').sortable({
        connectWith: "ul",
    }).disableSelection();

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
    $(document).on('click', '.btn-delete', function () {
        $(this).parent().remove();
    });

    $(".container").show();

 })
