require('dotenv').config()

const PORT = process.env.PORT || 5000

const express = require('express')

const usersRoutes = require('./routes/users.js')

const midlogRequest = require('./middleware/logs.js')

const app = express();

app.use(midlogRequest)
app.use(express.json())

app.use("/users", usersRoutes)

app.listen(PORT, () => {
    console.log(`Server successfully running at port ${PORT}`)
})