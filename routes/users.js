const router = require("express").Router()
const userController = require("../controllers/users")

// signup user
router.post("/signup", userController.postSignup)

// login user
router.post("/login", userController.postLogin )

// deleteAllUsers
router.delete("/deleteAllUsers", userController.deleteAllUsers )

module.exports = router