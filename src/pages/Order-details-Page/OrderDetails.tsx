import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/loader'
import useClearCartMutation from '../../hooks/useCart/useClearCartItemMutation'
import useOrdersFetch from '../../hooks/useOrders/useOrdersFetch'
import useSingleOrderFetch from '../../hooks/useOrders/useSingleOrderFetch'
import { useOrderStore } from '../../zustand/orderStore'
import { useEffect } from 'react'

/* This example requires Tailwind CSS v2.0+ */

export default function Example() {
  const navigate = useNavigate()
  const oid = useOrderStore((state) => state.orderId)
  useEffect(() => {
    if (!oid) navigate('/orderhistory')
  }, [oid])

  const { data, isLoading, orderId, isError } = useSingleOrderFetch()
  if (isLoading) {
    return <Loader />
  }

  return (
    <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-xl">
          <h1 className="text-base font-medium text-red-500">Thank you!</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight">
            It's on the way!
          </p>
          <p className="mt-2 text-base text-gray-500">
            Your order <span className="text-red-500">#{orderId}</span> has been
            confirmed and will be with you soon.
          </p>

          {/* <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Tracking number</dt>
            <dd className="mt-2 text-indigo-600">51547878755545848512</dd>
          </dl> */}
        </div>

        <section
          aria-labelledby="order-heading"
          className="mt-10 border-t border-gray-200"
        >
          <h2 id="order-heading" className="sr-only">
            Your order
          </h2>

          <h3 className="sr-only">Items</h3>
          {data?.orderItems.map((product) => (
            <div
              key={product.id}
              className="flex space-x-6 border-b border-gray-200 py-10"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
              />
              <div className="flex flex-auto flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                    <Link to={'/product/' + product.product}>
                      {product.title}
                    </Link>
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-4">
                    {product.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-1 items-end">
                  <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium text-gray-900">Quantity</dt>
                      <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                    </div>
                    <div className="flex pl-4 sm:pl-6">
                      <dt className="font-medium text-gray-900">Price</dt>
                      <dd className="ml-2 text-gray-700">${product.price}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Subtotal</dt>
                <dd className="text-gray-700">${data?.subtotal}</dd>
              </div>

              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Shipping</dt>
                <dd className="text-gray-700">$0.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-gray-900">${data?.total}</dd>
              </div>
            </dl>

            <div className="mt-10 flex justify-end gap-2">
              <button className=" rounded-md border border-transparent bg-red-100 py-2 px-4 text-sm font-medium text-white hover:bg-red-200">
                <Link
                  to={'/orderhistory'}
                  className="whitespace-nowrap text-red-500"
                >
                  Order History
                </Link>
              </button>
              <button className=" rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-600">
                <Link
                  to={'/categories/products/electronics'}
                  className="whitespace-nowrap"
                >
                  Continue Shopping
                </Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
