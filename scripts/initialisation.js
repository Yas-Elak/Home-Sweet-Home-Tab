$(function () {

    let firstTime;

    //TODO here I clear the storge every time for testing purpose
    chrome.storage.local.clear();

    /* i Initailize the todo list, the done list and the app list the first time
    the app run, then I save them in the storage
    */
    chrome.storage.local.get("firstTime", function (result) {
        firstTime = result.firstTime;
        if (firstTime == null) {
            console.log("the firstitme");
            let toDoListContainer = `
                <div class="save-todo-list-container">
                  <div class="adder">
                    <input type="text" class="input-todo" placeholder="Add a new task to do" />
                    <span class="add-todo">+</span>
                  </div>
                  <ul class="ul-todo sortable">
                    <li>Something to do<button class="btn-delete"><img src="images/delete.png" alt="delete"></button></button></li>
                  </ul>
                  <button id="todo-size" class="get-big"></button>
                </div>
                `;
            $("#todo-list-container").html(toDoListContainer);

            let doneListContainer = `
                <div class="save-done-list-container">
                  <div class="adder">
                    <input type="text" class="input-done" placeholder="Add a new done task" />
                    <span class="add-done">+</span>
                  </div>
                  <ul class="ul-done sortable">
                    <li>You did something<button class="btn-delete"><img src="images/delete.png" alt="delete"></button></button></li>
                  </ul>
                </div>
                `;
            $("#done-list-container").html(doneListContainer);

            let appListContainer = `
                <div id="application-container">
                  <ul class="ul-tab-to-rename">
                    <li><a href="#app-tabs-1">App 1</a></li>
                    <li><a href="#app-tabs-2">App 2</a></li>
                    <li><a href="#app-tabs-3">App 3</a></li>
                    <li><a href="#app-tabs-4">App 4</a></li>
                  </ul>
                  <div id="app-tabs-1">
                    <ul class="sortable-apps">
                      <li class="ui-state-default"><img class="clickable context-menu-one" src="/images/png/addthis.png" /><p class="text-shortcut">add</p></li>
                    </ul>
                  </div>
                  <div id="app-tabs-2">
                    <ul class="sortable-apps">
                      <li class="ui-state-default"><img class="clickable context-menu-one" src="/images/png/addthis.png" /><p class="text-shortcut">add</p></li>
                      </ul>
                  </div>
                  <div id="app-tabs-3">
                    <ul class="sortable-apps">
                      <li class="ui-state-default"><img class="clickable context-menu-one" src="/images/png/addthis.png" /><p class="text-shortcut">add</p></li>
                    </ul>
                  </div>
                  <div id="app-tabs-4">
                    <ul class="sortable-apps">
                      <li class="ui-state-default"><img class="clickable context-menu-one" src="/images/png/addthis.png" /><p class="text-shortcut">add</p></li>
                    </ul>
                  </div>
                  <button id="app-size" class="get-big"></button>
               </div>
            `;
            $("#list-app-container").html(appListContainer);
            firstTime = false;
            chrome.storage.local.set({ "firstTime": firstTime });
            //then the firsttime is false and this part never run again
        }
        else {
            chrome.storage.local.get("note1", function (result) {
                tinyMCE.editors[0].setContent(result.note1);
            });
            chrome.storage.local.get("note-2", function (result) {
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
            chrome.storage.local.get("donelistcontainer", function (result) {
                $("#donelistcontainer").html(result.donelistcontainer);
            });
            chrome.storage.local.get("toDoListContainer", function (result) {
                $("#todolistcontainer").html(result.toDoListContainer);
            });
            chrome.storage.local.get("applistcontainer", function (result) {
                $("#listappcontainer").html(result.applistcontainer);
            });
        }
    });
});
