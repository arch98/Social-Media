var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/users",{useNewUrlParser:true,useUnifiedTopology:true});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("HI!");
});


var nameSchema = new mongoose.Schema({
  Name:String,
  Username:String,
  Password:String
});


var User = mongoose.model("User",nameSchema);

router.post('/',function(req,res,next){
     
    var myData = new User(req.body);

    myData.save().then(item=>{
      res.send("Name Saved!");
    }).catch((err)=>{
      res.status(400).send("Unable to send Data!");
    });
});



module.exports = router;
