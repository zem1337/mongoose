const express = require('express')
const connectDB = require('./config/connectDB')
const contactrouter = require('./routes/contactRoutes')


const app  = express()

const port = 5000

connectDB()

app.use(express.json())

app.use('/api/contact',contactrouter)

app.listen(port, console.log(`Server is running on the port ${port}`))