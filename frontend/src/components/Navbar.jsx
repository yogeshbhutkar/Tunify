import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 navbar-color backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-600">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl text-white font-semibold">Tunify</Link>
          <div className="flex space-x-4 text-white">
            <p>Dashboard</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
