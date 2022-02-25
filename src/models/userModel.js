const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
      firstName:String,
      UserName:String,
      moblie:{
          type:String,
          unique: true,
          required: true,
      },
      emailId:String,
      gender:{
          type:String,
          enum:["male", "female", "LGBTQ"]
      },
      age:Number 
    },{timeStamps:true}
);



module.exports = mongoose.model('user', userSchema);