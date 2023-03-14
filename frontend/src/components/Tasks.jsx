import DetailedTasks from './DetailedTasks'

import ClipLoader from 'react-spinners/ClipLoader';

export default function Tasks({ data, error, isPending }) {
    const errorMessage = 'Error occured while fetching data from the server'
  return (
    <div className='flex flex-col h-screen justify-center rounded-xl task-data mx-10 my-10 w-[75%]'>
      { error && <div className='font-bold text-red-500'>{errorMessage}</div> }
      <div className='flex-1 h-full transition-all'>
        { isPending ? (
          <div className='items-center  flex  justify-center'>
          <div className="loader-container spinner ">
            <ClipLoader color={'#fff'} size={150} />
          </div>
          </div>
      ) :(
          <div>
          { data && data.map((task)=>
            <div key={task._id} className='mx-7 mt-7'>
            <DetailedTasks title={task.title} description={task.description} id={task._id} />
          </div>
          )
        }
          </div>
        )
      }
      </div>
    </div>
  )
}
