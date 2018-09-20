$(window).on("load", function (e) {
    $("#notes-container").tabs();
    chrome.storage.local.set({ "toDoListContainer": $('#todo-list-container').prop('innerHTML') });
    chrome.storage.local.set({ "donelistcontainer": $('#done-list-container').prop('innerHTML') });
    chrome.storage.local.set({ "notesContainer": $('#notes-container').prop('innerHTML') });
    console.log("note-tabs")
});
