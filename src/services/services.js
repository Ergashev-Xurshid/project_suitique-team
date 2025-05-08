export const fetchCategory = async () => {
  const res = await fetch("https://back.aoron.uz/api/category") 
  return await res.json() 
}

export const fetchProducts = async () => {
  const res = await fetch("https://back.aoron.uz/api/product") 
  return await res.json() 
}