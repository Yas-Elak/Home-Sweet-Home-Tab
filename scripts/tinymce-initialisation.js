$(window).on("load", function (e) {
    tinymce.init({
        selector: 'textarea',
        menubar: false,
        width: "97%",
        height: "97%",


        setup: function (ed) {
            ed.on('keydown', function (e) {

                //need to do the saving here because tinymct steal my textarea and then the textarea won't respond to
                //keypress event
                chrome.storage.local.set({ "note1": tinyMCE.editors[0].getContent() });
                chrome.storage.local.set({ "note2": tinyMCE.editors[1].getContent() });
                chrome.storage.local.set({ "note3": tinyMCE.editors[2].getContent() });
                chrome.storage.local.set({ "note4": tinyMCE.editors[3].getContent() });
                chrome.storage.local.set({ "note5": tinyMCE.editors[4].getContent() });
                chrome.storage.local.set({ "note6": tinyMCE.editors[5].getContent() });
            });
        }
    });


});
