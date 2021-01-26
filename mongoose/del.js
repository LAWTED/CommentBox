var UserModel=require('./user');

UserModel.deleteOne({},function(err,res){
  if(err){
    return console.log(err);
  }
  console.log("成功");
})