$(document).ready(function() {

  //the code for the weather
  var fahrenheit, celsius;
	var weatherApiUrl="https://api.openweathermap.org/data/2.5/weather";
  var apiKey = "55af82060a76ef4887ccc055e173c713";
  var country_code;
	getLatLong();
	function getWeatherData(){
		$.ajax({
			url: weatherApiUrl,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				var temprature=data.main.temp;
				celsius=temprature;
				fahrenheit=celsius*1.8+32;
				var icon=data.weather[0].icon;
        //don't want he détails but I keept it here just in case If I want it background
        //I must put it back in the html
			//	var weatherDetail=data.weather[0].main+", "+data.weather[0].description;
			//	$('.weatherDetail').html(weatherDetail);
				$('#iconpic>img').attr('src','../images/weather-icons/'+icon+'.svg');
        if (data.country_code == "US"){
          $('#temp').html(Math.round(fahrenheit)+"°F");
        } else{
          $('#temp').html(Math.round(temprature)+"°C");
        }
			},
			error: function(err) {
				console.log("wrong with getWeatherDate");
			}
		});
	}
	function getLatLong(){
		$.ajax({
			url: "http://www.geoplugin.net/json.gp",
			type: 'GET',
      dataType: 'json',
			success: function(data){
        var lat = data.geoplugin_latitude;
        var long = data.geoplugin_longitude;
        $('#city').html(data.geoplugin_city);
//				$('.country').html(data.country_name);
        weatherApiUrl += "?lat="+lat+"&lon="+long+"&APPID="+apiKey+"&units=metric";
        getWeatherData();
        country_code = data.geoplugin_continentCode;
      },
			error: function(err) {
				console.log("wrong with city");
			}
		});
	}

$('body').on('click','.weather',function(){
  if($('.weather').attr('id')=='c'){
    $('#temp').html(Math.round(fahrenheit)+"&#8457;");
    $('.weather').attr('id','f');
  }
 else if($('.weather').attr('id')=='f'){
   //else if div as id as f than convert temprature to celsius
    $('#temp').html(Math.round(celsius)+"&#8451;");
    $('.weather').attr('id','c');
  }
  ;})

  //the code to display the waiter in a box when you over
});
