//配置Schema

var mongoose=require('./db.js');

var UserSchema=mongoose.Schema({
  body: String,
  post: String
})

var UserModel=mongoose.model('user',UserSchema);

module.exports=UserModel;