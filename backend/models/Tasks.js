const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime:{
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    uniqueID: {
        type: String,
        required: true,
    }
}, { timestamps:true } )

module.exports = mongoose.model("task", taskSchema)