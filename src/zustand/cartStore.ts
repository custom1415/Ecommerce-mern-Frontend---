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
  cart: CartItem[]
  isCartSidebarOpen: boolean
  cartQty: number
}

interface CartStoreActions {
  toggleCartSidebar: (open: boolean) => void
  // addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  clearItem: (item: CartItem) => void
  setCartQuantity: (qty: number) => void
}

type CartStore = CartStoreState & CartStoreActions

// Define your store
type CartPersist = (
  config: StateCreator<CartStore>,
  options: PersistOptions<CartStore>
) => StateCreator<CartStore>

// const checkExistingItem = (cart: CartStore['cart'], id: CartItem['id']) => {
//   return !!cart.find((item) => item.id === id)
// }

export const useCartStore = create<CartStore>(
  (persist as CartPersist)(
    (set) => ({
      cart: [],
      cartQty: 0,
      isCartSidebarOpen: false,
      toggleCartSidebar: (open) => set(() => ({ isCartSidebarOpen: open })),
      setCartQuantity: (qty) => set(() => ({ cartQty: qty })),

      // addItem: (item) =>
      //   set((state) => {
      //     const itemExists = checkExistingItem(state.cart, item.id)
      //     if (itemExists) {
      //       const newCartItem = state.cart.map((cartItem) =>
      //         cartItem.id === item.id
      //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
      //           : cartItem
      //       )
      //       return {
      //         cart: newCartItem
      //       }
      //     }
      //     return {
      //       cart: [...state.cart, { ...item, quantity: 1 }]
      //     }
      //   }),

      removeItem: (item) => {},
      clearItem: (item) => {}
    }),
    { name: 'cart' }
  )
)
// export const calculateCartTotal = (cart: CartItem[]) =>
//   cart.reduce((total, item) => total + item.price * item.quantity, 0)
export const calculateCartTotalServer = (cart: CartItem[]) =>
  cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
export const calculateCartQty = (cart: CartItem[]) => {
  return cart.reduce((total, item) => total + item.quantity, 0)
}
