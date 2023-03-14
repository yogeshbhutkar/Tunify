import React from 'react'
import Tasks from '../components/Tasks'
import TaskForm from '../components/TaskForm'
import { useFetch } from '../hooks/useFetch.js'
import UserCard from '../components/UserCard'

export default function Home() {

    const {data, isPending, error, setData} = useFetch('/api/tasks')

  return (
    <div className='flex home'>
      <Tasks data={data} error={error} isPending={isPending} />
      <div className='flex-1'>
      <UserCard />
      <TaskForm setData={setData} data={data}/>
      </div>
    </div>
  )
}
