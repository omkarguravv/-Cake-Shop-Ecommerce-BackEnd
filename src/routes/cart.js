const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const {  addToCart } = require('../controllers/cart');
const router = express.Router();

router.post('/user/cart/addtocart',addToCart);

module.exports = router;