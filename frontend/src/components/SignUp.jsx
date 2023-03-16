import React, { useState } from 'react'
// import { useCallback } from 'react'
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { UserAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function SignUp() {

    const navigate = useNavigate()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')
    
    const { createUser } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(error)
        setError('')
        try {
            await createUser(email, password)
            navigate('/')
        }catch(e) {
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
    <div className='items-center justify-center flex  w-full py-10 px-10 h-full'>
        <div className='form-bg px-10 py-10 rounded-xl flex-1 md:mx-64 xl:mx-64 lg:mx-64  mx-10 mt-10'>
            <h1 className='text-white font-semibold text-xl mb-5  justify-center flex'>Sign Up</h1>
            <form className='form-bg h-fit mt-10 px-7 justify-center rounded-xl' onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-white font-medium">Your email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' id="email" className="caret-white w-full text-white border focus:border-2 focus:border-yellow-500 focus:outline-none border-slate-500 p-2 rounded-lg input-element" placeholder="email" required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm text-white font-medium">Your password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" password="password" id="password" className="caret-white w-full text-white border focus:border-2 focus:border-yellow-500 focus:outline-none border-slate-500 p-2 rounded-lg input-element" placeholder='password' required />
            </div>
            <div>
                <p className='text-white font-semibold text-md'>Don't have an account ?<span className='text-slate-400'> <Link to="/login">Login</Link></span></p>
            </div>
            <div className='items-center justify-center flex pt-3'>
                <button type="submit" className="items-center justify-center flex text-white bg-amber-500 px-8 py-2 rounded-lg text-center hover:bg-yellow-600 focus:ring-4 ">Sign Up</button>
            </div>
            </form>
        </div>
    </div>
  )
}
