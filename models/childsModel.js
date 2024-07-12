const mongoose = require("mongoose");

const schema = new mongoose.Schema({
   _id:Number,
   fullname:String,
   age:Number,
   level: {
    type: String,
    enum: ["preKG", "KG1", "KG2"],
    default: null,
  },
   address:
   {city:String,
    street:String,
    building:Number},
})
module.exports = mongoose.model("childs",schema)