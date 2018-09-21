$(window).on("load", function (e) {
    tinymce.init({
        selector: 'textarea',
        menubar: false,
        width: "97%",
        height: "97%",
        setup: function (ed) {
            ed.on('keydown', function (e) {
                //on key done I save the notes
                chrome.storage.local.set({ "note1": tinyMCE.editors[0].getContent() });
                chrome.storage.local.set({ "note2": tinyMCE.editors[1].getContent() });
                chrome.storage.local.set({ "note3": tinyMCE.editors[2].getContent() });
                chrome.storage.local.set({ "note4": tinyMCE.editors[3].getContent() });
                chrome.storage.local.set({ "note5": tinyMCE.editors[4].getContent() });
                chrome.storage.local.set({ "note6": tinyMCE.editors[5].getContent() });
            });
        }
    });
    //when this is initalised I load the content in the not
    //the key notex already exist because i put it in the inisialisation.js
    //I do this here because the TinyMce must exist before i apply changement on interval
    //If i do that in the initialisation.js it will glitch because the element
    // doensn't exist yet
    chrome.storage.local.get("note1", function (result) {
        tinyMCE.editors[0].setContent(result.note1);
    });
    chrome.storage.local.get("note2", function (result) {
        tinyMCE.editors[1].setContent(result.note2);
    });
    chrome.storage.local.get("note3", function (result) {
        tinyMCE.editors[2].setContent(result.note3);
    });
    chrome.storage.local.get("note4", function (result) {
        tinyMCE.editors[3].setContent(result.note4);
    });
    chrome.storage.local.get("note5", function (result) {
        tinyMCE.editors[4].setContent(result.note5);
    });
    chrome.storage.local.get("note6", function (result) {
        tinyMCE.editors[5].setContent(result.note6);
    });



});
