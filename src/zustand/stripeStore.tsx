import { StateCreator, create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

type MyState = {
  clientSecret: string
  setClientSecret: (clientSecret: string) => void
}

export const useStripeStore = create<MyState>((set) => ({
  clientSecret: '',
  setClientSecret: (clientSecret) => set({ clientSecret })
}))
