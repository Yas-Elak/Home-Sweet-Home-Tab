$(window).on("load", function (e) {
/*
*correction of the position, it depends if the cas rest, is sitting or standing
*/
  let catPosition = Math.floor((Math.random() * 3));
  let topPosition;
  let negation;
  if (catPosition == 0){
    negation ="-";
    topPosition = 10
    $("#pet-resting").hide();
    $("#pet-sitting").hide();
  } else if (catPosition == 1){
    topPosition = 60;
    $("#pet").hide();
    $("#pet-resting").hide();
    $(".pet-shadow").css({"bottom": "23%", "left": "16%"});
    $(".pet-head").css({"top": "-"+topPosition+"%"})
    negation ="-";
  } else {
    topPosition = 15;
    $("#pet").hide();
    $("#pet-sitting").hide();
    $(".pet-shadow").css({"bottom": "28%", "left": "16%"});
    $(".pet-head").css({"top": topPosition+"%", "left": "16%"})
    negation="";
  }
  $("#cat-box").css({"visibility": "visible"});

//data (title, name and color)
let titleArray = ["Miss","Mr","Mrs","Ms","Brother","Captain","Doctor","Father","Honourable","Lady","Madam","Major","Master","Pastor","Professor","Reverend","Sir","Sister","Abbott","Ableseaman","Admiral","Air","Chief","Marshal","Air","Commodore","Air","Marshall","Ambassador","Archbishop","Archdeacon","Associate","Professor","Baron","Baroness","Bishop","Bombardier","Brigadier","Cadet","Canon","Cardinal","Chaplain","Chief","Petty","Officer","Colonel","Commander","Commissioner","Commodore","Constable","Consul","Corporal","Count","Countess","Dame","Deacon","Deaconess","Dean","Deputy","Superintendent","Director","Earl","Engineer","Flight","Lieutenant","Flight","Sergeant","Flying","Officer","General","Governor","Group","Captain","Honourable","Judge","Honourable","Justice","Judge","Justice","Lance","Corporal","Lieutenant","Lieutenant","Colonel","Lieutenant","Commander","Lieutenant","General","Lieutenant","Governor","Lord","Madame","Major","General","Manager","Mayor","Mayoress","Midshipman","Monsignor","Most","Reverend","Mother","Nurse","Office","Cadet","Petty","Officer","Pilot","Officer","Private","Rabbi","Rear","Admiral","Rector","Reverend","Doctor","Right","Honourable","Right","Reverend","Seaman","Second","Lieutenant","Senator","Senior","Senior","Constable","Sergeant","Sister","Superior","Squadron","Leader","Staff","Cadet","Staff","Sergeant","Station","Master","Sub","Lieutenant","Superintendent","Swami","Very","Reverend","Vice","Admiral","Vice","Commander","Viscount","Warrant","Officer","Wing","Commander"];

let nameArray = ["Alfie","Angel","Argus","Arwen","Ashton","Baby","Bailey","Bassil","Beage","Bender","Benny","Big","Red","Big","Sammy","Binka","Binx","Blackie","Bobo","Boogie","Boris","Bowser","Brandy","Buddy","Butterscotch","Cally","Caramel","Casey","Catherine","Cece","Celine","Cherio","Chloe","Churchill","Cinders","Clarence","Claude","Cleo","Coffee","Cookie","Cooper","Cosmo","Couch","Potato","Daisy","Dakota","Dark","Moon","David","Denver","Diesel","Dilon","Disney","Dissy","Divine","Dude","","Ebony","Enzo","Faggie","Fagison","Felix","Ferris","Fifi","Flowerbee","Fluffernet","Fluffy","Fosters","Freckles","Frollo","Freckuls","Fudge","Fudge","Fuffie","Gabrielle","Gadget","Gary","Ginger","Gipsy","Gizmo","Gore","Grace","Griswald","Grizz","Grizzabella","Harley","Hazel","Henry","Hex","Hoppy","Indy","Izzy","Jasmine","Jay","Jinx","Jon","Jymes","Dean","Katie","Kelee","Kenny","Kirby","Kitty","Kliff","Kool","Kat","Lady","Larry","Lera","Lexie","Lincoln","","Little","Lucy","Mac","Mackie","Marbles","Mario","Marley","Marmelade","Martin","Max","Maxine","Merlin","Micky","Midnight","Mippen","Misty","Missy","Mittens","Mitzy","Molly","Moon","Pie","Moriarty","Moritz","Moses","Mozart","Ms","Kitty","Myah","Nala","Natasha","Nemo","Niglet","Nikita","Noodles","Noodlehead","Oliver","Oreo","Orwell","Oscar","Panda","Patsy","Paws","Peanut","Peter","Phoebe","Pinkle","Plinky","Poocat","Pooder","Pookie","Prince","Princess","Pumpkin","","Punkin","Purr","Rajha","Ralph","Rascal","Romeo","Roxie","Rylie","Sadie","Salem","Sammy","Sasha","Scooter","Scout","Secret","Shadow","Shane","Shelby","Simba","Simon","Simpson","Slippers","Smudge","Sophie","Soushi","Sparkle","Sputnick","Stanley","Starlett","Sticky","Stimpy","Stray","Sugar","Sunny","Tater","Tigger","Tinkerbell","Tina","Tiny","Tobi","Tori","Tricia","Tucker","Tuna","Twiggy","Walter","Whiskers","Willow","Wyatt","Xman","Zakkie","Zebra"]

let colorsArray =
["#D7EDAF","#5E5E5E","#BFD3D6","#FCB47E","#F2CC7B","#FCDAC9","#FC7E7E","#5E5E5E","#A2D8C0","#FCB47E","#E5A5C2","#B3B3B3","#F2CC7B","#B3B3B3","#A5C6EF","#B3B3B3","#A2D8C0","#5E5E5E"]

//choose the name of the pet randomly
let titleNumber = Math.floor((Math.random() * titleArray.length ) + 1);
let nameNumber = Math.floor((Math.random() * nameArray.length ) + 1);
$( "#pet-name" ).html(titleArray[titleNumber]+" "+nameArray[nameNumber]);

//Choose the color of the Pet and the background randomly
let colorNumber = Math.floor((Math.random() * colorsArray.length));
$("svg,path").css({ fill: (colorsArray[colorNumber]) });
$("#cat-box").css("background-color", (colorsArray[colorNumber+1]));

//animation
/*
*function to calculate the time length of the Animation
*/
function animationLengthTime(){
  return Math.floor(Math.random() * (2000 - 1000) ) + 1000;
}
/*
*function to calculate the time length between the Animation
*/
function animationLapsTime(){
  return Math.floor(Math.random() * (15000 - 2000) ) + 2000;
}

 function animation1(top){
        $(".pet-head").animate({rotate: '15deg'}, animationLengthTime()).delay(animationLapsTime());
        $(".pet-eyes-img").attr("src", "images/cats/standing-cat-eyes-closed.svg");
        $(".pet-head").animate({'top':''+negation+(top-5)+'%'},animationLengthTime()).delay(animationLapsTime());
        $(".pet-head").animate({rotate: '0deg'}, animationLengthTime());
        $(".pet-head").animate({'top':''+negation+top+'%'},animationLengthTime()).delay(animationLapsTime());
      };

  function animation2(top){
        $(".pet-head").animate({'top':''+negation+(top-5)+'%'},animationLengthTime()).delay(animationLapsTime());
        $(".pet-head").animate({rotate: '15deg'}, animationLengthTime()).delay(animationLapsTime());
        $(".pet-head").animate({rotate: '0deg'}, animationLengthTime());
        $(".pet-head").animate({'top':''+negation+top+'%'},animationLengthTime()).delay(animationLapsTime());
       };
 function animation3(top){
        $(".pet-head").animate({'top':''+negation+(top-7)+'%'},animationLengthTime()).delay(animationLapsTime());
        $(".pet-head").animate({rotate: '-19deg'}, animationLengthTime()).delay(animationLapsTime());
        $(".pet-head").animate({rotate: '0deg'}, animationLengthTime());
        $(".pet-head").animate({'top':''+negation+top+'%'},animationLengthTime()).delay(animationLapsTime());
      };
  function animation4(top){
        $(".pet-head").animate({rotate: '12deg'}, animationLengthTime()).delay(animationLapsTime());
        $(".pet-head").animate({rotate: '0deg'}, animationLengthTime());
        $(".pet-head").animate({'top':''+negation+(top-7)+'%'},animationLengthTime()).delay(animationLapsTime());
        $(".pet-head").animate({'top':''+negation+top+'%'},animationLengthTime()).delay(animationLapsTime());
       };
   function animation5(top){
         $(".pet-head").animate({'top':''+negation+(top-5)+'%'},animationLengthTime()).delay(animationLapsTime());
         $(".pet-head").animate({rotate: '-2deg'}, animationLengthTime()).delay(animationLapsTime());
         $(".pet-head").animate({rotate: '0deg'}, animationLengthTime());
         $(".pet-head").animate({'top':''+negation+top+'%'},animationLengthTime()).delay(animationLapsTime());
        };
setInterval(function(){
  animation1(topPosition);
  animation2(topPosition);
  animation3(topPosition);
  animation4(topPosition);
  animation5(topPosition);
},1000);


/*
*Function to make the cat close is eyes when the mouse is overflow
*this must cancel the function who make it blink random
*/
let hoverBlink = false;
console.log(hoverBlink);
$("#pet,#pet-sitting,#pet-resting").hover(function () {
    $(".pet-eyes-img").attr("src", "images/cats/standing-cat-eyes-closed.svg");
    hoverBlink = true;
}, function () {
    $(".pet-eyes-img").attr("src", "images/cats/standing-cat-eyes.svg");
    hoverBlink = false
});

/*
*Function to make the cat blink randomly, it must stop when we hover the cat
*/
let blinkeyes = 250;
let openEyes = true;
function petBlink() {
  if (!hoverBlink){
    if (openEyes){
      $(".pet-eyes-img").attr("src", "images/cats/standing-cat-eyes-closed.svg");
      openEyes = false;
      blinkeyes = 5;
      console.log("open");
    } else {
      $(".pet-eyes-img").attr("src", "images/cats/standing-cat-eyes.svg");
      blinkeyes = 5000;
      openEyes = true;
      console.log("closed");
    }
  }
  setTimeout(petBlink, blinkeyes);
};
petBlink();













});
