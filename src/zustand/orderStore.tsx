import { StateCreator, create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

type MyState = {
  orders: Product[]
  setOrders: (orders: any[]) => void
  orderId: string
  setOrderId: (orderId: string) => void
  paymentIntentId: string
  setPaymentIntentId: (id: string) => void
}

export const useOrderStore = create<MyState>((set) => ({
  orders: [],
  paymentIntentId: '',
  orderId: '',
  setOrders: (orders) => set({ orders }),
  setOrderId: (orderId) => set({ orderId }),
  setPaymentIntentId: (id) => set({ paymentIntentId: id })

  // token: undefined,
  // authenticated: false,
  // authenticate: async (_username, _password) => {
  //   set({ authenticated: true });
  // },
}))
