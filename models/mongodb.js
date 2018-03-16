const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:admin@ds215089.mlab.com:15089/aadhar')


//checking the mongoose connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error")); //DB Connection fail
db.once("createConnection", function(callback) {
    console.log("MongoDB Connection Succeeded"); //DB connection success
});


//Mongoose Schema

const Schema = mongoose.Schema;

const aadharSchema = new Schema({

    aadharNumber : String,
    email : String,
    emailCode: String,
    email_verified : Boolean


})

module.exports = mongoose.model('aadhar', aadharSchema)