const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {

    try {
        const token = req.header("auth-token")
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
        const userId = decodedToken._id
        req.body.userId = userId
        next()
    } catch(err) {
        res.status(400).send("You are not an authenticated user")
    }
}
