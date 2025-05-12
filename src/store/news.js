import { create } from 'zustand'
import { fetchNews } from '../services/services'

const useNews = create((set) => ({
    news: [],
    error: "",
    loadNews: async () => {
        try {
            const res = await fetchNews()
            if (res.success) {
                set({ news: res.data })
            } else {
                set({ error: 'No success response' })
            }
        } catch (err) {
            set({ error: err.message })
        }
    }
}))

export default useNews
