import { create } from 'zustand'
import { fetchColor } from '../services/services'

const useColorStore = create((set) => ({
  color: [],
  error:"",
  loadColor: async () => {
    try {
      const res = await fetchColor()
      if (res.success) {
        set({ color: res.data })
      } else {
        set({ error: 'No success response' })
      }
    } catch (err) {
      set({ error: err.message })
    }
  }
}))

export default useColorStore
