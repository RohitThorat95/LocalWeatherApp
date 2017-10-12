//flicker 91f9bf21c2874fc81f76f353473070fd
$(document).ready(function() {
  var lat, lon, link, city, country, description, wind, tempcel, tempfar, symbol, photolink;

  $("#main").hide();

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    link = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=1261b47b6213bb4173d02555214b6570";
    $.getJSON(link, function(value) {
      city = value.name;
      country = value.sys.country;
      description = value.weather[0].description;
      wind = value.wind.speed;
      tempcel = Math.round(value.main.temp - 273) + " °C";
      tempfar = Math.round(32 + (value.main.temp - 273) * 9 / 5) + " °F";
      $("#temp").text(tempcel);
      $("#city").text(city + "," + country);
      $("#description").text(description);
      $("#wind").text("Wind-speed:" + wind);

    })
  }
  $(".first").click(function() {

    $(".first").fadeOut(function() {
      $("#main").show();

    });

    getLocation();
  })
  $(".toggle").click(function() {
    if ($("#temp").text() == tempcel) {

      $("#temp").text(tempfar);
    } else
      $("#temp").text(tempcel);
  })
});