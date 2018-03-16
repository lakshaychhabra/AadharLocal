var mongoose = require('mongoose')
var aadhar1 = require(__base + 'models/mongodb.js');

var verification = function(req, res) {
    var aadharNum = req.params.aadharNum;
    var code = req.params.code || req.headers.code;

    aadhar1.findOne({ "aadharNumber": aadharNum }).exec(function(err, result){

        if(!result) {
            res.json({"Error":"No results found.","aadhar":aadharNum,"Code":code})
        }
        else {
            if (result.emailCode == code) {
                aadhar1.findOneAndUpdate({"aadharNumber": aadharNum}, {$set: {email_verified: true},$unset: {"emailCode": 1 }}, {new: true}, function (err, doc) {
                    if (err) {
                        console.log("Something wrong when updating data!");
                    }
                    res.json({success: true, message: 'Aadhar verified.', aadharNumber: aadharNum})

                })
            } else {
                res.json({success: false, message: 'Verification failed. Wrong verification code.'})
            }

            console.log(result)
        }

    })



}







module.exports = verification;
