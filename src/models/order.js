const mongoose = require("mongoose");
// A
const orderSchema = new mongoose.Schema(
 {
   user_id :{
     type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
   },
   product :{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Product",
      required : true
   },
   address :{
      type : String,
      required : true
   },
   nameonCake:{
      type:String
   },
   qty :{
    type : String
   },
   price :{
   type: Number,
   required:true
   }
 },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);