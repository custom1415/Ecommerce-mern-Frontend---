/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCartStore, calculateCartTotalServer } from '../../zustand/cartStore'
import { Link, Outlet } from 'react-router-dom'
import useCartFetch from '../../hooks/useCart/useCartFetch'
import Loader from '../loader'
import { useMutation } from 'react-query'
import axios from 'axios'
import { useState } from 'react'
import useRemoveFromCartMutation from '../../hooks/useCart/useRemoveFromCartMutation'
import {
  AiOutlineLoading3Quarters,
  AiOutlineMinus,
  AiOutlinePlus
} from 'react-icons/ai'
import { useAddToCartMutation } from '../../hooks/useCart/useAddToCartMutation'
import useClearCartItemMutation from '../../hooks/useCart/useClearCartItemMutation'

export default function CartSidebar(): JSX.Element {
  const isCartSidebarOpen = useCartStore((state) => state.isCartSidebarOpen)
  const toggleCartSidebar = useCartStore((state) => state.toggleCartSidebar)

  const { data, isLoading } = useCartFetch()

  const { isRemovingFromCart, removeFromCartMutation } =
    useRemoveFromCartMutation()
  const { addToCartMutation, addingToCart } = useAddToCartMutation()
  const { clearCartMutation, isClearingFromCart } = useClearCartItemMutation()

  const cartTotal = data?.cartItems
    ? calculateCartTotalServer(data.cartItems)
    : 0

  return (
    <>
      <Transition.Root show={isCartSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1000]"
          onClose={() => toggleCartSidebar(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between border-b pb-4 ">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => toggleCartSidebar(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {isLoading && (
                                <AiOutlineLoading3Quarters className="mx-auto animate-spin text-2xl mt-4  " />
                              )}
                              {data?.cartItems?.length === 0 && (
                                <h1 className="mt-2 text-xl font-semibold">
                                  No products in the cart.
                                </h1>
                              )}

                              {data?.cartItems?.map(({ product, quantity }) => (
                                <li
                                  key={product.id}
                                  className="flex py-6 group"
                                >
                                  <div className="h-24  w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.image}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-top"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col ">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900 ">
                                        <h3 className="line-clamp-2 group-hover:text-red-500">
                                          <Link
                                            target="_blank"
                                            onClick={() =>
                                              toggleCartSidebar(false)
                                            }
                                            to={'/product/' + product._id}
                                          >
                                            {product?.title}
                                          </Link>
                                        </h3>

                                        <p className="ml-4">
                                          ${product?.price}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="w-auto grid grid-cols-3 place-items-center gap-2">
                                        <button
                                          onClick={() =>
                                            removeFromCartMutation.mutate(
                                              product._id
                                            )
                                          }
                                          className="justify-center rounded  hover:bg-gray-300 bg-gray-200 p-2 h-8 flex items-center  w-8 "
                                        >
                                          <AiOutlineMinus />
                                        </button>
                                        <p>
                                          {(addingToCart ||
                                            isRemovingFromCart) ===
                                          product._id ? (
                                            <AiOutlineLoading3Quarters className="animate-spin" />
                                          ) : (
                                            quantity
                                          )}
                                        </p>
                                        <button
                                          onClick={() =>
                                            addToCartMutation.mutate({
                                              productId: product._id
                                            })
                                          }
                                          className="justify-center rounded hover:bg-gray-300 bg-gray-200 p-2 h-8 flex items-center  w-8 "
                                        >
                                          <AiOutlinePlus />
                                        </button>
                                      </div>

                                      <div className="flex">
                                        <button
                                          onClick={() => {
                                            clearCartMutation.mutate(
                                              product._id
                                            )
                                          }}
                                          type="button"
                                          className="font-medium text-red-500 hover:text-red-600"
                                        >
                                          {isClearingFromCart === product._id
                                            ? 'Removing'
                                            : 'Remove'}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {data?.cartItems?.length ? (
                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${cartTotal.toFixed(2)}</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className="mt-6 ">
                            <Link
                              onClick={() => toggleCartSidebar(false)}
                              to="/cart"
                              className="flex items-center justify-center rounded-md border border-transparent bg-gray-50 shadow px-6 py-3 text-base font-medium text-black  hover:bg-gray-100 "
                            >
                              View cart
                            </Link>
                          </div>
                          <div className="mt-2">
                            <Link
                              onClick={() => toggleCartSidebar(false)}
                              to="/checkout"
                              className="flex items-center justify-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-600"
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Outlet />
    </>
  )
}
