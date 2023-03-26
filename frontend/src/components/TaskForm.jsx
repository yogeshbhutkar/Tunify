import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserAuth } from '../context/AuthContext'

export default function TaskForm({setDueDate, dueDate, data}) {

    const navigate = useNavigate()
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [error, setError] = useState(null)
    const {user} = UserAuth()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const uniqueID = user.uid
        const task = {title, description, dueDate, startTime, endTime, uniqueID}

        //Checking for overlaps
        for (var i=0; i<data.length; i++){
            console.log(data[i])
            console.log(data[i].dueDate)
            console.log(dueDate)
            if (data[i]?.dueDate.substring(0,10)===dueDate && user.uid===data[i].uniqueID){
                console.log("inside for")
                if (data[i].startTime<=startTime && data[i].endTime>=endTime){
                    console.log("Error caught 1")
                    setError('Overlap detected, kindly delete and proceed')
                    console.log(error)
                    return
                
                }else if (data[i].startTime >= startTime && data[i].endTime >=endTime && startTime <= data[i].endTime && endTime>=data[i].startTime){
                    console.log("error caught 2")
                    setError('Overlap detected, kindly delete and proceed')
                    return
                }else if (data[i].startTime<=startTime && startTime<=data[i].endTime && endTime>=data[i].startTime && endTime>=data[i].endTime){
                    console.log("error caught 3")
                    setError('Overlap detected, kindly delete and proceed')
                    return
                }else if (startTime<=data[i].startTime && startTime <= data[i].endTime && endTime>=data[i].startTime && endTime>=data[i].endTime){
                    console.log("error caught 4")
                    setError('Overlap detected, kindly delete and proceed')
                    return
                }
            }
        }

        console.log(task)
        if (startTime===endTime){
            setError("The appointment cannot start and end at the same time.")
            return
        }
        if (startTime>=endTime){
            setError("The appointment must start before it ends.")
            return
        }
        const response = await fetch('https://tunify.onrender.com/api/tasks', {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        }) 
        const json = await response.json()
        if (!response.ok){
            setError(response.error)
        }
        if (response.ok){
            setTitle('')
            setDescription('')
            setDueDate('')
            setStartTime('')
            setEndTime('')
            setError(null)
            console.log("new appointment added", json)
            navigate(0)
        }
    }

  return (
    <div className='form-bg h-fit mt-10 p-7 rounded-xl flex-1 mr-10'>
    <form className='' onSubmit={handleSubmit}>
    <p className='pb-7 font-semibold text-lg text-white text-center'>Add an appointment</p>
    <div className="mb-6">
        <label htmlFor="title" className=" block mb-2 text-sm text-white font-medium">Your title</label>
        <input 
            type="text" 
            id="title" 
            className="caret-white w-full text-white border focus:border-2 focus:border-yellow-500 focus:outline-none border-slate-500 p-2 rounded-lg input-element" 
            value={title}
            placeholder="Study Math" 
            onChange={(e)=>{setTitle(e.target.value)}}
            required />
    </div>
    <div className="mb-6">
        <label htmlFor="description" className="block mb-2 text-sm text-white font-medium">Your description</label>
        <textarea 
            id="description" 
            placeholder='45 mins study 15 mins break' 
            className="p-2 rounded-lg input-element text-white w-full focus:border-2 focus:border-yellow-500 focus:outline-none caret-white border border-slate-500" 
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
            required />
    </div>
    <div className='mb-6'>
    <label htmlFor="dueDate" className=" text-white block mb-2 text-sm font-medium">Date</label>
        <input 
            type="date" 
            id="dueDate" 
            className="p-2 border border-slate-500 w-full focus:border-2 focus:border-yellow-500 focus:outline-none rounded-lg input-element text-slate-400" 
            value={dueDate}
            onChange={(e)=>{setDueDate(e.target.value)}}
            required />
    </div>
    <div className="mb-6">
        <label htmlFor="startTime" className=" text-white block mb-2 text-sm font-medium">Start time</label>
        <input 
            type="time" 
            id="startTime" 
            className="p-2 border border-slate-500 w-full focus:border-2 focus:border-yellow-500 focus:outline-none rounded-lg input-element text-slate-400" 
            value={startTime}
            onChange={(e)=>{setStartTime(e.target.value)}}
            required />
    </div>
    <div className="mb-6">
        <label htmlFor="startTime" className=" text-white block mb-2 text-sm font-medium">End time</label>
        <input 
            type="time" 
            id="startTime" 
            className="p-2 border border-slate-500 w-full focus:border-2 focus:border-yellow-500 focus:outline-none rounded-lg input-element text-slate-400" 
            value={endTime}
            onChange={(e)=>{setEndTime(e.target.value)}}
            required />
    </div>
    
    <div className='items-center justify-center flex pt-3'>
        <button type="submit" className="items-center justify-center text-white bg-amber-500 px-8 py-2 rounded-lg text-center hover:bg-yellow-600 focus:ring-4 ">Add</button>
    </div>
    {
        error && 
        (
            <div className='text-red-500 text-center pt-5 font-bold'>
                {error}
            </div>
        )
    }
    </form>
    </div>
  )
}
