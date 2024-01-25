const mongoose = require("mongoose")

const Schema = mongoose.Schema

const logSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model("Log", logSchema)

