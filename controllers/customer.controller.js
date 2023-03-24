const db = require('../db')
class CustomerController{
    async createCustomer(req, res) {
        const {firstname, lastname, phone, addr} = req.body
        //console.log(firstname, lastname, phone, addr)
        //res.json('ok')
        const newCustomer = await db.query(`INSERT INTO customer (firstname, lastname, phone, addr) values ($1, $2, $3, $4) RETURNING *`, [firstname, lastname, phone, addr])
        res.json(newCustomer.rows[0])
    }

    async getCustomers(req, res) {
        const customers = await db.query('SELECT * FROM customer')
        res.json(customers.rows)
    }

    async getOneCustomer(req, res) {
        const id = req.params.id
        const customer = await db.query('SELECT * FROM customer where customer_id = $1', [id])
        res.json(customer.rows[0])
    }

    async updateCustomer(req, res) {
        const {customer_id, firstname, lastname, phone, addr} = req.body
        const customer = await db.query(
            'UPDATE customer SET firstname = $1, lastname = $2, phone = $3, addr = $4 WHERE customer_id = $5 RETURNING *',
            [firstname, lastname, phone, addr, customer_id]
        )
        res.json(customer.rows[0])
    }

    async deleteCustomer(req, res) {
        const id = req.params.id
        const customer = await db.query('DELETE FROM customer where customer_id = $1', [id])
        res.json(customer.rows[0])
    }
}

module.exports = new CustomerController()