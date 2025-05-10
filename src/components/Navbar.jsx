import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logo } from '../assets'
import { menuItem } from '../utils/consttanta'
import { FiShoppingBag } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {

  const { t, i18n } = useTranslation()

  const laungage = localStorage.getItem("i18nextLng") || "en"

  const [lng, setLng] = useState(laungage)

  useEffect(() => {
    i18n.changeLanguage(lng)

  }, [lng])

<<<<<<< HEAD

  const [openMenu, setOpenMenu] = useState(false)



  useEffect(() => {
  AOS.init({
    duration:500, 
    once: true,    
  });
}, []);
=======
>>>>>>> d6ca1163853739f25a419c58ee96d8d6e3fe6cab

  return (
    <section className='container  mx-auto px-10 flex items-center justify-between'>
      <Link to={"/"} className='cursor-pointer'>
        <img className='w-[60px]' src={logo} alt="logo" />
      </Link>
<<<<<<< HEAD
      <nav className='hidden md:flex items-center space-x-4'>
=======
      <nav className='hidden md:flex items-center space-x-8'>
>>>>>>> d6ca1163853739f25a419c58ee96d8d6e3fe6cab
        {menuItem.map((item, index) => (
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
            onClick={() => setLng("en")}
            className={`
              ${lng == "en" ? "bg-black text-white" : "text-black"}
              cursor-pointer px-2 py-1 text-xs rounded transition-all  font-medium
            `}>
            EN
          </button>
          <button
            onClick={() => setLng("ru")}
            className={`
              ${lng == "ru" ? "bg-black text-white" : "text-black"}
              cursor-pointer px-2 py-1 text-xs rounded transition-all  font-medium
            `}>
            RU
          </button>
          <button
            onClick={() => setLng("de")}
            className={`
              ${lng == "de" ? "bg-black text-white" : "text-black"}
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
<<<<<<< HEAD
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden relative w-[36px] h-8 m-0 flex flex-col justify-between items-center p-2 group focus:outline-none z-50"
        >
          <span
            className={`w-full h-1 bg-black rounded transform transition duration-300 ease-in-out origin-center 
            ${openMenu ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span
            className={`w-full h-1 bg-black rounded transform transition duration-300 ease-in-out origin-center 
            ${openMenu ? 'opacity-0' : ''}`}
          ></span><span
            className={`w-full h-1 bg-black rounded transform transition duration-300 ease-in-out origin-center 
            ${openMenu ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        { openMenu && <div data-aos="fade-up" className='md:hidden absolute top-full left-0 right-0 '>
          <nav className=' bg-[#fffc] container  px-4 py-4 flex flex-col space-y-4 ' >
            { menuItem.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={`py-2 hover:text-gray-500 transition-colors`}
                onClick={() => setOpenMenu(false)}>
                {t(item.item)}
              </NavLink>
            ))}
          </nav>
        </div>}
=======
        <button className='p-2 md:hidden'>
          <IoMenuSharp size={35} />
        </button>
>>>>>>> d6ca1163853739f25a419c58ee96d8d6e3fe6cab
      </div>
    </section>
  )
}

export default Navbar