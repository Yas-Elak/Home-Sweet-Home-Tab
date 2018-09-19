$(function() {

  let returnUri;
  $("#container-custom").hide();

  $("#default-app").click(function () {
    $("#container-custom").hide();
    $("#container-default").show();
  });
  $("#custom-app").click(function () {
    $("#container-default").hide();
    $("#container-custom").show();
  });
  $("#submit-btn").click(function () {
    let linkValue = $("#shortcut-link").val();
    let nameValue = $("#shortcut-name").val();
    let urlImgValue = $("#image-url").val();

    if(linkValue != "" && nameValue != ""){
      console.log(nameValue);
      if(urlImgValue != ""){
        if(urlImgValue.substr(id.length - 1) != "g"){
          alert("the image must be a png or a jpg");
        } else{
          console.log("je dois créer l'uri, l'affiche et le sauvegarde");
        }
      } else if ($("#file-input").val() != ""){
        console.log("je suis au bon endroit");
        $("#value-to-get").html('<li class="ui-state-default ui-sortable-handle context-menu-one btn btn-neutral"><a href="https://' + linkValue + '"><img src="' + returnUri + '" class="application" /><a/><p class="text-shortcut">' + nameValue + '</p></li>');
      } else {
        alert("You must submit an image or the ling of some image");
      }
    } else {
      alert("The name and the link can't be empty");

    }
  });

 $("#url-input").change(function(){
   if(urlImgValue.substr(id.length - 1) != "g"){
     alert("the image must be a png or a jpg");
   } else{
     $('#falseinput').attr("src",  $("url-input").val());
   }
 });

  $("#file-input").change(function (input) {
        $("#image-url").val("");
        //input.files[0] get the first uplaoded element
  			if (input.currentTarget.files[0]) {
  				var reader = new FileReader();
  				reader.onload = function (e) {
  					$('#falseinput').attr("src", e.target.result);
            returnUri = e.target.result;
  				};
  				reader.readAsDataURL(input.currentTarget.files[0]);
  		}
  		}
    )
});
