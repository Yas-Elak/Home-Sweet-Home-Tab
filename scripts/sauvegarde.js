
$(window).on("load", function (e) {
    chrome.storage.local.set({ "applistcontainer": $('#list-app-container').prop('innerHTML') });
    chrome.storage.local.get("applistcontainer", function (result) {
    });

    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(function (mutations, observer) {
        chrome.storage.local.set({ "toDoListContainer": $('#todo-list-container').prop('innerHTML') });
        chrome.storage.local.set({ "donelistcontainer": $('#done-list-container').prop('innerHTML') });
        chrome.storage.local.set({ "applistcontainer": $('#list-app-container').prop('innerHTML') });

    });
    observer.observe(document, {
        subtree: true,
        childList: true
    });

    function copy() {
    }
//-->
    //test work with enter in input
    $(".inputToDo").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            alert('You pressed enter!');
        }
    });

//test this one work well and is very clean, Here I observe the .uldone only
    var targetNodes = $(".ul-done");
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var myObserver = new MutationObserver(mutationHandler);
    var obsConfig = { childList: true, characterData: true, attributes: true };

    //--- Add a target node to the observer. Can only add one node at a time.
    targetNodes.each(function () {
        myObserver.observe(this, obsConfig);
    });


    function mutationHandler(mutationRecords) {
    }
    //-test
});
