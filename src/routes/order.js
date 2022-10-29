const express = require('express');
const { setOrder, getOrders } = require('../controllers/order');
const order = require('../models/order');

const router = express.Router()



//API Routes
router.post('/order',setOrder);
// router.post('/order/get',);
router.get('/order/get',getOrders);


module.exports = router;