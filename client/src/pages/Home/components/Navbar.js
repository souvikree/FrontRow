import React from 'react'
import logo from "./logo.png"
export default function Navbar() {
  return (
	<>
<nav className=" backdrop-blur-3xl bg-transparent flex">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
	   <div className="flex flex-shrink-0 items-center ">
	  	<img src={logo} alt="Logo" className='fixed left-5 h-[4em]'/>
        </div>
        <div className=" flex">
          <div className="flex space-x-4 items-center">
            <a href="/" className="rounded-3xl px-6 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white hover:border-[1px] hover:border-gray-100">Movies</a>
            <a href="/" className="rounded-3xl px-6 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white">Theaters</a>
            <a href="/" className="rounded-3xl px-6 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white">My-Movies</a>
            <a href="/" className="rounded-3xl px-6 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white">My-theaters</a>
            <a href="/" className="rounded-3xl px-6 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white">About</a>
          </div>
		  <div className='fixed right-7'>
			<a href="/" className="rounded-3xl px-6 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white border-[2px] ">Log in</a>
			<a href="/" className=" ml-6 rounded-3xl px-6 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white border-[2px]">Register</a>
			</div>
        </div>
      </div>
    </div>
  </div>
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div>
</nav>
	</>
  )
}
