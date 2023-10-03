const express = require('express')
const userRoutes = require('./routes/userRoutes')
const app = express()
const connect = require('./helpers/dbConnect')
require('dotenv').config()
connect()

app.use(express.json())
app.use("/api",userRoutes)

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))