const express = require("express");
const videorouter = require("./routes/videoroutes ");
const mongoose = require ("mongoose");

mongoose.connect('mongodb://localhost:27017//youtube').then(() =>{
    console.log("DB connected")
});
const app = express();
app.use(express.json());

app.use(videorouter);



app.listen(3000,onServerStart)

function onServerStart(){
    console.log("server started")
}