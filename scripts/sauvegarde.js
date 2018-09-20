
$(window).on("load", function (e) {


    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(function (mutations, observer) {
        chrome.storage.local.set({ "toDoListContainer": $('#todo-list-container').prop('innerHTML') });
        chrome.storage.local.set({ "donelistcontainer": $('#done-list-container').prop('innerHTML') });
        chrome.storage.local.set({ "applistcontainer": $('#list-app-container').prop('innerHTML') });
        console.log("save");

    });
    observer.observe(document, {
        subtree: true,
        childList: true
    });

/*
//-->
    //test work with enter in input/*
    $('#notes-container iframe').contents().find('p').keypress(function (e) {
        console.log('keypressed');
    });
  $('#notes-container iframe').contents().find('p').text('dsgjfdsgdhsgj');

//test this one work well and is very clean, Here I observe the .uldone only
    var targetNodes = $("#notes-container iframe p");
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var myObserver = new MutationObserver(mutationHandler);
    var obsConfig = { childList: true, characterData: true, attributes: true };

    //--- Add a target node to the observer. Can only add one node at a time.
    targetNodes.each(function () {
        myObserver.observe(this, obsConfig);
    });
    function mutationHandler(mutationRecords) {
      console.log('ee');
    }
    //-test*/
  });
