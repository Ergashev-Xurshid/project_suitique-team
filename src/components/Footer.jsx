import React, { useEffect, useState } from 'react'
import { logo } from '../assets'
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { LuTwitter } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { footerItem } from '../utils/consttanta';
import { FaArrowRight } from "react-icons/fa6";
import useCategoryStore from '../store/categoryStore';

function Footer() {
  const { categories, loadCategories } = useCategoryStore()
  
  useEffect(() => {
    loadCategories()
  }, [])


  //send email 
  const [email , setEmail]=useState("")
  const sendEmail = async () => {  
    try {
      const res = await fetch('https://back.aoron.uz/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:email
        })
      })
  
      const data = await res.json()
      if(data.success){
        console.log('Natija: xabar yuborildi')
      }
    } catch (error) {
      console.error('Xatolik:', error)
    }
  }
  

  return (
    <section className='container mx-auto px-10'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
        <div className='space-y-4'>
          <img src={logo} alt="logo" className='w-20 mb-4' />
          <p className='text-sm text-gray-500'>
            Premium quality menswear focused on exceptional materials and perfect fit.
          </p>
          <div className='flex space-x-4'>
            <Link to="/" className="p-2 rounded-full hover:bg-background transition-colors">
              <IoLogoInstagram />
            </Link>
            <Link to="/" className="p-2 rounded-full hover:bg-background transition-colors">
              <SlSocialFacebook />
            </Link>
            <Link to="/" className="p-2 rounded-full hover:bg-background transition-colors">
              <LuTwitter />
            </Link>
          </div>
        </div>
        <div className='space-y-4'>
          <h4 className='font-medium text-sm uppercase tracking-wider'>Shop</h4>
          <nav className='flex flex-col space-y-2'>
            <Link className='text-sm text-gray-500 hover:text-gray-500 transition-colors' to={"/catalog"}>View All Products</Link>
            {categories.map((data , i)=>(
              <Link   
              key={i}
              className='text-sm text-gray-500 hover:text-gray-500 transition-colors'
              >{data.name_en}
            </Link>
            ))}
          </nav>
        </div>
        <div className='space-y-4'>
          <h4 className='font-medium text-sm uppercase tracking-wider'>Company</h4>
          <nav className='flex flex-col space-y-2'>
            {footerItem.map((item,i)=>(
              <Link 
                key={i}
                to={item.path}
                className='text-sm text-gray-500 hover:text-gray-500 transition-colors'
                >{item.item}
              </Link>
            ))}
          </nav>
        </div>
        <div className='space-y-4'>
        <h4 className='font-medium text-sm uppercase tracking-wider'>Subscribe to our newsletter</h4>
        <p className='text-sm text-gray-500'>Subscribe to receive updates, access to exclusive deals, and more.</p>
        <div className='flex'>
            <input 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email" 
              placeholder='Email' 
              className='w-full px-3 py-2 text-[15px]  border border-r-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black"'
              />
            <button onClick={()=>sendEmail()} className='flex items-center justify-center bg-black text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors'>
              <FaArrowRight />
            </button>
        </div>
        </div>
      </div>
      <div className='pt-8 border-t border-gray-200'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-xs text-gray-500'>© 2025 AORON All rights reserved</p>
        </div>
      </div>  
    </section>
  )
}

export default Footer