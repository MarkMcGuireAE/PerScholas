require("dotenv").config()

const express = require ("express")
const mongoose = require ("mongoose")
const logRoutes = require("./routes/logs")

// express app
const app = express ()

//load engine
const jsxEngine = require("jsx-view-engine");

//setup engine
app.set("view engine", "jsx")
app.engine('jsx', jsxEngine())


// middleware

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()

})

// route pointing to route folder
app.use("/", logRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
    console.log("connected to db & listening on port", process.env.PORT)
})
})
.catch((error) => {
    console.log(error)
})



// process.env

