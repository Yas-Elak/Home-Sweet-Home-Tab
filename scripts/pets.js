$(window).on("load", function (e) {

let titleArray = ["Miss","Mr","Mrs","Ms","Brother","Captain","Doctor","Father","Honourable","Lady","Madam","Major","Master","Pastor","Professor","Reverend","Sir","Sister","Abbott","Ableseaman","Admiral","Air","Chief","Marshal","Air","Commodore","Air","Marshall","Ambassador","Archbishop","Archdeacon","Associate","Professor","Baron","Baroness","Bishop","Bombardier","Brigadier","Cadet","Canon","Cardinal","Chaplain","Chief","Petty","Officer","Colonel","Commander","Commissioner","Commodore","Constable","Consul","Corporal","Count","Countess","Dame","Deacon","Deaconess","Dean","Deputy","Superintendent","Director","Earl","Engineer","Flight","Lieutenant","Flight","Sergeant","Flying","Officer","General","Governor","Group","Captain","Honourable","Judge","Honourable","Justice","Judge","Justice","Lance","Corporal","Lieutenant","Lieutenant","Colonel","Lieutenant","Commander","Lieutenant","General","Lieutenant","Governor","Lord","Madame","Major","General","Manager","Mayor","Mayoress","Midshipman","Monsignor","Most","Reverend","Mother","Nurse","Office","Cadet","Petty","Officer","Pilot","Officer","Private","Rabbi","Rear","Admiral","Rector","Reverend","Doctor","Right","Honourable","Right","Reverend","Seaman","Second","Lieutenant","Senator","Senior","Senior","Constable","Sergeant","Sister","Superior","Squadron","Leader","Staff","Cadet","Staff","Sergeant","Station","Master","Sub","Lieutenant","Superintendent","Swami","Very","Reverend","Vice","Admiral","Vice","Commander","Viscount","Warrant","Officer","Wing","Commander"];

let nameArray = ["Alfie","Angel","Argus","Arwen","Ashton","Baby","Bailey","Bassil","Beage","Bender","Benny","Big","Red","Big","Sammy","Binka","Binx","Blackie","Bobo","Boogie","Boris","Bowser","Brandy","Buddy","Butterscotch","Cally","Caramel","Casey","Catherine","Cece","Celine","Cherio","Chloe","Churchill","Cinders","Clarence","Claude","Cleo","Coffee","Cookie","Cooper","Cosmo","Couch","Potato","Daisy","Dakota","Dark","Moon","David","Denver","Diesel","Dilon","Disney","Dissy","Divine","Dude","","Ebony","Enzo","Faggie","Fagison","Felix","Ferris","Fifi","Flowerbee","Fluffernet","Fluffy","Fosters","Freckles","Frollo","Freckuls","Fudge","Fudge","Fuffie","Gabrielle","Gadget","Gary","Ginger","Gipsy","Gizmo","Gore","Grace","Griswald","Grizz","Grizzabella","Harley","Hazel","Henry","Hex","Hoppy","Indy","Izzy","Jasmine","Jay","Jinx","Jon","Jymes","Dean","Katie","Kelee","Kenny","Kirby","Kitty","Kliff","Kool","Kat","Lady","Larry","Lera","Lexie","Lincoln","","Little","Lucy","Mac","Mackie","Marbles","Mario","Marley","Marmelade","Martin","Max","Maxine","Merlin","Micky","Midnight","Mippen","Misty","Missy","Mittens","Mitzy","Molly","Moon","Pie","Moriarty","Moritz","Moses","Mozart","Ms","Kitty","Myah","Nala","Natasha","Nemo","Niglet","Nikita","Noodles","Noodlehead","Oliver","Oreo","Orwell","Oscar","Panda","Patsy","Paws","Peanut","Peter","Phoebe","Pinkle","Plinky","Poocat","Pooder","Pookie","Prince","Princess","Pumpkin","","Punkin","Purr","Rajha","Ralph","Rascal","Romeo","Roxie","Rylie","Sadie","Salem","Sammy","Sasha","Scooter","Scout","Secret","Shadow","Shane","Shelby","Simba","Simon","Simpson","Slippers","Smudge","Sophie","Soushi","Sparkle","Sputnick","Stanley","Starlett","Sticky","Stimpy","Stray","Sugar","Sunny","Tater","Tigger","Tinkerbell","Tina","Tiny","Tobi","Tori","Tricia","Tucker","Tuna","Twiggy","Walter","Whiskers","Willow","Wyatt","Xman","Zakkie","Zebra"]

let colorsArray =
["f1e3cc","67B5FF","2F190A","67F5FF","ee8033","67F3FF","036818","FF677B","f6ae99","67FFD5","FCE6DF","67FFD9","F7EFED","67FFCD","FF8567","67FFCD","ACA1A1","67FF92","69656f","FFFA67","293249","FFDD0D","92b4f2","FFAE00","fffafc","FF1975","ffffff","000000"]

//name of the pet
let titleNumber = Math.floor((Math.random() * titleArray.length ) + 1);
let nameNumber = Math.floor((Math.random() * nameArray.length ) + 1);
$( "#pet-name" ).html(titleArray[titleNumber]+" "+nameArray[nameNumber]);

//color of the Pet
let colorNumber = Math.floor((Math.random() * colorsArray.length));
$("svg,path").css({ fill: ("#"+colorsArray[colorNumber]) });
$("#cat-box").css("background-color", ("#"+colorsArray[colorNumber+1]));

//animation
 function animation1(){
        $("#pet-head").animate({rotate: '15deg'}, 1000).delay(1000);
        $("#pet-head").animate({'top':'-5%'},1000).delay(2000);
        $("#pet-head").animate({rotate: '0deg'}, 1000);
        $("#pet-head").animate({'top':'-10%'},1000).delay(6000);
      };

  function animation2(){
        $("#pet-head").animate({'top':'-5%'},1000).delay(2000);
        $("#pet-head").animate({rotate: '15deg'}, 1000).delay(1000);
        $("#pet-head").animate({rotate: '0deg'}, 1000);
        $("#pet-head").animate({'top':'-10%'},1000).delay(4000);
       };
 function animation3(){
        $("#pet-head").animate({'top':'-13%'},1000).delay(2000);
        $("#pet-head").animate({rotate: '-1deg'}, 1000).delay(1000);
        $("#pet-head").animate({rotate: '0deg'}, 1000);
        $("#pet-head").animate({'top':'-10%'},1000).delay(5000);
      };
  function animation4(){
        $("#pet-head").animate({rotate: '12deg'}, 1000).delay(1000);
        $("#pet-head").animate({rotate: '0deg'}, 1000);
        $("#pet-head").animate({'top':'-3%'},1000).delay(2000);
        $("#pet-head").animate({'top':'-10%'},1000).delay(8000);
       };
   function animation5(){
         $("#pet-head").animate({'top':'-5%'},1000).delay(2000);
         $("#pet-head").animate({rotate: '-1deg'}, 1000).delay(1000);
         $("#pet-head").animate({rotate: '0deg'}, 1000);
         $("#pet-head").animate({'top':'-10%'},1000).delay(20000);
        };
setInterval(function(){
  animation1();
  animation2();
  animation3();
  animation4();
  animation5();
},1000);

});
