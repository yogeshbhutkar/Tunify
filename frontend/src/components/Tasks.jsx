import DetailedTasks from './DetailedTasks'

import ClipLoader from 'react-spinners/ClipLoader';

export default function Tasks({ data, error, isPending }) {
    console.log("data in tasks"+data)
    const errorMessage = 'Error occured while fetching data from the server'
  return (
    <div className='flex flex-col justify-center rounded-xl task-data mx-10 my-10 w-[75%]'>
      { error && <div className='font-bold text-red-500'>{errorMessage}</div> }
      <div className='lg:w-[92%] md:w-[90%] w-[80%] h-full transition-all'>
        { isPending ? (
          <div className='items-center  flex  justify-center'>
          <div className="loader-container spinner">
            <ClipLoader color={'#fff'} size={150} />
          </div>
          </div>
      ) :(
          <div>
          { data && data.map((task)=>
            <div key={task._id} className='mx-10 w-full my-7'>
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
