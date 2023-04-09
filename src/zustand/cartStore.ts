import { StateCreator, create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

// Define your store state and actions interfaces
interface CartItem {
  product: {
    id: string | number
    title: string
    image: string
    price: number
  }
  quantity: number
}

interface CartStoreState {
  isCartSidebarOpen: boolean
  cartQty: number
}

interface CartStoreActions {
  toggleCartSidebar: (open: boolean) => void
  setCartQuantity: (qty: number) => void
}

type CartStore = CartStoreState & CartStoreActions

// Define your store

// const checkExistingItem = (cart: CartStore['cart'], id: CartItem['id']) => {
//   return !!cart.find((item) => item.id === id)
// }

export const useCartStore = create<CartStore>((set) => ({
  cartQty: 0,
  isCartSidebarOpen: false,
  toggleCartSidebar: (open) => set(() => ({ isCartSidebarOpen: open })),
  setCartQuantity: (qty) => set(() => ({ cartQty: qty }))
}))
// export const calculateCartTotal = (cart: CartItem[]) =>
//   cart.reduce((total, item) => total + item.price * item.quantity, 0)
export const calculateCartTotalServer = (cart: CartItem[]) =>
  cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
export const calculateCartQty = (cart: CartItem[]) => {
  return cart.reduce((total, item) => total + item.quantity, 0)
}
