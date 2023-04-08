import { useState } from 'react'

import useOrdersFetch from '../../hooks/useOrders/useOrdersFetch'
import Loader from '../../components/loader'
import { Link } from 'react-router-dom'
import Footer from '../../components/landing-page/sections/Footer'

export default function Example() {
  const { data, isError, isLoading } = useOrdersFetch()
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Order history
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Check the status of your recent orders.
          </p>
        </div>

        <section aria-labelledby="recent-heading" className="mt-16">
          <h2 id="recent-heading" className="sr-only">
            Recent orders
          </h2>
          {!data?.orders.length && (
            <div className="mx-auto max-w-2xl flex flex-col items-center  px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
              <h1 className="py-8 text-4xl font-medium">No recent orders.</h1>

              <Link
                to={'/categories/products/electronics'}
                className="whitespace-nowrap  rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-600"
              >
                Continue shopping
              </Link>
            </div>
          )}
          <div className="space-y-20">
            {data?.orders?.map((order) => {
              const date = new Date(order.createdAt)
              const formattedDateTime = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZone: 'UTC'
              }).format(date)

              const formattedDate = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC'
              }).format(date)
              return (
                <div key={order._id}>
                  <h3 className="sr-only">
                    Order placed on
                    <time dateTime={formattedDateTime}>{formattedDate}</time>
                  </h3>

                  <div className="rounded-lg bg-gray-50 py-6 px-4 sm:space-y-0 sm:divide-none space-y-6 divide-y divide-gray-200  sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                    <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-12 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-24">
                      <div className="flex justify-between sm:block">
                        <dt className="font-medium text-gray-900">
                          Date placed
                        </dt>
                        <dd className="sm:mt-1">
                          <time dateTime={formattedDate}>{formattedDate}</time>
                        </dd>
                      </div>
                      <div className="flex justify-between pt-6 sm:block sm:pt-0">
                        <dt className="font-medium text-gray-900">
                          Order number
                        </dt>
                        <dd className="sm:mt-1">{order._id}</dd>
                      </div>
                      {/* <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                        <dt>Total amount</dt>
                        <dd className="sm:mt-1">${order.total.toFixed(2)}</dd>
                      </div> */}
                    </dl>
                    {/* <a
                      href={''}
                      // href={order.invoiceHref}
                      className="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
                    >
                      View Invoice
                      <span className="sr-only">for order {order._id}</span>
                    </a> */}

                    <dl className="flex whitespace-nowrap text-sm justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                      <dt>Total amount</dt>
                      <dd className="sm:mt-1">${order.total.toFixed(2)}</dd>
                    </dl>
                  </div>

                  <table className="mt-4 w-full text-gray-500 sm:mt-6">
                    <caption className="sr-only">Products</caption>
                    <thead className="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3 pr-8 font-normal sm:table-cell"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="w-0 py-3 text-right font-normal"
                        >
                          Info
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                      {order.orderItems.map((product) => (
                        <tr key={product._id}>
                          <td className="py-6 pr-8">
                            <div className="flex items-center">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="mr-6 h-16 w-16 rounded object-cover object-center"
                              />
                              <div>
                                <div className="font-medium text-gray-900">
                                  {product.title}
                                </div>
                                <div className="mt-1 sm:hidden">
                                  ${product.price}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="hidden py-6 pr-8 sm:table-cell">
                            ${product.price}
                          </td>
                          <td className="hidden capitalize py-6 pr-8 sm:table-cell">
                            {order.status}
                          </td>
                          <td className="whitespace-nowrap py-6 text-right font-medium">
                            <a
                              href={
                                window.location.origin +
                                '/product/' +
                                product.product
                              }
                              className="text-red-500"
                            >
                              View&nbsp;
                              <span className="hidden lg:inline">Product</span>
                              <span className="sr-only"> {product.title}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
