const mongoose = require('mongoose')

const Schema = mongoose.Schema

const logsSchema = new Schema({
    title:{type:String,required:true},
    entry:{type:String},
    shipIsBroken:{type:Boolean}
})

const Logdb = mongoose.model('logs', logsSchema)

module.exports= Logdb