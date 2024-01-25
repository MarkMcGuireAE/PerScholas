const logs = []


// index route
const logIndex = (req, res) => {
    res.render("Index", { logs: logs})
}

// new route
const logNew = (req, res) => {
    res.render("New")
}

// show route
const logShow = (req, res) => {
    res.render("Show", { log: logs[req.params.index], index: [req.params.index]})
}

// edit route
const logEdit = (req, res) => {
    res.render("Edit", { log: logs[req.params.index], index: [req.params.index]})
}

// create route
const logCreate = (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.readyToEat = false
    }
    logs.push(req.body)
    console.log(req.body)
    console.log(logs)
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

