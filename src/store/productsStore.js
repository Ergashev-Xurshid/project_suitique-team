import { create } from 'zustand'
import { fetchProducts } from '../services/services'

const useProductsStore = create((set) => ({
  Products: [],
  error:"",
  loadCategories: async () => {
    try {
      const res = await fetchProducts()
      if (res.success) {
        set({ categories: res.data.products })
      } else {
        set({ error: 'No success response' })
      }
    } catch (err) {
      set({ error: err.message })
    }
  }
}))

export default useCategoryStore
