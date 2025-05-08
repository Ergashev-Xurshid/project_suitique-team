import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logo } from '../assets'
import { menuItem } from '../utils/consttanta'
import { FiShoppingBag } from "react-icons/fi";

function Navbar() {
  return (
    <section className='container mx-auto px-4 flex items-center justify-between'>
      <Link to={"/"} className='cursor-pointer'>
        <img className='w-[60px]' src={logo} alt="logo" />
      </Link>
      <nav className='hidden md:flex items-center space-x-8'>
        {menuItem.map( (item , index )=>(
          <NavLink 
            key={index} 
            to={item.path}
            className={({ isActive }) =>
              `text-sm hover:text-foreground/70 transition-colors cursor-pointer px-2 py-1 rounded ${
                isActive ? 'bg-primary text-primary-foreground' : ''
              }`
            }
            >  
              {item.item}
          </NavLink>
        ))}
      </nav>
      <div className='flex items-center space-x-4'> 
        <div className='flex space-x-2 items-center'>
          <button className='cursor-pointer px-2 py-1 text-xs rounded transition-all bg-primary text-primary-foreground font-medium'>
            EN
          </button>
          <button className='cursor-pointer px-2 py-1 text-xs rounded transition-all bg-primary text-primary-foreground font-medium'>
            RU
          </button>
          <button className='cursor-pointer px-2 py-1 text-xs rounded transition-all bg-primary text-primary-foreground font-medium'>
            DE
          </button>
        </div>
        <Link
          className='p-2 hover:text-foreground/70 transition-colors relative' 
          to="card">
            <FiShoppingBag />
            <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-xs'>
              2
            </span>
          </Link>
      </div>
    </section>
  )
}

export default Navbar