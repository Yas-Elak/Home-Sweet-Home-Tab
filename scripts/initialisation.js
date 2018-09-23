$(function () {
  //here is the script who will start the app, it will add the container, empty
  //the first time the app run and with the change the users made the next time


    //righthere I clear the storge every time for debuging purpose
    chrome.storage.local.clear();

    /* i Initailize the todo list, the done list and the app list the first time
    the app run, then I save them in the storage
    */

    //the chrome.storage.local.get is run by javascript in last because of the
    //call back, So i Must do everithing in it.
    //if not i will apply some change on element who are not there yet because
    // chrome.storage.local.get didn't trigger yet
    let firstTime;
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
                      <li class="ui-state-default"><img class="clickable" src="/images/png/addthis.png" /><p class="text-shortcut">add</p></li>
                    </ul>
                  </div>
                  <div id="app-tabs-2">
                    <ul class="sortable-apps">
                      <li class="ui-state-default"><img class="clickable" src="/images/png/addthis.png" /><p class="text-shortcut">add</p></li>
                      </ul>
                  </div>
                  <div id="app-tabs-3">
                    <ul class="sortable-apps">
                      <li class="ui-state-default"><img class="clickable" src="/images/png/addthis.png" /><p class="text-shortcut">add</p></li>
                    </ul>
                  </div>
                  <div id="app-tabs-4">
                    <ul class="sortable-apps">
                      <li class="ui-state-default"><img class="clickable" src="/images/png/addthis.png" /><p class="text-shortcut">add</p></li>
                    </ul>
                  </div>
                  <button id="app-size" class="get-big"></button>
               </div>
            `;
            $("#list-app-container").html(appListContainer);
            firstTime = false;

            // i save everything just in case the user don't use something
            //who can trigger the save
            chrome.storage.local.set({ "firstTime": firstTime });
            chrome.storage.local.set({ "toDoListContainer": $('#todo-list-container').prop('innerHTML') });
            chrome.storage.local.set({ "donelistcontainer": $('#done-list-container').prop('innerHTML') });
            chrome.storage.local.set({ "applistcontainer": $('#list-app-container').prop('innerHTML') });
            chrome.storage.local.set({ "note1": "" });
            chrome.storage.local.set({ "note2": "" });
            chrome.storage.local.set({ "note3": "" });
            chrome.storage.local.set({ "note4": "" });
            chrome.storage.local.set({ "note5": "" });
            chrome.storage.local.set({ "note6": "" });
            chrome.storage.local.set({ "tabhandler": [] });

            //then the firsttime is false and this part never run again
        }
        else {
            chrome.storage.local.get("donelistcontainer", function (result) {
                $("#done-list-container").html(result.donelistcontainer);
            });
            chrome.storage.local.get("toDoListContainer", function (result) {
                $("#todo-list-container").html(result.toDoListContainer);
            });
            chrome.storage.local.get("applistcontainer", function (result) {
                $("#list-app-container").html(result.applistcontainer);
            });

        }
    });
});
