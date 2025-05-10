import React, { useEffect } from 'react'
import useProductStore from '../../store/productStore'

function Home() {
  const {products , loadProducts} = useProductStore()
  useEffect(()=>{
    loadProducts()
  },[])
  // api dai ma'lumotlar mana shu products da
  console.log(products);
  
  return (
    <section className='relative h-screen flex items-center overflow-hidden mt-3 bg-amber-200'>
      <h1 className='ml-40 text-6xl'>Umar aka boshlang</h1>
    </section>
  )
}

export default Home