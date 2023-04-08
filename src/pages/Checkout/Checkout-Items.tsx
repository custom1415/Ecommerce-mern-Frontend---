import { Fragment, useState } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import { LinkAuthenticationElement } from '@stripe/react-stripe-js'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import {
  CheckCircleIcon,
  ChevronDownIcon,
  TrashIcon
} from '@heroicons/react/20/solid'
// import './Checkout.css'
import { useMutation } from 'react-query'
import axios from 'axios'
import Loader from '../../components/loader'
import useCartFetch from '../../hooks/useCart/useCartFetch'
import useClearCartItemMutation from '../../hooks/useCart/useClearCartItemMutation'
import useClearCartMutation from '../../hooks/useCart/useClearCartMutation'

export default function Checkout(): JSX.Element {
  const { data, isLoading, refetchCart, total } = useCartFetch()

  const removeFromCartMutation = useMutation({
    mutationFn: (productId: any) => {
      console.log(productId)

      return axios.delete(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/cart/' +
          productId
      )
    },

    onSuccess() {
      refetchCart()
    }
  })

  if (isLoading) {
    return <></>
  }

  return (
    <>
      {' '}
      <div className="bg-white lg:w-1/2 w-full h-max">
        {/* Mobile menu */}

        <main className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h1 className="sr-only">Checkout</h1>

            <form className="w-full">
              <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>

                <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                  <h3 className="sr-only">Items in your cart</h3>
                  <ul role="list" className="divide-y  divide-gray-200">
                    {data?.cartItems?.map(({ product, quantity }: any) => (
                      <li key={product.id} className="flex py-6 px-4 sm:px-6">
                        <div className="flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-20 rounded-md"
                          />
                        </div>

                        <div className="ml-6 flex flex-1 flex-col">
                          <div className="flex">
                            <div className="min-w-0 flex-1">
                              <h4 className="text-sm">
                                <Link
                                  to={'/product/' + product._id}
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {product.title}
                                </Link>
                              </h4>
                              <p className="mt-1 text-sm text-gray-500">
                                Qty {quantity}
                              </p>
                            </div>

                            <div className="ml-4 flow-root flex-shrink-0">
                              <button
                                onClick={() =>
                                  removeFromCartMutation.mutate(product._id)
                                }
                                type="button"
                                className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">Remove</span>
                                <TrashIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-1 items-end justify-between pt-2">
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex items-center justify-between ">
                      <dt className="text-base font-medium">Total</dt>
                      <dd className="text-base font-medium text-gray-900">
                        ${total.toFixed(2)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}
