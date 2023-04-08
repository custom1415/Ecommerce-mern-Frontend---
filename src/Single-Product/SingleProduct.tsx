import { useSingleProductFetch } from '../hooks/useSingleProduct/useSingleProductFetch'
import Loader from '../components/loader'
import Rating from '../Product-List-Page/Rating'
import useAddToWishlistMutation from '../hooks/useWIshlist/useAddToWishlistMutation'
import { useWishlistIdFetch } from '../hooks/useWIshlist/useWishlistIdFetch'
import { useAddToCartMutation } from '../hooks/useCart/useAddToCartMutation'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

type Props = {}

const SingleProductPage = () => {
  const { data, isLoading, isError } = useSingleProductFetch()
  const { addToWishlistMutation, addingToWishlist } = useAddToWishlistMutation()
  const { addToCartMutation, addingToCart } = useAddToCartMutation()
  const { data: wishlist } = useWishlistIdFetch()

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <h1> Something went wrong</h1>
  }
  if (!data) {
    return <h1>Data not found</h1>
  }
  const {
    _id,
    title,
    description,
    image,
    id,
    price,
    category,
    rating: { rate, count }
  } = data?.product

  const { moreFromTheCategory } = data
  const isInWishlist = (wishlist || []).includes(_id)

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex lg:flex-nowrap  flex-wrap">
            <div className="grid place-items-center lg:w-1/2  w-full">
              <img
                alt="ecommerce"
                className="w-full max-w-[400px]  h-72 object-contain object-center rounded"
                src={image}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm capitalize title-font text-gray-500 tracking-widest">
                {category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <div className="flex mb-4">
                <Rating rating={rate} reviewCount={count} />
              </div>
              <p className="leading-relaxed line-clamp-6">{description}</p>

              <div className="flex mt-8">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
                <button
                  onClick={() => {
                    addToCartMutation.mutate(
                      { productId: _id },
                      {
                        onSuccess() {
                          toast('Successfully added to cart!', {
                            type: 'success'
                          })
                        }
                      }
                    )
                  }}
                  className="flex ml-auto items-center gap-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Add to Cart
                  {addingToCart === _id && (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  )}
                </button>
                <button
                  onClick={() =>
                    addToWishlistMutation.mutate(
                      {
                        wishlistItem: data?.product
                      },
                      {
                        onSuccess() {
                          toast('Succesfully updated wishlist!', {
                            type: 'success'
                          })
                        }
                      }
                    )
                  }
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  {addingToWishlist === _id ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : (
                    <svg
                      fill={`${isInWishlist ? '#dc2626' : 'currentColor'}`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <section
              aria-labelledby="related-heading"
              className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
            >
              <h2
                id="related-heading"
                className="text-xl mb-12 font-bold text-gray-900"
              >
                From this category
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {moreFromTheCategory?.map((product) => {
                  const isInWishlist = (wishlist || []).includes(product._id)

                  return (
                    <div
                      key={product._id}
                      id={product._id}
                      className="lg:min-h-[446px] flex flex-col justify-between"
                    >
                      <div
                        className="relative cursor-pointer group"
                        onClick={() => {
                          window.open(`/product/${product._id}`, '_self')
                        }}
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
                        <button
                          onClick={() => {
                            addToWishlistMutation.mutate(
                              {
                                wishlistItem: product
                              },
                              {
                                onSuccess() {
                                  toast('Succesfully updated wishlist!', {
                                    type: 'success'
                                  })
                                }
                              }
                            )
                          }}
                          title="Add to wishlist"
                          className="w-10 relative hover:bg-gray-200 rounded justify-center p-2 h-full flex items-center  bg-gray-100"
                        >
                          {isInWishlist ? (
                            <HeartIconSolid className="text-red-500" />
                          ) : (
                            <HeartIcon className=" " />
                          )}
                          {addingToWishlist === product._id && (
                            <div className="absolute top-1/2 rounded bg-gray-100 w-full h-full grid place-items-center -translate-x-1/2 left-1/2 -translate-y-1/2">
                              <AiOutlineLoading3Quarters className="animate-spin text-xl  " />
                            </div>
                          )}
                        </button>
                        <button
                          className={`relative flex-1 gap-2  flex items-center justify-center rounded-md border border-transparent bg-red-500 py-2 px-8 text-sm font-medium text-white hover:bg-red-600 ${
                            addingToCart === product._id &&
                            'pointer-events-none '
                          }`}
                          onClick={() => {
                            addToCartMutation.mutate({ productId: product._id })
                            // addItem({ ...product, id: product._id })
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
                  )
                })}
              </div>
            </section>
          </div>
        </main>
      </section>
    </>
  )
}

export default SingleProductPage
