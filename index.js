const express = require('express')
const customerRouter = require('./routes/customer.routes')
const ordersRouter = require('./routes/orders.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', customerRouter)
app.use('/api', ordersRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))