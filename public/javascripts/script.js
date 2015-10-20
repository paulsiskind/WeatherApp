$(document).ready(function(){
  $.get("http://jsonip.com", function(data) {
    $(".ip").empty().append("Tuning in from IP Address: " + data.ip);
  });

  $.get("http://www.telize.com/geoip", function(data) {
    $(".long").empty().append("Longitude: " + data.longitude);
    $(".lat").empty().append("Latitude: "+ data.latitude);
  });

  $.get("http://api.openweathermap.org/data/2.5/weather?q=boulder,co?&APPID="+ process.env.API_KEY, function(data){
      console.log(process.env.API_KEY)
    $('.currentWeather').empty().append("Your Current Weather: "+ data.weather[0].description.toUpperCase())
    $('.temp').append('Temperature: '+ data.main.temp)
  });

    $("#click").click(function(e) {
    e.preventDefault();
    var input = $("input").val();
    console.log(input);
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+input+'&APPID='+ process.env.API_KEY, function(data) {
      $(".weather").append(data.weather[0].description.toUpperCase());
    })
  });
})