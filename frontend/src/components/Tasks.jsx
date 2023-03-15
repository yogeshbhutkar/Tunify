import DetailedTasks from './DetailedTasks'
import ClipLoader from 'react-spinners/ClipLoader';
import { UserAuth } from '../context/AuthContext'
export default function Tasks({ defaultDate, data, isPending, error}) {

  const { user } = UserAuth()

    const checkDate = (t) => {
      if (t.dueDate){
        return t.dueDate.substring(0,10)===defaultDate
      }
    }

    const checkUser = (t) => {
      if (t.uniqueID){
        return t.uniqueID===user.uid
      }
    }


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
          { data && data.filter(checkDate).filter(checkUser).map((task)=>
            (<div key={task._id} className='mx-7 mt-7'>
            <DetailedTasks title={task.title}  description={task.description} id={task._id} />
          </div>)
          )
        }
          </div>
        )
      }
      </div>
    </div>
  )
}
