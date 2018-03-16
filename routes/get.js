// Catch all other routes and return the index file


module.exports = function (app) {


    app.get('/',function (req,res) {
        res.send("AADHAR VERFICATION")
        console.log('Api Started')
    })


    app.get('/verify/email/:aadharNum/:code',function(req,res){
        var verify_email = require(__base + './confirm_apis/emailverification')(req,res)
    })



}