$(window).on("load", function (e) {

    let imageToAdd;
    let mapOfApps;
    let availableTags;
    let initialiseMap;
    let parentIdOfClickedImage;

    chrome.storage.local.get("initialisedMap", function (result) {
        initialiseMap = result.initiliseMap;
    });

     if (initialiseMap == null) {
        mapOfApps = new Map();
        mapOfApps.set("addthis", ["/images/png/addthis.png", "#"]);
        mapOfApps.set("amazon", ["/images/png/amazon.png", "www.amazon.com"]);
        mapOfApps.set("bebo", ["/images/png/bebo.png", "www.bebo.com]"]);
        mapOfApps.set("behance", ["/images/png/behance.png", "www.behance.com"]);
        mapOfApps.set("bing", ["/images/png/bing.png", "www.bing.com"]);
        mapOfApps.set("blogger", ["/images/png/blogger.png", "www.blogger.com"]);
        mapOfApps.set("delicious", ["/images/png/delicious.png", "www.delicious.com"]);
        mapOfApps.set("deviantart", ["/images/png/deviantart.png", "www.devianart.com"]);
        mapOfApps.set("digg", ["/images/png/digg.png", "www.dig.com"]);
        mapOfApps.set("dribbble", ["/images/png/dribbble.png", "www.dribbble.com"]);
        mapOfApps.set("dropbox", ["/images/png/dropbox.png", "www.dropbox.com"]);
        mapOfApps.set("ebay", ["/images/png/ebay.png", "www.ebay.com"]);

        mapOfApps.set("evernote", ["/images/png/evernote.png", "www.evernote.com"]);
        mapOfApps.set("facebook", ["/images/png/facebook.png", "www.facebook.com"]);
        mapOfApps.set("flickr", ["/images/png/flickr.png", "www.flickr.com"]);
        mapOfApps.set("forrst", ["/images/png/forrst.png", "www.forrst.com"]);
        mapOfApps.set("foursquare", ["/images/png/foursquare.png", "www.foursquare.com"]);
        mapOfApps.set("google-plus", ["/images/png/google-plus.png", "www.google-plus.com"]);
        mapOfApps.set("grooveshark", ["/images/png/grooveshark.png", "www.grooveshark.com"]);
        mapOfApps.set("html", ["/images/png/html.png", "#"]);
        mapOfApps.set("instagram", ["/images/png/instagram.png", "www.instagram.com"]);
        mapOfApps.set("kickstarter", ["/images/png/kickstarter.png", "www.kickstarter.com"]);
        mapOfApps.set("lastfm", ["/images/png/lastfm.png", "www.lastfm.com"]);

        mapOfApps.set("linkedin", ["/images/png/linkedin.png", "www.linkedin.com"]);
        mapOfApps.set("livejournal", ["/images/png/livejournal.png", "www.livejournal.com"]);
        mapOfApps.set("myspace", ["/images/png/myspace.png", "www.myspace.com"]);
        mapOfApps.set("opera", ["/images/png/opera.png", "www.opera.com"]);
        mapOfApps.set("paypal", ["/images/png/paypal.png", "www.paypal.com"]);
        mapOfApps.set("picasa", ["/images/png/picasa.png", "www.picasa.com"]);
        mapOfApps.set("pinterest", ["/images/png/pinterest.png", "www.pinterest.com"]);
        mapOfApps.set("sharethis", ["/images/png/sharethis.png", "www.sharethis.com"]);
        mapOfApps.set("skype", ["/images/png/skype.png", "www.skype.com"]);
        mapOfApps.set("soundcloud", ["/images/png/soundcloud.png", "www.soundcloud.com"]);
        mapOfApps.set("stumbleupon", ["/images/png/stumbleupon.png", "www.stumbleupon.com"]);

        mapOfApps.set("technorati", ["/images/png/technorati.png", "www.technorati.com"]);
        mapOfApps.set("telegram", ["/images/png/telegram.png", "www.telegram.com"]);
        mapOfApps.set("tumblr", ["/images/png/tumblr.png", "www.tumblr.com"]);
        mapOfApps.set("twitter", ["/images/png/twitter.png", "www.twitter.com"]);
        mapOfApps.set("viber", ["/images/png/viber.png", "www.viber.com"]);
        mapOfApps.set("vimeo", ["/images/png/vimeo.png", "www.vimeo.com"]);
        mapOfApps.set("vk", ["/images/png/vk.png", "www.vk.com"]);
        mapOfApps.set("wikipedia", ["/images/png/wikipedia.png", "www.wikipedia.com"]);
        mapOfApps.set("wordpress", ["/images/png/wordpress.png", "www.wordpress.com"]);
        mapOfApps.set("xing", ["/images/png/xing.png", "www.xing.com"]);
        mapOfApps.set("yahoo", ["/images/png/yahoo.png", "www.yahoo.com"]);
        mapOfApps.set("yandex", ["/images/png/yandex.png", "www.yandex.com"]);
        mapOfApps.set("youtube", ["/images/png/youtube.png", "www.youtube.com"]);
        mapOfApps.set("zerply", ["/images/png/zerply.png", "www.zerply.com"]);

        availableTags = [
            "",
            "amazon",
            "bebo",
            "behance",
            "bing",
            "blogger",
            "delicious",
            "deviantart",
            "digg",
            "dribbble",
            "dropbox",
            "ebay",
            "evernote",
            "facebook",
            "flickr",
            "forrst",
            "foursquare",
            "google-plus",
            "grooveshark",
            "html",
            "instagram",
            "kickstarter",
            "lastfm",

            "linkedin",
            "livejournal",
            "myspace",
            "opera",
            "paypal",
            "picasa",
            "pinterest",
            "sharethis",
            "skype",
            "soundcloud",
            "stumbleupon",
            "technorati",
            "telegram",
            "tumblr",
            "twitter",
            "viber",
            "vimeo",
            "vk",
            "wikipedia",
            "wordpress",
            "xing",
            "yahoo",
            "yandex",
            "youtube",
            "zerply"
        ];
        chrome.storage.local.set({ "initialisedMap": false });
        chrome.storage.local.set({ "mapOfApps": mapOfApps });
        chrome.storage.local.set({ "availableTags": availableTags });

    } else {
        chrome.storage.local.get("mapOfApps", function (result) {
            mapOfApps = result.mapOfApps;
        });
        chrome.storage.local.get("availableTags", function (result) {
            availableTags = result.availableTags;
        });
    }

    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "drop",
            duration: 500
        },
        hide: {
            effect: "drop",
            duration: 500
        }
    });

    $(".clickable").on("click", function () {
      //  $("#dialog").dialog("open");
        //parentIdOfClickedImage = this.parentElement.parentElement;
        //console.log(parentIdOfClickedImage);
    });

    $("#tags").autocomplete({
        source: availableTags,
        select: function (event, ui) {
            imageToAdd = ui.item.value;
            $("#choose-app-img").attr("src", mapOfApps.get(imageToAdd)[0]);
        }
    });

    //tu dois faire le menu contextuelle
    $("#save-new-app").click(function () {
        let uriAppValue = $("[name='uriApp']").val();
        let linkValue = $("[name='urlApp']").val().toLowerCase;
        let nameValue = $("[name='nameOfTheApp']").val();
        console.log(nameValue);
        if ((imageToAdd == "" && uriAppValue == "") || linkValue == "" || nameValue == "") {
            //you must fill the blank
        } else {
            if (uriAppValue != "") {
                mapOfApps.set(nameValue, [uriAppValue, linkValue]);
                $(parentIdOfClickedImage).append('<li class="ui-state-default ui-sortable-handle context-menu-one btn btn-neutral"><a href="' + linkValue + '"><img src="' + uriAppValue + '" class="application" /><a/><p class="text-shortcut">' + nameValue + '</p></li>');
            } else {
                $(parentIdOfClickedImage).append('<li class="ui-state-default ui-sortable-handle context-menu-one btn btn-neutral"><a href="https://' + mapOfApps.get(imageToAdd)[1] + '"><img src="' + mapOfApps.get(imageToAdd)[0] + '" class="application" /><a/><p class="text-shortcut">' + nameValue + '</p></li>');
                mapOfApps.set(nameValue, [mapOfApps.get(imageToAdd)[0], linkValue]);
                chrome.storage.local.set({ "mapOfApp": mapOfApps });

            }
            if ($.inArray(nameValue, availableTags) == -1) {
                availableTags.push(nameValue);
                availableTags.sort();
                chrome.storage.local.set({ "availableTags": availableTags });
            }
            $('#dialog').dialog('close');
        }
    });

    $(".ui-menu-item").on("click", function () {
        console.log("i clicked");
    });

    function AutoCompleteSelectHandler(event, ui) {
        var selectedObj = ui.item;
        alert(selectedObj.value);
    }
});
