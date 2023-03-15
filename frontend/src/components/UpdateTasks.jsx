import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'

export default function UpdateTasks() {

  const params = useParams()
  const navigate = useNavigate()
  
  
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ error, setError ] = useState(null)
  
  const { data } = useFetch(`/api/tasks/${params.id}`)
  if (data && (title==='' || description==='')){
    setTitle(data['title'])
    setDescription(data['description'])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let task = {}

    //Including description and title, all permutations

    if (description==='' && title===''){
      task = {}
    }else if (description!=='' && title===''){
      task = {description}
    }else if (description==='' && title!==''){
      task = {title}
    }else{
      task = {title, description}
    }


        const response = await fetch(`/api/tasks/${params.id}`, {
            method: "PATCH",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        }) 
        const json = await response.json()
        if (!response.ok){
            setError(response.error)
            console.log(error)
        }
        if (response.ok){
            setTitle('')
            setDescription('')
            setError(null)
            console.log("Appointment updated", json)
            navigate('/')
        }
  }

  return (
    <div className='items-center justify-center flex w-full py-10 px-10 h-full'>      
        <div className='form-bg px-10 py-10 rounded-xl flex-1 md:mx-60 xl:mx-60 lg:mx-60  mx-10 mt-10'>  
          <form onSubmit={handleSubmit}>
            <h1 className='text-white font-semibold text-xl mb-5  justify-center flex'>Update Appointment</h1>
          <div className='pt'>
              <label htmlFor="title" className=' block mb-2 text-sm text-white font-medium'>Title</label>
              <input 
                type="text" 
                className='caret-white w-full text-white border focus:border-2 focus:border-yellow-500 focus:outline-none border-slate-500 p-2 rounded-lg input-element' 
                placeholder={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                id='title'/>
          </div>
          <div className='py-5'>
              <label htmlFor="description" className=' block mb-2 text-sm text-white font-medium'>Description</label>
              <input 
                type="text" 
                className='caret-white w-full text-white border focus:border-2 focus:border-yellow-500 focus:outline-none border-slate-500 p-2 rounded-lg input-element' 
                id='description'
                placeholder={description}
                onChange={(e)=>{setDescription(e.target.value)}} />
          </div>
          <div className='items-center justify-center flex pt-3'>
        <button type="submit" className="items-center justify-center text-white bg-amber-500 px-8 py-2 rounded-lg text-center hover:bg-yellow-600 focus:ring-4 mt-3">Save</button>
            </div>
          </form>
        </div>
    </div>
  )
}
