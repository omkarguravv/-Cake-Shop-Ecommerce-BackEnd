const express = require('express');
const { order, paymentVerify } = require('../controllers/payment');

const router = express.Router()



//API Routes
router.post('/payment/order',order);
router.post('/payment/paymentVerify',paymentVerify)


module.exports = router;