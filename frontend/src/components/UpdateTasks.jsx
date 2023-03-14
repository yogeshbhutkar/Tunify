import React from 'react'

export default function UpdateTasks() {
  return (
    <div className='items-center justify-center flex w-full'>        
        <form>
        <div className='pt'>
            <label htmlFor="title">Title</label>
            <input type="text" className='' placeholder='' id='title'/>
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <input type="text" id='description'/>
        </div>
        <div>
            <input type="radio" id="completed" name="fav_language" value="HTML" />
            <label htmlFor="completed">Completed</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
  )
}
