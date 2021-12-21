const router = require('express').Router()
const ProductRoutes = require('./productRoutes')

router.get("/", (req,res) => {
    res.send("add /product/ to the url")
})
router.use('/product', ProductRoutes)

module.exports = router