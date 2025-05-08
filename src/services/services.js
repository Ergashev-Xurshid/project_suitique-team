export const fetchCategory = async () => {
  const res = await fetch("https://back.aoron.uz/api/category") 
  return await res.json()
  
}