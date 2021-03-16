const express = require("express");

const app = express();

const https = require("https");



app.get("/",function(req,res){

  var url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=8f0e7b3b5fd1c84b42d4dbb90d275ac3";
  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData = JSON.parse(data)
      var temp = weatherData.main.temp
      var icon = "https://api.openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"
      res.write("<h1>The temperature in delhi is " + temp + " degrees celsius</h1>")
      res.write("<img src ="+ icon + ">" )
    })

  });
})

app.listen(3000,function(){
  console.log("server running on 3000");
})
