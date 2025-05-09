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
//size
export const fetchSize = async () => {
  const res = await fetch("https://back.aoron.uz/api/sizes") 
  return await res.json() 
}
//color 
export const fetchColor = async () => {
  const res = await fetch("https://back.aoron.uz/api/colors") 
  return await res.json() 
}
//TeamSection
export const fetchTeamSection = async () => {
  const res = await fetch("https://back.aoron.uz/api/team-section") 
  return await res.json() 
}