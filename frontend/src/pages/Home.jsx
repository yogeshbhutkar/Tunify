import React from 'react'
import { useState } from 'react'
import Tasks from '../components/Tasks'
import TaskForm from '../components/TaskForm'
import UserCard from '../components/UserCard'
import { useFetch } from '../hooks/useFetch';

export default function Home() {

  const { data, isPending, error} = useFetch('/api/tasks')

  const todaysDate = new Date()
  const fullDate = todaysDate.getFullYear()+'-'+((todaysDate.getMonth()+1) < 10 ? ("0"+(todaysDate.getMonth()+1)):(todaysDate.getMonth()+1) )+"-"+todaysDate.getDate()
  const [dueDate, setDueDate] = useState(fullDate)

  return (
    <div className='flex home'>
      <Tasks data={data} isPending={isPending} error={error} defaultDate={dueDate}  />
      <div className='flex-1'>
      <UserCard />
      <TaskForm data={data} setDueDate={setDueDate} dueDate={dueDate}/>
      </div>
    </div>
  )
}
