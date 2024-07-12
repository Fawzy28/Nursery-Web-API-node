const mongoose = require("mongoose");

const schema = new mongoose.Schema({
   _id:Number,
   name:String,
   supervisorid:{type:mongoose.ObjectId,ref:"teachers"},
   childrenids:[{type:Number,ref:"childs"}]
})
module.exports = mongoose.model("classes",schema)