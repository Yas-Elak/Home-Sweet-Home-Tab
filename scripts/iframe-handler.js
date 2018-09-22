$(window).on("load", function (e) {


//map of the shortcut available inside the extention with the name and link
//to keep updated with the new elements
mapOfApps = new Map();
mapOfApps.set("addthis", ["images/png/addthis.png", "#"]);
mapOfApps.set("Amazon", ["images/png/amazon.png", "www.amazon.com"]);
mapOfApps.set("Bing", ["images/png/bing.png", "www.bing.com"]);
mapOfApps.set("DeviantArt", ["images/png/deviantart.png", "www.devianart.com"]);
mapOfApps.set("Dropbox", ["images/png/dropbox.png", "www.dropbox.com"]);
mapOfApps.set("Ebay", ["images/png/ebay.png", "www.ebay.com"]);

mapOfApps.set("Evernote", ["images/png/evernote.png", "www.evernote.com"]);
mapOfApps.set("Facebook", ["images/png/facebook.png", "www.facebook.com"]);
mapOfApps.set("Flickr", ["images/png/flickr.png", "www.flickr.com"]);
mapOfApps.set("Gmail", ["images/png/gmail.png", "www.gmail.com"]);
mapOfApps.set("Google-Maps", ["images/png/google-maps.png", "https://www.google.com/maps"]);
mapOfApps.set("Imgur", ["images/png/imgur.png", "www.imgur.com"]);

mapOfApps.set("Instagram", ["images/png/instagram.png", "www.instagram.com"]);

mapOfApps.set("Linkedin", ["images/png/linkedin.png", "www.linkedin.com"]);
mapOfApps.set("Netflix", ["images/png/netflix.png", "www.netflix.com"]);
mapOfApps.set("Onedrive", ["images/png/onedrive.png", "https://onedrive.live.com/?"]);
mapOfApps.set("Outlook", ["images/png/outlook.png", "www.outlook.com"]);

mapOfApps.set("Pinterest", ["images/png/pinterest.png", "www.pinterest.com"]);
mapOfApps.set("Reddit", ["images/png/reddit.png", "www.reddit.com"]);
mapOfApps.set("Soundcloud", ["images/png/soundcloud.png", "www.soundcloud.com"]);
mapOfApps.set("Spotify", ["images/png/spotify.png", "www.spotify.com"]);

mapOfApps.set("Tumblr", ["images/png/tumblr.png", "www.tumblr.com"]);
mapOfApps.set("Twitch", ["images/png/twitch.png", "www.twitch.com"]);

mapOfApps.set("Twitter", ["images/png/twitter.png", "www.twitter.com"]);
mapOfApps.set("Udemy", ["images/png/udemy.png", "www.udemy.com"]);

mapOfApps.set("Wikipedia", ["images/png/wikipedia.png", "www.wikipedia.com"]);
mapOfApps.set("Youtube", ["images/png/youtube.png", "www.youtube.com"]);

let parentIdOfClickedImage;
let nameValue;
let animationFinished = false;

//when i click on my add button of the app, I get the tab where it is
//then the Iframe comes with an animation but I want to knwo when the animation
//is finished to know when i can close the iframe. That is why I have a promise
$(".clickable").on("click", function () {
  parentIdOfClickedImage = this.parentElement.parentElement
  $("#app-iframe").show();
  $("#app-iframe").animate(
    {"right": "0"},
    { duration: 1250, easing: 'easeOutBounce' })
    .promise().done(function () {
     animationFinished = true;
   });
});
  //to hide the iframe I click on the container of my principal page
  $(".container").on("click", function(){
    if(animationFinished == true){
      $("#app-iframe").animate({"right": "-40%"},
      { duration: 1250, easing: 'easeOutBounce' })
      .promise().done(function () {
          $("#app-iframe").hide();
      });
        animationFinished = false;
    }
  });

  //to get an element inside the iframe I need to use finished
  //tis one is for the element already existing in the extention
  $('#app-iframe').contents().find('.add-button').click(function(){
    //I get the name in the same "li"
    nameValue = $(this).closest('th').find("p").text();
    //and append the new app/shortcut to my list. I know wiche one because the
    //name is the key of my map
   $(parentIdOfClickedImage).append('<li class="ui-state-default ui-sortable-handle context-menu-one btn btn-neutral"><a href="https:/' + mapOfApps.get(nameValue)[1] + '"><img src="' + mapOfApps.get(nameValue)[0] + '" class="application" /><a/><p class="text-shortcut">' + nameValue + '</p></li>');
  });

//for the upload of shortcut, it's not efficient to get every element and
// act on them in the I iframe from here
//so before I had a "p" invisible that I fill with the code I need to get. but this must be
//done in the script of the iframe
  $('#app-iframe').contents().find("#submit-btn").click(function(){
    $(parentIdOfClickedImage).append($('#app-iframe').contents().find("#value-to-get").html());
  });

});
