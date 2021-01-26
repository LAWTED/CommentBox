const express=require('express');

var UserModel=require('../user');
var router= express.Router();


router.post("/",(req,res)=>{
  var ans=req.body;
  var u=new UserModel({
    body: ans.body,
    post: ans.post
  })
  
  u.save(function(err,a){
    if(err){
      console.log(err);
      return ;
    }
    res.send(a);
  })
  
})

router.get("/",(req,res)=>{
UserModel.find({},function(err,doc){
    if(err){
      console.log(err);
      return ;
    }
    res.send(doc);
  })
  
})

module.exports = router

