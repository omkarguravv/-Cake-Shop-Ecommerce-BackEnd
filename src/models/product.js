const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    slug: { 
        type: String, 
        required: true,
        unique: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    quantity: {
        type: Number,
        
    },
    flavour:{
        type:String
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    offer: { type: Number },
   
    // img :{
    //      data: Buffer,
    //      contentType:String
    // },
    img :{
            type:String,
            required : true
    },
    reviews: [
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    category: { type: String , required: true },
    

}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);