import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useWishlistFetch } from '../../hooks/useWIshlist/useWishlistFetch'
import { useMutation } from 'react-query'
import axios from 'axios'
import Loader from '../../components/loader'
import { HeartIcon } from '@heroicons/react/24/outline'
import Rating from '../../Product-List-Page/Rating'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useAddToWishlistMutation from '../../hooks/useWIshlist/useAddToWishlistMutation'
import { toast } from 'react-toastify'
import { useAddToCartMutation } from '../../hooks/useCart/useAddToCartMutation'

const Wishlist = () => {
  const { data, isLoading, refetch } = useWishlistFetch()
  const navigate = useNavigate()

  const { addingToWishlist, addToWishlistMutation } = useAddToWishlistMutation()
  const { addingToCart, addToCartMutation } = useAddToCartMutation()
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="mx-auto max-w-2xl  px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h1 className="py-8 text-2xl">Wishlist</h1>
      {!data?.wishlist.length && (
        <div className="mx-auto max-w-2xl flex flex-col items-center  px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
          <h1 className="py-8 text-4xl text-center font-medium">
            Your wishlist is empty.
          </h1>
          <Link
            to={'/categories/products/electronics'}
            className="whitespace-nowrap rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-600"
          >
            Continue shopping
          </Link>
        </div>
      )}
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {data?.wishlist?.map((product) => (
          <div
            key={product._id}
            id={product._id}
            className="lg:min-h-[446px] flex flex-col justify-between"
          >
            <div
              className="relative cursor-pointer group"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <div className="relative h-72 w-full overflow-hidden  rounded-lg ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full group-hover:scale-125 transition-all object-contain object-center cursor-pointer"
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {product.title}
                </h3>
              </div>
            </div>

            <div className="mt-3 flex w-full justify-between pr-4">
              <Rating
                rating={product.rating.rate}
                reviewCount={product.rating.count}
              />
              <h1 className="text-lg">${product.price}</h1>
            </div>
            <div className="mt-3 items-center gap-2 flex w-full justify-between pr-4">
              {/* <button className="w-10 rounded justify-center p-2 h-full flex items-center  bg-gray-100">
                  <FaRegTrashAlt className=" " />

                </button> */}
              <button
                onClick={() => {
                  addToWishlistMutation.mutate({ wishlistItem: product })
                  if (addToWishlistMutation.isSuccess)
                    toast('Successfully removed from wishlist!', {
                      type: 'success'
                    })
                  // updateWishlist(product._id)
                }}
                title="Add to wishlist"
                className="w-10 relative hover:bg-gray-200 rounded justify-center p-2 h-full flex items-center  bg-gray-100"
              >
                <FaRegTrashAlt />

                {addingToWishlist === product._id && (
                  <div className="absolute top-1/2 rounded bg-gray-100 w-full h-full grid place-items-center -translate-x-1/2 left-1/2 -translate-y-1/2">
                    <AiOutlineLoading3Quarters className="animate-spin text-xl  " />
                  </div>
                )}
              </button>
              <button
                className={`relative flex-1 gap-2  flex items-center justify-center rounded-md border border-transparent bg-red-500 py-2 px-8 text-sm font-medium text-white hover:bg-red-600 ${
                  addingToCart === product._id && 'pointer-events-none '
                }`}
                onClick={() => {
                  addToCartMutation.mutate(
                    { productId: product._id },
                    {
                      onSuccess() {
                        toast('Successfully added to cart!', {
                          type: 'success'
                        })
                      }
                    }
                  )
                }}
              >
                <span className="whitespace-nowrap">Add to cart</span>
                {addingToCart === product._id && (
                  <div className="rounded w-max h-full grid place-items-center text-white">
                    <AiOutlineLoading3Quarters className="animate-spin text-xl  " />
                  </div>
                )}
                <span className="sr-only">, {product.title}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
