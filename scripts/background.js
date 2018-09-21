$(function () {

//I know how many background I Have, so I choose a random number
$(".container").hide();

let backgroundNumber = Math.floor((Math.random() * 18) + 1);

//then I apply yhe background on the body
document.body.style.background = "#D3D3D3 url(images/backgrounds/" + backgroundNumber + ".jpg) no-repeat center center fixed";



chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
      //collect all of the urls here, I will just log them instead
      console.log(tab.url);
    });
  });
});
chrome.tabs.query({currentWindow: true}, function(tabs) {
  console.log('Tab ID: ');

    tabs.forEach(function(tab) {
        console.log('Tab ID: ', tab.url);
    });
});
chrome.tabs.query({currentWindow: true}, function(tab){
    for (var i = 0; i < tab.length; i++) {
        console.log(tab[i].url);
    };
  });
});
