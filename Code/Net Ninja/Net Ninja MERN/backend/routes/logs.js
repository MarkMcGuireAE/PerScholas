const express = require ("express")
const {
    createLog,
    getLog,
    getLogs,
    deleteLog,
    updateLog
} = require ("../controllers/logControllers")


const router = express.Router ()

// GET all logs
router.get("/", getLogs)

//GET single log
router.get("/:id", getLog)

//POST a new log
router.post("/", createLog)

//DELETE  new log
router.delete("/:id", deleteLog)

//UPDATE a log
router.patch("/:id", updateLog)


module.exports = router