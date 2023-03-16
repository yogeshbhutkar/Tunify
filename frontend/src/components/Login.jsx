import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'

export default function Login() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')
    const navigate = useNavigate()

    const { signIn } = UserAuth()

    const handleSubmit = async (e) => {
        console.log(error)
        e.preventDefault()
        setError('')
        try {
            await signIn(email, password)
            navigate('/')
        }catch(e) {
            setError(e.message)
            console.log(e.message)
        }
      }

  return (
    <div className='items-center justify-center flex  w-full py-10 px-10 h-full'>
        <div className='form-bg px-10 py-10 rounded-xl flex-1 md:mx-60 xl:mx-64 lg:mx-64  mx-10 mt-10'>
            <h1 className='text-white font-semibold text-xl mb-5  justify-center flex'>Log In</h1>
            <form className='form-bg h-fit mt-10 px-7 justify-center rounded-xl' onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-white font-medium">Your email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' id="email" className="caret-white w-full text-white border focus:border-2 focus:border-yellow-500 focus:outline-none border-slate-500 p-2 rounded-lg input-element" placeholder="email" required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm text-white font-medium">Your password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name='password' id="password" className="caret-white w-full text-white border focus:border-2 focus:border-yellow-500 focus:outline-none border-slate-500 p-2 rounded-lg input-element" placeholder='password' required />
            </div>
            <div>
                <p className='text-white font-semibold text-md'>Don't have an account ?<span className='text-slate-400'> <Link to="/signup">Sign Up</Link></span></p>
            </div>
            <div className='items-center justify-center flex pt-3'>
                <button type="submit" className="items-center justify-center flex text-white bg-amber-500 px-8 py-2 rounded-lg text-center hover:bg-yellow-600 focus:ring-4 ">Log In</button>
            </div>
            </form>
        </div>
    </div>
  )
}
