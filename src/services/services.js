//category
export const fetchCategory = async () => {
  const res = await fetch("https://back.aoron.uz/api/category") 
  return await res.json() 
}
//products
export const fetchProducts = async () => {
  const res = await fetch("https://back.aoron.uz/api/product") 
  return await res.json() 
}
