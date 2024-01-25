const logController = require ("../controllers/logController")

const express = require("express")

const router = express.Router()

// const logs = []


// index route
router.get("/", logController.logIndex)

// new route
router.get("/new", logController.logNew)

// show route
router.get("/:index", logController.logShow)

// edit route
router.get("/:index/edit", logController.logEdit)

// create route
router.post("/",  logController.logCreate)

// destroy route
router.delete('/:index',  logController.logDelete)


// Update route
router.put("/:index", logController.logUpdate)

module.exports = router