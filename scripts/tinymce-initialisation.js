$(window).on("load", function (e) {
    tinymce.init({
        selector: 'textarea',
        menubar: false,
        width: "97%",
        height: "97%",
        setup: function (ed) {
            ed.on('keydown', function (e) {
                chrome.storage.local.set({ "note1": tinyMCE.editors[0].getContent() });
                chrome.storage.local.set({ "note2": tinyMCE.editors[1].getContent() });
                chrome.storage.local.set({ "note3": tinyMCE.editors[2].getContent() });
                chrome.storage.local.set({ "note4": tinyMCE.editors[3].getContent() });
                chrome.storage.local.set({ "note5": tinyMCE.editors[4].getContent() });
                chrome.storage.local.set({ "note6": tinyMCE.editors[5].getContent() });
            });
        }
    });
<<<<<<< HEAD
=======
    console.log('2');
>>>>>>> a8140ac6d4681f8301e5f6e5db5a5ea8e430d68e
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
