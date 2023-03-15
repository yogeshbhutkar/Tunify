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
        type: Date,
        required: true,
    },
    endTime:{
        type: Date,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, { timestamps:true } )

module.exports = mongoose.model("task", taskSchema)