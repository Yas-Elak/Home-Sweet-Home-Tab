$(window).on("load", function (e) {
  //these little lines make everything sortable :)
    $(function () {
        $(".sortable-apps").sortable();
        $(".sortable-apps").disableSelection();
    });
    //this one make the tab possible
    $(function () {
        $("#list-app-container").tabs();
    });

    //need a global var to reuse in several function
    let idTab;

    //on double click I open a dialog to rename the tab
    $(".ul-tab-to-rename").on("dblclick", "li a", function (event) {
        $("#dialog-rename-tabs").dialog("open");
        idTab = this.id;
    });

    //the dialog
    $("#dialog-rename-tabs").dialog({
        autoOpen: false,
        show: {
            effect: "drop",
            duration: 500
        },
        hide: {
            effect: "drop",
            duration: 500
        }
    });

    //and the save button in the dialog
    $("#save-tab-name").on("click", function () {
        let newTabName = $("[name='new-tab-name']").val();
        $("#"+idTab).text(newTabName);
        $('#dialog-rename-tabs').dialog('close');
    });
});
