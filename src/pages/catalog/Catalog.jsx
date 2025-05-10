import React, { useEffect } from 'react'
import useSizeStore from '../../store/sizeStore'
import useColorStore from '../../store/colorStory'

function Catalog() {
  const {size , loadSize} =useSizeStore()
  const {color , loadColor}=useColorStore()
  const {products , loadProducts} = useProductStore()

  useEffect(()=>{
    loadSize()
    loadColor()
    loadProducts()
  },[])

  console.log( "size : ",size);
  console.log("color :" ,color);
  console.log("products :" ,products  );
  
  
  return (
    <div>Catalog</div>
  )
}

export default Catalog