const mongoose = require('mongoose');

const url = "mongodb+srv://saiganeshpunnam:PSGcbit123@cccluser.feysu.mongodb.net/?retryWrites=true&w=majority&appName=CCCluser";

const connectToMongo = async()=>{
    await mongoose.connect(url);
    console.log("connected")

}

module.exports =  connectToMongo
