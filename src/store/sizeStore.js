import { create } from 'zustand'
import { fetchSize } from '../services/services'

const useSizeStore = create((set) => ({
  size: [],
  error:"",
  loadSize: async () => {
    try {
      const res = await fetchSize()
      if (res.success) {
        set({ size: res.data })
      } else {
        set({ error: 'No success response' })
      }
    } catch (err) {
      set({ error: err.message })
    }
  }
}))

export default useSizeStore
