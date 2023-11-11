const express = require('express')
const { createNewUser } = require('./userControllers')
const router = express.Router()


router.get("/", (req, res) => {
    res.send("Hello World!")
})

router.post("/user", createNewUser)

module.exports = router