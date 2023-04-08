import { StateCreator, create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

// Define your store state and actions interfaces
type WishlistItem = string

interface wishlistStoreState {
  wishlist: WishlistItem[]
}

interface wishlistStoreActions {
  updateWishlist: (id: WishlistItem) => void
  setWishlist: (data: WishlistItem[]) => void
}

type WishlistStore = wishlistStoreState & wishlistStoreActions

// Define your store
type WishlistPersist = (
  config: StateCreator<WishlistStore>,
  options: PersistOptions<WishlistStore>
) => StateCreator<WishlistStore>

const checkExistingItem = (
  wishlist: WishlistStore['wishlist'],
  id: WishlistItem
) => {
  return !!wishlist.find((itemId) => itemId === id)
}

export const useWishlistStore = create<WishlistStore>(
  (persist as WishlistPersist)(
    (set) => ({
      wishlist: [],

      updateWishlist: (id) =>
        set((state) => {
          const itemExists = checkExistingItem(state.wishlist, id)
          if (itemExists) {
            return {
              wishlist: state.wishlist.filter((itemId) => itemId !== id)
            }
          } else {
            return { wishlist: [...state.wishlist, id] }
          }
        }),

      setWishlist: (data) => set(() => ({ wishlist: data }))
    }),
    { name: 'wishlist' }
  )
)
export const calculateWishlistQty = (wishlist: WishlistItem[]) =>
  wishlist?.length || 0
