$(function() {

  let returnUri;
  let urlImgValue
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
    urlImgValue = $("#image-url").val();
    //check if the user gives all the info needed and if yes create the "li"
    //in the "p". I will get the "p" value in the iframe-handler
    if(linkValue != "" && nameValue != ""){
      if(urlImgValue != ""){
        if(urlImgValue.substr(urlImgValue.length - 1) != "g"){
          alert("the image must be a png or a jpg");
        } else{
          $("#value-to-get").html('<li class="ui-state-default ui-sortable-handle context-menu-one btn btn-neutral"><a href="https://' + linkValue + '"><img src="' + urlImgValue + '" class="application" /><a/><p class="text-shortcut">' + nameValue + '</p></li>');
        }
      } else if ($("#file-input").val() != ""){
        $("#value-to-get").html('<li class="ui-state-default ui-sortable-handle context-menu-one btn btn-neutral"><a href="https://' + linkValue + '"><img src="' + returnUri + '" class="application" /><a/><p class="text-shortcut">' + nameValue + '</p></li>');
      } else {
        alert("You must submit an image or the ling of some image");
      }
    } else {
      alert("The name and the link can't be empty");

    }
  });
//use the base64 to display the image
 $("#image-url").change(function(){
   $('#falseinput').attr("src",  $("#image-url").val());
 });


//transform an image in base64 and allow me to stock it
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
