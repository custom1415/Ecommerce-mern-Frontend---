import { StateCreator, create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

type MyState = {
  isMenuOpen: boolean
  toggleMenuOpen: (open: boolean) => void
}

export const useMenuStore = create<MyState>((set) => ({
  isMenuOpen: false,
  toggleMenuOpen: (open) => set({ isMenuOpen: open })

  // token: undefined,
  // authenticated: false,
  // authenticate: async (_username, _password) => {
  //   set({ authenticated: true });
  // },
}))
