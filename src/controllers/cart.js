const Product = require('../models/product')
const Cart = require("../models/cart")
exports.addToCart = async (req,res)=>{
    const {user_id , product_id} = req.body
    const product = await Product.find({_id:product_id});
    console.log(product)
    
    Cart.findOne({ user_id: req.body.user_id })
        .exec((err, cart) => {
            if (err) return res.status(401).json({ err })
            if (cart) {
                const item = cart.cartItems.find(c => c.product._id == product._id)
               
                if (cart.cartItems.find(c => c.product == product_id)) {
                    res.status(400).json({message:"already present in cart "})
                
                } else {
                    condition = { user_id: req.body.user_id }
                    update = {
                        "$push": {
                            "cartItems": [...product]
                        }
                    }
                    Cart.findOneAndUpdate(condition, update)
                        .exec((err, _cart) => {
                            if (err) return res.status(400).json({ err })
                            if (_cart) {
                                return res.status(201).json({ cart })
                            }
                        })
                }

            } else {
                const cart = new Cart(
                    {
                        user_id: req.body.user_id,
                         "$push": {
                            "cartItems": [...product]
                        }
                    }
                )

                cart.save((err, cart) => {
                    if (err) return res.status(401).json({ err })
                    if (cart) return res.status(201).json({ cart })
                })
            }

        })
   
}