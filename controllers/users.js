const User = require("../models/User")
require("dotenv").config()
const { registerValidation, loginValidation } = require("../middleware/validation")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const postSignup = async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body

    // validate user information
    try {
        const value = await registerValidation({ firstName, lastName, userName, email, password })
    }
    catch (err) {
        const { message } = err
        return res.status(400).send(message)
    }

    // check if user email already exists
    const emailExists = await User.findOne({ email: email })
    if (emailExists) {
        return res.status(400).send("Email already exists")
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    try {
        const user = await User.create({ firstName, lastName, userName, email, password: hashedPassword })
        res.status(200).json(user) // change message
    } catch (err) {
        res.status(400).json(err)
    }
}


const postLogin = async (req, res) => {
    const { email, password } = req.body

    // validate user information
    try {
        const value = await loginValidation({ email })
    }
    catch (err) {
        const { message } = err
        return res.status(400).send(message)
    }

    // check if user email exists
    const user = await User.findOne({ email: email })
    if (!user) {
        return res.status(400).send("Invalid email")
    }

    // checking if password is correct
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
        return res.status(400).send("Invalid password")
    }

    // create and assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: "2d" })
    res.header("auth-token", token)

    // login user
    return res.send("Logged in!")
}

const deleteAllUsers = async (req, res) => {
    await User.deleteMany({});
    res.send('All users have been deleted');
  }

module.exports = {
    postSignup,
    postLogin, 
    deleteAllUsers
}