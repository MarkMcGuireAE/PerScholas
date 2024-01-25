const Log = require ("../models/logModel")
const mongoose = require("mongoose")

// get all logs
const getLogs = async (req, res) => {

    const logs = await Log.find({}).sort({createdAt: -1})

    res.status(200).json(logs)
}

// get a single log
const getLog = async (req, res) => {
    
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such log"})
    }

    const log = await Log.findById(id)

    if (!log) {
        return res.status(404).json({error: "No such log"})
    }

    res.status(200).json(log)
}

// create a new log
const createLog = async (req,res) => {

    const {title, reps} = req.body

    //add doc to db

    try {
        const log = await Log.create({title, reps})
        res.status(200).json(log)

    } catch (error) {
        res.status(400).json({error: error.message})

    }
    
}

// delete a log
const deleteLog = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such log"})
    }

    const log = await Log.findOneAndDelete({_id : id})

    if (!log) {
        return res.status(404).json({error: "No such log"})
    }

    res.status(200).json(log)


}

// update a log

const updateLog = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such log"})
    }

    const log = await Log.findOneAndUpdate({_id : id}, {
        ...req.body
    })

    if (!log) {
        return res.status(404).json({error: "No such log"})
    }

    res.status(200).json(log)


}

module.exports = {
    createLog,
    getLogs,
    getLog,
    deleteLog,
    updateLog
}