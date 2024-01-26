const logs = []
const Logdb = require("../models/Logdb")


// index route
const logIndex = async (req, res) => {

    let data
    try {
    data = await Logdb.find()
    console.log("data from mongo:", data)}
    catch (err) {
        console.log("data error", err)
    }
    res.render("Index", { logs: logs})
}

// new route
const logNew = (req, res) => {
    res.render("New")
}

// show route
const logShow = async (req, res) => {
    console.log(req.params.id)

    const data = await Logdb.findById(req.params.id)
    console.log(data)

    res.render("Show", { log: logs[req.params.index], index: [req.params.index]})
}

// edit route
const logEdit = (req, res) => {
    res.render("Edit", { log: logs[req.params.index], index: [req.params.index]})
}

// create route
const logCreate = async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.readyToEat = false
    }
    logs.push(req.body)
    console.log(req.body)
    console.log(logs)

    try {
        const result = await Logdb.create(req.body)
        console.log("data saved", result)
    }
    catch (err) {
        console.log("data error", err)
    }

    res.redirect("/logs")
}

// destroy route
const logDelete = (req,res) => {
    logs.splice(req.params.index, 1)
    res.redirect("/logs")
}

// Update route
const logUpdate = (req, res) => {
    console.log("update")
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.readyToEat = false
    }
    logs[req.params.index] = req.body
    res.redirect(`/logs/${req.params.index}`)
}

module.exports = {
    logIndex,
    logNew,
    logShow,
    logEdit,
    logCreate,
    logDelete,
    logUpdate
}

