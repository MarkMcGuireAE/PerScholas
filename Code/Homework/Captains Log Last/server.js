require("dotenv").config()
const express = require("express")
const app = express ()
const methodOverride = require("method-override")
const mongoConfig = require("./config")


const PORT = 2000

// const logs = []


// load our engine
const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//bring in router
const logRoutes = require("./routes/logRoutes")

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use("/logs", logRoutes)

// root route
app.get("/", (req, res) => {
    res.send("Hello World!")
})




// listen
app.listen(PORT, () => {
    console.log("listening on port:" + PORT, process.env.MONGO_URL)
    mongoConfig()
})

