const router = require('express').Router()
const ProductController = require('../controller/productController')

router.get('/', ProductController.get)

module.exports = router