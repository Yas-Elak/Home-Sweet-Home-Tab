//I know how many background I Have, so I choose a random number
$(".container").hide();

let backgroundNumber = Math.floor((Math.random() * 18) + 1);

//then I apply yhe background on the body
document.body.style.background = "#D3D3D3 url(images/backgrounds/" + backgroundNumber + ".jpg) no-repeat center center fixed";
