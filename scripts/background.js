$(function () {
//this script is one of the first to run, so I Hide the containers here
//to hide the elements when they are being construct
  $(".container").hide();
  let recentlClosed;

//I know how many background I Have, so I choose a random number
let backgroundNumber = Math.floor((Math.random() * 18) + 1);
//then I apply yhe background on the body
document.body.style.background = "#D3D3D3 url(images/backgrounds/" + backgroundNumber + ".jpg) no-repeat center center fixed";

//TODO Add a way to choose the backgrouns and apply it for every session

//testing-----------------------------------------------------------------------------------------------------------------------------
/*var tabToUrl = {};

chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
      //here  get all the tab open when the newtab and put it in a array
      console.log(tab.url);
      tabToUrl[tabId] = tab.url;

      //collect all of the urls here, I will just log them instead
    });
  });
});
/*
chrome.tabs.query({currentWindow: true}, function(tabs) {
  myArray = myArray.filter( function( el ) {
      return !toRemove.includes( el );
  });
    });

chrome.tabs.query({currentWindow: true}, function(tab){
    for (var i = 0; i < tab.length; i++) {
  //  console.log(tab.url);
    };
  });
  */
/*
  let recentlyClosed = [];
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      // Note: this event is fired twice:
      // Once with `changeInfo.status` = "loading" and another time with "complete"
      //then to each update I add the url to the array
      tabToUrl[tabId] = tab.url;
  });
  chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
      console.log(tabToUrl[tabId]);
      recentlyClosed.push(tabToUrl[tabId]);
      if (recentlyClosed.length > 7){
        recentlyClosed.shift();
      }
      //then if a tab s close and it's not a new tab or undifiner, it goes in my list
      console.log(recentlyClosed)
      chrome.storage.local.set({ "tabhandler": recentlyClosed });
  });

  */


});
