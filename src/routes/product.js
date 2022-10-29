const express = require('express');
const { createProduct, getProducts, getProductsByID, getPro } = require('../controllers/product');
const multer = require('multer');
const shortid = require('shortid');
const router = express.Router();
const path = require('path');


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(path.dirname(__dirname),"uploads"));
//   },
//   filename: function (req, file, cb) {
    
//     cb(null,shortid.generate() + '-' + file.originalname)
//   }
// })
// const upload = multer({storage})
// upload.single("img")
router.post("/product/create",createProduct);
router.get("/product/get",getPro)
router.get("/product/:id",getProductsByID)
router.get("/product/get/:flav",getProducts)

module.exports = router;



