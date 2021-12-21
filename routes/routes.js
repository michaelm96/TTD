const router = require('express').Router()
const ProductRoutes = require('./productRoutes')

router.use('/product', ProductRoutes)

module.exports = router