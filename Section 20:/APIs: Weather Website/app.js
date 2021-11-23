const express = require('express');
const https = require('https'); //making GET request to the "https://home.openweathermap.org" website to fetch the data
const bodyParser = require("body-parser");
const app = new express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
  // console.log();
  // console.log("The user input is Received.");
  const cityName = req.body.cityName;
  const apiKey = "9591af227b55402933e55a2de0bc7a90";
  const unitsName = "metric";
  const url_ = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + unitsName;

  https.get(url_, function(response_){
    // console.log(response_);
    // console.log(response_.statusCode);

    response_.on("data", function(data){
      const WeatherData = JSON.parse(data);
      const temp = WeatherData.main.temp;
      const WeatherDescription = WeatherData.weather[0].description;
      const WeatherIcon = WeatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + WeatherIcon + "@2x.png";
      res.write("<h1>The temperature in " + cityName + " is " + temp + " degress Celsius.</h1>");
      res.write("<p>The weather is " + WeatherDescription + ". </p>");
      res.write("<img src=" + imageUrl + ">");
      res.send();
    })
  })
})



app.listen(3000, function(){
  console.log("Server is running on port 3000.")
});
