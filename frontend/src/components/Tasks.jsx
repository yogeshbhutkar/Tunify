import DetailedTasks from './DetailedTasks'


export default function Tasks({ data, isPending, error }) {
    console.log("data in tasks"+data)
    const errorMessage = 'Error occured while fetching data from the server'
  return (
    <div className='flex col task-data mx-10 my-10 w-[75%]'>
      { error && <div className='font-bold text-red-500'>{errorMessage}</div> }
      { isPending && <div className='font-bold'>Loading ...</div> }
      { data && data.map((task)=>
      (<div key={task._id} className='mx-10 py-10'>
            <DetailedTasks title={task.title} description={task.description} id={task._id} />
      </div>)) }
    </div>
  )
}
