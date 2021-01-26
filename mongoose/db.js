const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/users',{useNewUrlParser:true},(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("数据库连接成功");
})
//定义一个Schema Schema里面对象和数据库里面字段要一一对应


module.exports=mongoose;