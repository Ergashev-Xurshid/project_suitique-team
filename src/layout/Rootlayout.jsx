import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

function Rootlayout() {
  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-90 transition-all duration-300 py-4 bg-[#fffc] '>
        <Navbar/>
      </header>
      <main className='flex-grow pt-16 '>
        <Outlet/>
        <ToastContainer />
      </main>
      <footer className='bg-[#f4f4f4] pt-16 pb-8 mt-auto'>
        <Footer/>
      </footer>
    </>
  )
}

export default Rootlayout