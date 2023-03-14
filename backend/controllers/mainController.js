const taskModel = require("../models/Tasks")
const mongoose = require("mongoose")

//get all tasks
const getTasks = async (req, res) => {
    const tasks = await taskModel.find({}).sort({createdAt: -1})
    
    return res.status(200).json(tasks)
}


//get a single task
const getTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such task"})
    }
    
    const task = await taskModel.findById(id)
    
    if (!task){
        return res.status(404).json({error: "No such task"})
    }
    
    return res.status(200).json(task)
}


//create a task
const createTask = async (req, res) => {
    const {title, description, dueDate, startTime, endTime} = req.body
    
    try {
        const task = await taskModel.create({title, description, dueDate, startTime, endTime})
        
        return res.status(200).json(task)
    }catch(err){
        return res.status(400).json({error: err.message})
    
    }
}


//delete a task
const deleteTask = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No task found"})
    }
    
    const task = await taskModel.findOneAndDelete({_id: id})
    
    if (!task){
        return res.status(400).json({error: "No task found"})
    }
    
    return res.status(200).json(task);
}



//update a task
const updateTask = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No task found"})
    }
    console.log(req.body)
    const task = await taskModel.findOneAndUpdate({ _id: id },{ ...req.body })
    
    if (!task){
        return res.status(400).json({error: "No task found"})
    }
    
    return res.status(200).json(task)
}

module.exports = { createTask, getTask, getTasks, updateTask, deleteTask }