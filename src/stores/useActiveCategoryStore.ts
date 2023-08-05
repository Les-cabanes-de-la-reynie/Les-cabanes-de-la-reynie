import { create } from 'zustand'

interface ActiveCategoryState {
  entries: IntersectionObserverEntry[]
  addEntry: (entry: IntersectionObserverEntry) => void
  removeEntry: (id: string) => void
}

export const useActiveCategoryStore = create<ActiveCategoryState>()(
  (set, get) => ({
    entries: [],
    addEntry: newEntry => {
      const entryItem = get().entries.find(
        entry => entry.target.id === newEntry.target.id
      )

      if (!entryItem) {
        set(state => ({
          entries: [...state.entries, newEntry]
        }))
      }
    },
    removeEntry: id => {
      set(state => ({
        entries: state.entries.filter(entry => entry.target.id !== id)
      }))
    }
  })
)
