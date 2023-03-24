const Router = require('express')
const router = new Router()
const ordersController = require('../controllers/orders.controller')

router.post('/orders', ordersController.createOrder)
router.get('/orders', ordersController.gerOrdersByCustomer)
router.get('/orders_all', ordersController.getOrders)


module.exports = router