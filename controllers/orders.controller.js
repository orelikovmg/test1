const db = require('../db')
class OrdersController{
    async createOrder(req, res) {
        const {order_number, order_description, price, order_customer_id} = req.body
        const newOrder = await db.query(`INSERT INTO orders (order_number, order_description, price, order_customer_id) values ($1, $2, $3, $4) RETURNING *`,
            [order_number, order_description, price, order_customer_id])
        res.json(newOrder.rows[0])
    }

    async gerOrdersByCustomer(req, res) {
        const id = req.query.id
        const orders = await db.query(`SELECT * FROM orders WHERE order_customer_id = $1`, [id])
        res.json(orders.rows)
    }

    async getOrders(req, res) {
        const orders = await db.query('SELECT * FROM orders')
        res.json(orders.rows)
    }
}

module.exports = new OrdersController()