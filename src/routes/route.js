const express = require('express');
const router = express.Router();

const UserController= require('../controllers/userController')
const ProductController= require('../controllers/productController')
const middleWare = require('../middleware/mid1')
const OrderController = require('../controllers/orderController')





router.post("/createUser", middleWare.vallidator, UserController.createUser )

router.post("/createProduct", ProductController.createProduct  )

router.post("/createOrder", middleWare.vallidator, OrderController.createOrder )

module.exports = router;