$(window).on("load", function (e) {

let parentIdOfClickedImage;
let nameValue;
let animationFinished = false;

mapOfApps = new Map();
mapOfApps.set("addthis", ["images///png/addthis.png", "#"]);
mapOfApps.set("Amazon", ["images///png/amazon.png", "www.amazon.com"]);
mapOfApps.set("Bebo", ["images///png/bebo.png", "www.bebo.com]"]);
mapOfApps.set("Behance", ["images///png/behance.png", "www.behance.com"]);
mapOfApps.set("Bing", ["images///png/bing.png", "www.bing.com"]);
mapOfApps.set("Blogger", ["images///png/blogger.png", "www.blogger.com"]);
mapOfApps.set("Delicious", ["images///png/delicious.png", "www.delicious.com"]);
mapOfApps.set("DeviantArt", ["images///png/deviantart.png", "www.devianart.com"]);
mapOfApps.set("Digg", ["images///png/digg.png", "www.dig.com"]);
mapOfApps.set("Dribbble", ["images///png/dribbble.png", "www.dribbble.com"]);
mapOfApps.set("Dropbox", ["images///png/dropbox.png", "www.dropbox.com"]);
mapOfApps.set("Ebay", ["images///png/ebay.png", "www.ebay.com"]);

mapOfApps.set("Evernote", ["images///png/evernote.png", "www.evernote.com"]);
mapOfApps.set("Facebook", ["images///png/facebook.png", "www.facebook.com"]);
mapOfApps.set("Flickr", ["images///png/flickr.png", "www.flickr.com"]);
mapOfApps.set("Forrst", ["images///png/forrst.png", "www.forrst.com"]);
mapOfApps.set("Foursquare", ["images///png/foursquare.png", "www.foursquare.com"]);
mapOfApps.set("Google-plus", ["images///png/google-plus.png", "www.google-plus.com"]);
mapOfApps.set("Grooveshark", ["images///png/grooveshark.png", "www.grooveshark.com"]);
mapOfApps.set("Instagram", ["images///png/instagram.png", "www.instagram.com"]);
mapOfApps.set("Kickstarter", ["images///png/kickstarter.png", "www.kickstarter.com"]);
mapOfApps.set("Lastfm", ["images///png/lastfm.png", "www.lastfm.com"]);

mapOfApps.set("Linkedin", ["images///png/linkedin.png", "www.linkedin.com"]);
mapOfApps.set("Livejournal", ["images///png/livejournal.png", "www.livejournal.com"]);
mapOfApps.set("Myspace", ["images///png/myspace.png", "www.myspace.com"]);
mapOfApps.set("Opera", ["images///png/opera.png", "www.opera.com"]);
mapOfApps.set("Paypal", ["images///png/paypal.png", "www.paypal.com"]);
mapOfApps.set("Picasa", ["images///png/picasa.png", "www.picasa.com"]);
mapOfApps.set("Pinterest", ["images///png/pinterest.png", "www.pinterest.com"]);
mapOfApps.set("Sharethis", ["images///png/sharethis.png", "www.sharethis.com"]);
mapOfApps.set("Skype", ["images///png/skype.png", "www.skype.com"]);
mapOfApps.set("Soundcloud", ["images///png/soundcloud.png", "www.soundcloud.com"]);
mapOfApps.set("Stumbleupon", ["images///png/stumbleupon.png", "www.stumbleupon.com"]);

mapOfApps.set("Technorati", ["images///png/technorati.png", "www.technorati.com"]);
mapOfApps.set("Telegram", ["images///png/telegram.png", "www.telegram.com"]);
mapOfApps.set("Tumblr", ["images///png/tumblr.png", "www.tumblr.com"]);
mapOfApps.set("Twitter", ["images///png/twitter.png", "www.twitter.com"]);
mapOfApps.set("Viber", ["images///png/viber.png", "www.viber.com"]);
mapOfApps.set("Vimeo", ["images///png/vimeo.png", "www.vimeo.com"]);
mapOfApps.set("Vk", ["images///png/vk.png", "www.vk.com"]);
mapOfApps.set("Wikipedia", ["images///png/wikipedia.png", "www.wikipedia.com"]);
mapOfApps.set("Wordpress", ["images///png/wordpress.png", "www.wordpress.com"]);
mapOfApps.set("Xing", ["images///png/xing.png", "www.xing.com"]);
mapOfApps.set("Yahoo", ["images///png/yahoo.png", "www.yahoo.com"]);
mapOfApps.set("Yandex", ["images///png/yandex.png", "www.yandex.com"]);
mapOfApps.set("Youtube", ["images///png/youtube.png", "www.youtube.com"]);
mapOfApps.set("Zerply", ["images///png/zerply.png", "www.zerply.com"]);

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

$('#app-iframe').contents().find('.add-button').click(function(){
  nameValue = $(this).closest('th').find("p").text();
  console.log(nameValue)
 $(parentIdOfClickedImage).append('<li class="ui-state-default ui-sortable-handle context-menu-one btn btn-neutral"><a href="https://' + mapOfApps.get(nameValue)[1] + '"><img src="' + mapOfApps.get(nameValue)[0] + '" class="application" /><a/><p class="text-shortcut">' + nameValue + '</p></li>');
});

$('#app-iframe').contents().find("#submit-btn").click(function(){
  console.log($('#app-iframe').contents().find("#value-to-get").html());

  $(parentIdOfClickedImage).append($('#app-iframe').contents().find("#value-to-get").html());
});

$(".container").on("click", function(){
  if(animationFinished == true){
    console.log('2');
    $("#app-iframe").animate({"right": "-40%"},
    { duration: 1250, easing: 'easeOutBounce' })
    .promise().done(function () {
        $("#app-iframe").hide();
    });
      animationFinished = false;
  }
})

});
