const Router = require('express')
const router = new Router()
const customerController = require('../controllers/customer.controller')

router.post('/customer', customerController.createCustomer)
router.get('/customer', customerController.getCustomers)
router.get('/customer/:id', customerController.getOneCustomer)
router.put('/customer', customerController.updateCustomer)
router.delete('/customer/:id', customerController.deleteCustomer)


module.exports = router