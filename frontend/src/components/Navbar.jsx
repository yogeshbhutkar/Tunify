import React from 'react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
  <div className="max-w-5xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-2xl text-gray-900 font-semibold">Tunify</span>
      <div className="flex space-x-4 text-gray-900">
        <a href="/">Log out</a>
      </div>
    </div>
  </div>
</nav>
  )
}
