import React, { useState } from 'react'

export default function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const task = {title, description, dueDate}
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
            setError(null)
            console.log("new appointment added", json)
        }
    }


  return (
    <div className='form-bg px-5 h-fit mt-10 p-7 rounded-lg'>
    <form className='pb=10' onSubmit={handleSubmit}>
    <p className='pb-5 font-bold'>Add an appointment</p>
    <div className="mb-6">
        <label htmlFor="title" className="block mb-2 text-sm font-medium">Your title</label>
        <input 
            type="text" 
            id="title" 
            className="" 
            value={title}
            placeholder="Study Math" 
            onChange={(e)=>{setTitle(e.target.value)}}
            required />
    </div>
    <div className="mb-6">
        <label htmlFor="description" className="block mb-2 text-sm font-medium">Your description</label>
        <textarea 
            id="description" 
            placeholder='45 mins study 15 mins break' 
            className="" 
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
            required />
    </div>
    <div className="mb-6">
        <label htmlFor="dueDate" className="block mb-2 text-sm font-medium">Time slot</label>
        <input 
            type="date" 
            id="description" 
            className="" 
            value={dueDate}
            onChange={(e)=>{setDueDate(e.target.value)}}
            required />
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
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
