import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import {
  useWishlistStore,
  calculateWishlistQty
} from '../../../zustand/wishlistStore'

type Props = {}

const HeartIconComponent = (props: Props) => {
  const wishlist = useWishlistStore((state) => state.wishlist)
  const wishlistLength = calculateWishlistQty(wishlist)
  return (
    <div className="flex lg:ml-6 relative">
      <div className="absolute top-0.5 right-0.5 grid place-content-center bg-red-500 text-white rounded-full w-4 h-4">
        <span className="text-[8px] "> {wishlistLength}</span>
      </div>
      <Link to="/wishlist" className="p-2 text-gray-400 hover:text-gray-500">
        <span className="sr-only">Wishlist</span>
        <HeartIcon className="h-6 w-6" aria-hidden="true" />
      </Link>
    </div>
  )
}

export default HeartIconComponent
