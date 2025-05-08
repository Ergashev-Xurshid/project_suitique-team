import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logo } from '../assets'
import { menuItem } from '../utils/consttanta'
import { FiShoppingBag } from "react-icons/fi";
import { IoMenuSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';


function Navbar() {

  const {t,i18n } = useTranslation()

  const laungage = localStorage.getItem("i18nextLng") || "en"

  const [lng,setLng]=useState(laungage)

  useEffect(()=>{
    i18n.changeLanguage(lng)

  },[lng])
  

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
            className={`text-sm hover:text-gray-600 transition-colors cursor-pointer px-2 py-1 rounded `}            >  
              {t(item.item)}
          </NavLink>
        ))}
      </nav>
      <div className='flex items-center space-x-4'> 
        <div className='flex space-x-2 items-center'>
          <button 
            onClick={()=>setLng("en")}
            className={`
              ${lng == "en" ? "bg-black text-white": "text-black"}
              cursor-pointer px-2 py-1 text-xs rounded transition-all  font-medium
            `}>
            EN
          </button>
          <button 
            onClick={()=>setLng("ru")}
            className={`
              ${lng == "ru" ? "bg-black text-white": "text-black"}
              cursor-pointer px-2 py-1 text-xs rounded transition-all  font-medium
            `}>
            RU
          </button>
          <button 
            onClick={()=>setLng("de")}
            className={`
              ${lng == "de" ? "bg-black text-white": "text-black"}
              cursor-pointer px-2 py-1 text-xs rounded transition-all  font-medium
            `}>
            DE
          </button>
        </div>
        <Link
          className='p-2 hover:text-gray-600 transition-colors relative' 
          to="card">
            <FiShoppingBag />
            <span className='absolute -top-1 -right-1 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs'>
              2
            </span>
          </Link>
          <button className='p-2 md:hidden'>
            <IoMenuSharp  size={35}/>
          </button>
      </div>
    </section>
  )
}

export default Navbar