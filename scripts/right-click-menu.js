
 $(function() {
    $.contextMenu({
        selector: '.context-menu-one',
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m);
        },
        items: {
            "edit": {name: "Edit", icon: "fa-edit"},
            "delete": {name: "Delete", icon: "fa-trash"},
        }
    });

    $('.context-menu-one').on('click', function(e){
        console.log('clicked', this);
    })
});
