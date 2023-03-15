require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())

var corsOptions = {
    origin: 'https://tunify-yogeshbhutkar.vercel.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const tasksRoute = require('./routes/tasksRoute')

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.get('/',  cors(corsOptions), (req, res)=>{
    return res.json({home: "this is the home route"})
})

app.use('/api/tasks/',  cors(corsOptions), tasksRoute)

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

