import React, { useState } from 'react'

export default function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const task = {title, description, dueDate, startTime, endTime}
        const response = await fetch('/api/tasks', {
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
    <div className="mb-6">
        <label htmlFor="startTime" className=" text-white block mb-2 text-sm font-medium">Start time</label>
        <input 
            type="time" 
            id="startTime" 
            className="p-2 border border-slate-500 w-full focus:border-2 focus:border-yellow-500 focus:outline-none rounded-lg input-element text-slate-400" 
            value={dueDate}
            onChange={(e)=>{setStartTime(e.target.value)}}
            required />
    </div>
    <div className="mb-6">
        <label htmlFor="startTime" className=" text-white block mb-2 text-sm font-medium">End time</label>
        <input 
            type="time" 
            id="startTime" 
            className="p-2 border border-slate-500 w-full focus:border-2 focus:border-yellow-500 focus:outline-none rounded-lg input-element text-slate-400" 
            value={dueDate}
            onChange={(e)=>{setEndTime(e.target.value)}}
            required />
    </div>
    <div className='mb-6'>
    <label htmlFor="dueDate" className=" text-white block mb-2 text-sm font-medium">Date</label>
        <input 
            type="date" 
            id="dueDate" 
            className="p-2 border border-slate-500 w-full focus:border-2 focus:border-yellow-500 focus:outline-none rounded-lg input-element text-slate-400" 
            required />
    </div>
    <div className='items-center justify-center flex pt-3'>
        <button type="submit" className="items-center justify-center text-white bg-amber-500 px-8 py-2 rounded-lg text-center hover:bg-yellow-600 focus:ring-4 ">Add</button>
    </div>
    {
        error && 
        (
            <div className='text-red-600 font-bold'>
                Some error occured, please retry.
            </div>
        )
    }
    </form>
    </div>
  )
}
