const express = require("express");
const bodyParser= require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    weight= parseFloat(req.body.weight);
    height = parseFloat(req.body.height);

    result = weight / (height*height);

    if (result < 18.4) {
        res.send("<h3>Upss! Hasil BMI kamu sekitar: " + result + "<h1>You're Underweight!");
    } else if (18.5 <= result && result < 25) { 
        res.send("<h3>Yaayy! Hasil BMI kamu sekitar: " + result + "<h1>You're Normalweight!");
    } else if (25 <= result && result < 27) {
        res.send("<h3>Upss! Hasil BMI kamu sekitar: " + result + "<h1>You're Overweight!");
    } else {
        res.send("<h3>Maaf! Hasil BMI kamu sekitar: " + result + "<h1>You're Obese!");
    } 
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});