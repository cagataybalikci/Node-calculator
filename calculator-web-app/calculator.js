const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (request,response)=>{
    response.sendFile(__dirname+"/index.html");
})

app.get("/bmicalculator", (req,res)=>{
    res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator",(req,res)=>{
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)
    var bmiResult  = weight / Math.pow(height,2);
    res.send("Your BMI is " + bmiResult);
})

app.post("/",(req,res)=>{
    var num1 = parseFloat(req.body.num1);
    var numb2 = parseFloat(req.body.num2);
    var result = num1 + numb2;
    res.send("The result of the calculation is: " + result);
})

app.listen(3000,()=>{
    console.log("Server is started at port 3000.");
})