import { create } from 'zustand'
import { fetchProducts } from '../services/services'

const useProductStore = create((set) => ({
  products: [],
  error:"",
  loadProducts: async () => {
    try {
      const res = await fetchProducts()
      if (res.success) {
        set({ products: res.data.products })
      } else {
        set({ error: 'No success response' })
      }
    } catch (err) {
      set({ error: err.message })
    }
  }
}))

export default useProductStore
