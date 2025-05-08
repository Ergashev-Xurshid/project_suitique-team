import { create } from 'zustand'
import { fetchCategory } from '../services/services'

const useCategoryStore = create((set) => ({
  categories: [],

  loadCategories: async () => {
    try {
      const res = await fetchCategory()
      if (res.success) {
        set({ categories: res.data })
      } else {
        set({ error: 'No success response' })
      }
    } catch (err) {
      set({ error: err.message })
    }
  }
}))

export default useCategoryStore
