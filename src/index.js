const express = require('express')
const app = express()
require('express-async-errors');

const cors = require('cors')

const { connectDB } = require('./connect')
const router = require("./routes")
const errorHandler = require('./errorHandler')
app.enable("trust proxy")

app.use(cors())
app.use(express.json())

app.use("/api/v1", router)

app.use(errorHandler)

const PORT = require('../config/env').PORT || 3000

const start = async () => {
    await connectDB();
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
}
start()