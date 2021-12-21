const router = require('express').Router()
const ProductController = require('../controller/productController')

router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getById)
router.post('/', ProductController.create)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

module.exports = router