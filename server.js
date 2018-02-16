//Import the necessary libraries/declare the necessary objects
 var express = require("express");
 var myParser = require("body-parser");
 var app = express();
 
 app.get('/', function(req, res) {
  res.sendFile('index.html', {root : __dirname});
});
/*app.use(myParser.urlencoded({extended : true}));
app.post('/employee.json', function(req, res) {
  res.sendFile('employee.json', {root : __dirname});
  console.log(request.body);
  response.send(request.body); 
});

   app.use(myParser.urlencoded({extended : true}));
   app.post("/employee.json", function(request, response) {
       console.log(request.body); //This prints the JSON document received (if it is a JSON document)
 });*/
 

//var jsonfile = require('jsonfile');    



    //trying to write via form to json
    app.post('./gettingdata', function(req, res) {
        var user_id = req.body.usrid;
        var token = req.body.usrphone;
        var geo = req.body.usrdata;

        //start writing
        var obj = { name: user_id , phone: token, adress: geo }
        jsonfile.writeFileSync(file, obj, {flag: 'a'});

        //default
        res.send(user_id + ' ' + token + ' ' + geo);
    }); 
 //Start the server and make it listen for connections on port 4200 
 app.listen(3000);