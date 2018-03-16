
var sendEmail = require(__base + './confirm_apis/email.js');
var randomEmail = require( __base + './confirm_apis/random').str;
var emCode = randomEmail()
var aadhar = require(__base + './models/mongodb')
module.exports = function (app,mon) {




    app.post('/aadhar-registered',function (req,res) {

        var Email = req.body.email
        const aadharRegister = new aadhar({

            aadharNumber : req.body.aadharNumber,
            email : Email,
            email_verified : false,
            emailCode: emCode

        })

        aadharRegister.save(function (error) {

            if (error) {
                res.send(error);
            } else {
                //res.redirect('/');
                res.status(200).json(aadharRegister);
                sendEmail(Email, emCode);

                console.log('Aadhar number saved!');
            }
        })

    })

}