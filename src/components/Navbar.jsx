import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default function Navbar() {
  return (
    <main className='sticky top-0 '>
        <section className="mx-auto h-16 bg-sky-500 text-white shadow-lg flex  items-center justify-between">
        <div>
        <img src={logo} className="animate-spin ml-4" alt="logo" width={40} />
        </div>
        <div>
            <ul className='flex m-3 py-3 justify-center items-center gap-x-10'>

            <li className='hover:bg-sky-700 rounded-md px-4 duration-300 '>
            <Link to='/'>Home</Link>
            </li>
            <li className='hover:bg-sky-700 rounded-md px-4 duration-300 '>
            <Link to='/movies'>Movies</Link>
            </li>
            <li className='hover:bg-sky-700 rounded-md px-4 duration-300 '>
            <Link to='/news'>News</Link>
            </li>
            <li className='hover:bg-sky-700 rounded-md px-4 duration-300 '>
            <Link to='/weather'>Weather</Link>
            </li>
            </ul>
            </div>
        </section>
    </main>
  )
}
