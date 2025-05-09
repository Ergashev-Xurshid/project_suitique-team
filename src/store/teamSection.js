import { create } from 'zustand'
import { fetchTeamSection } from '../services/services'

const useTeamSection = create((set) => ({
  teamSection: [],
  error:"",
  loadTeamSection: async () => {
    try {
      const res = await fetchTeamSection()
      if (res.success) {
        set({ teamSection: res.data })
      } else {
        set({ error: 'No success response' })
      }
    } catch (err) {
      set({ error: err.message })
    }
  }
}))

export default useTeamSection
