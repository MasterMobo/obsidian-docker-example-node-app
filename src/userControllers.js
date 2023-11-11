const User = require("./UserSchema")

const createNewUser = async (req, res) => {
    const {username, password} = req.body

    const newUser = await User.create({username, password})
    res.status(200).json(newUser)
}

module.exports = {createNewUser}