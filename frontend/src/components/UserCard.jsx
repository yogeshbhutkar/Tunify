import React from 'react'

export default function UserCard() {
  return (
        <div className='mr-10 pt-10'>
        <div className="w-full h-fit max-w-sm border-gray-200 rounded-lg shadow UserCard">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436181.jpg?w=826&t=st=1678808219~exp=1678808819~hmac=731a01c42a38d456c430461ee2d378dc7aec0c40f15bcd8a1ad911308a388702" alt='demo'/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-amber-500">Sign Out</a>
                </div>
            </div>
        </div>
    </div>
  )
}
