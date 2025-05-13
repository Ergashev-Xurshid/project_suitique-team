//category
export const fetchCategory = async () => {
  const res = await fetch("https://testaoron.limsa.uz/api/category")
  return await res.json()
}
//products
export const fetchProducts = async () => {
  const res = await fetch("https://testaoron.limsa.uz/api/product?page=1&limit=10&min_sell=2")
  return await res.json()
}
//size
export const fetchSize = async () => {
  const res = await fetch("https://testaoron.limsa.uz/api/sizes")
  return await res.json()
}
//color 
export const fetchColor = async () => {
  const res = await fetch("https://testaoron.limsa.uz/api/colors")
  return await res.json()
}
//TeamSection
export const fetchTeamSection = async () => {
  const res = await fetch("https://testaoron.limsa.uz/api/team-section")
  return await res.json()
}
//News
export const fetchNews = async () => {
  const res = await fetch("https://testaoron.limsa.uz/api/news")
  return await res.json()
}
