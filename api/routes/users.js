var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbname = 'users';
const collname = 'users';

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});

router.post('/',function(req,res,next){
  const  username = req.body.Username;
  const   password = req.body.Password;
   var flag = 0;
   


     MongoClient.connect(url,function(err,client){
     
     if(!err){
       const db = client.db(dbname);
       const collection = db.collection(collname);
        
       collection.findOne({"Username":username,"Password":password}).then((response)=>{
         if(response == null){
           res.send("err");
         }else{        
           res.send("curr");
         }
       }).catch(()=>{
         console.log("err");
       });

       client.close();
     }
});
});

module.exports = router;
