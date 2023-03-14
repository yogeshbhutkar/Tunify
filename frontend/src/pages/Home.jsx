import React from 'react'
import Tasks from '../components/Tasks'
import TaskForm from '../components/TaskForm'
import { useFetch } from '../hooks/useFetch.js'

export default function Home() {

    const {data, isPending, error, setData} = useFetch('/api/tasks')

  return (
    <div className='flex'>
      <Tasks data={data} error={error} isPending={isPending} />
      <TaskForm setData={setData} data={data}/>
    </div>
  )
}
