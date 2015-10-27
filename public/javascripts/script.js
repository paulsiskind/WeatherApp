$(document).ready(function(){
  $.get("http://jsonip.com", function(data) {
    $(".ip").empty().append("Tuning in from IP Address: " + data.ip);
  });

  $.get("http://www.telize.com/geoip", function(data) {
    $(".long").empty().append("Longitude: " + data.longitude);
    $(".lat").empty().append("Latitude: "+ data.latitude);
  });

  $.get("http://api.openweathermap.org/data/2.5/weather?q=boulder,co?&APPID=fceb86b7fa0aa20c2959dbc7f63c1f99&units=imperial", function(data){
    $('.currentWeather').empty().append("Your Current Weather: "+ data.weather[0].description.toUpperCase())
    $('.temp').append("Temperature: "+ data.main.temp)
  });

    $("#click").click(function(e) {
    e.preventDefault();
    var input = $("input").val();
    console.log(input);
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+input+'?&APPID=fceb86b7fa0aa20c2959dbc7f63c1f99&units=imperial', function(data) {
      $(".weather").append(data.weather[0].description.toUpperCase());
      $(".forecast").append(data.list.weather);
    })
  });
  $.get("http://www.flickr.com/services/feeds/photos_public.gne?tags=spring_flowers&format=json", jsonFlickrFeed, 'jsonp');
})

function jsonFlickrFeed(data) {
  document.body.style.backgroundImage = "url('" + data.items[1].media.m + "')";
}

/*process.env.API_KEY*/