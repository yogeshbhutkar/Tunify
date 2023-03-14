import React, { useState } from 'react'

export default function DetailedTasks({title, description, id}) {
    const [error, setError] = useState()

    const handleDelete = async (id) => {


        const response = await fetch(`/api/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()
        if (!response.ok){
            setError(response.error)
        }
        if (response.ok){
            console.log("deleted successfully", json)
        }
    }

    console.log(id)

  return (
    <div className=" flex">
        <div className="bg-white p-10 rounded-lg shadow-md">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="mt-4 mb-10">
                <p className="text-gray-600">{description}</p>
            </div>
            <button onClick={()=>handleDelete(id)} className='bg-blue-600 px-2 py-2 rounded-lg text-white'>delete</button>
            { error && <div className='text-red-500 font-semibold'>Some error occured</div> } 
        </div>
    </div>
  )
}
