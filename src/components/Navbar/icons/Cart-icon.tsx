import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCartStore, calculateCartQty } from '../../../zustand/cartStore'

type Props = {}

const CartIcon = (props: Props) => {
  const cart = useCartStore((state) => state.cart)
  const toggleCartSidebar = useCartStore((state) => state.toggleCartSidebar)

  // const total = calculateCartTotal(cart)
  const quantity = useCartStore((state) => state.cartQty)

  return (
    <div
      className="flow-root "
      onClick={() => toggleCartSidebar(true)}
    >
      <span className="cursor-pointer group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {quantity}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </span>
    </div>
  )
}

export default CartIcon
