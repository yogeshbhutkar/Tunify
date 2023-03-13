const express = require("express")
const { createTask, 
        getTask, 
        getTasks, 
        updateTask, 
        deleteTask } = require("../controllers/mainController")

const router = express.Router()

//GET all Tasks
router.get('/', getTasks)

//GET a single Tasks
router.get('/:id', getTask)

//POST a new Tasks
router.post('/', createTask)

//DELETE a Tasks
router.delete('/:id', deleteTask)

//UPDATE a Tasks
router.patch('/:id', updateTask)

module.exports = router