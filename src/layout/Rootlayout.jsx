import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Rootlayout() {
  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-transparent'>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </>
  )
}

export default Rootlayout