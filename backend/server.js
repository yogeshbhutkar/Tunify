require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const tasksRoute = require('./routes/tasksRoute')

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res)=>{
    return res.json({home: "this is the home route"})
})

app.use('/api/tasks/', tasksRoute)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //Listening for requests
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })

