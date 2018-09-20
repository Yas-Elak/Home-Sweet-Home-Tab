
 $(function() {
    $.contextMenu({
        selector: '.context-menu-one',
        callback: function(key, options) {
            if(key == "edit"){
              console.log('e');
              //un dialog ou un iframe pour éditer le logo, le lien, et le titre
            }else{
                $(this).closest('li').remove();
              }
        },
        items: {
          //no edit yet  "edit": {name: "Edit", icon: "fa-edit"},
            "delete": {name: "Delete", icon: "fa-trash"},
        }
    });

    $('.context-menu-one').on('click', function(e){
        console.log('clicked', this)
    })
});
