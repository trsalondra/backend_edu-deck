require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const deckRoutes = require("./routes/decks")
const cardRoutes = require("./routes/cards")
const userRoutes = require("./routes/users")

//express app
const app = express()

// connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true}, () => { 
    console.log("connected to db")})
    
//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(express.json())
app.use(cors({ origin: "*" })) 

// routes
app.use("/api/decks", deckRoutes)
app.use("/api/cards", cardRoutes)
app.use("/api/users", userRoutes)


app.listen(process.env.PORT, () => { 
    console.log("listening on port",process.env.PORT)
})