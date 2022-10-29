const mongoose = require('mongoose');
const Product = require('../models/product')

const cartSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    
    cartItems: [
        {
            product: { type: mongoose.Schema.Types.Mixed, ref: 'Product', required: true },
          
        }
    ]
    

    
   
}, { timestamps: true });


module.exports = mongoose.model('Cart', cartSchema); 