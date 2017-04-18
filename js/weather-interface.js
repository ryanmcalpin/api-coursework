var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  currentWeatherObject.getWeather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })

    .fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
