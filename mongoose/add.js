var UserModel=require('./user');

var u=new UserModel({
  body: "测试1",
  post: "2"
})

u.save(function(err){
  if(err){
    console.log(err);
    return ;
  }
  console.log("add success");
})
