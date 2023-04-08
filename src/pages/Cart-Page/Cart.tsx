// /*
//   This example requires Tailwind CSS v2.0+

//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }
//   ```
// */

import { calculateCartTotalServer } from '../../zustand/cartStore'
import { Link } from 'react-router-dom'
import useCartFetch from '../../hooks/useCart/useCartFetch'
import useRemoveFromCartMutation from '../../hooks/useCart/useRemoveFromCartMutation'

export const Cart = (): JSX.Element => {
  // const cart = useCartStore((state) => state.cart)

  const { data, isLoading, refetchCart } = useCartFetch()
  const { removeFromCartMutation, isRemovingFromCart } =
    useRemoveFromCartMutation()
  // if (isLoading) {
  //   return
  // }
  const cartTotal = data?.cartItems
    ? calculateCartTotalServer(data.cartItems)
    : 0
  return (
    <div className="bg-white">
      {/* Mobile menu */}

      {/* Flyout meus */}

      <main>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                {data?.cartItems?.map(({ product }: any) => (
                  <li key={product.id} className="flex py-6">
                    <div className="flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-24 w-24 rounded-md object-cover object-top sm:h-32 sm:w-32"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <Link
                              to={'/product/' + product.id}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.title}
                            </Link>
                          </h4>
                          <p className="ml-4 text-sm font-medium text-gray-900">
                            ${product.price}
                          </p>
                        </div>
                        {/* <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.size}
                        </p> */}
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between">
                        {/* <p className="flex items-center space-x-2 text-sm text-gray-700">
                          {product.inStock ? (
                            <CheckIcon
                              className="h-5 w-5 flex-shrink-0 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <ClockIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-300"
                              aria-hidden="true"
                            />
                          )}

                          <span>
                            {product.inStock
                              ? 'In stock'
                              : `Will ship in ${product.leadTime}`}
                          </span>
                        </p> */}
                        <div className="ml-4">
                          <button
                            onClick={() =>
                              removeFromCartMutation.mutate(product._id)
                            }
                            type="button"
                            className="text-sm font-medium text-red-500"
                          >
                            <span>
                              {isRemovingFromCart === product._id
                                ? 'Removing'
                                : 'Remove'}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <div>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Subtotal
                    </dt>
                    <dd className="ml-4 text-base font-medium text-gray-900">
                      ${cartTotal.toFixed(2)}
                    </dd>
                  </div>
                </dl>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes will be calculated at checkout.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  to="/checkout"
                  className="w-full inline-block text-center rounded-md border border-transparent bg-red-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none  focus:ring-offset-gray-50"
                >
                  Checkout
                </Link>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  or
                  <Link
                    to={'/categories/products/electronics'}
                    className="font-medium ml-3 text-red-500 hover:text-red-600"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </section>
          </form>
        </div>

        {/* Policy grid */}
        {/* <section
          aria-labelledby="policies-heading"
          className="border-t border-gray-200 bg-gray-50"
        >
          <h2 id="policies-heading" className="sr-only">
            Our policies
          </h2>

          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {policies.map((policy) => (
                <div
                  key={policy.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 mx-auto h-24 w-auto"
                        src={policy.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-base font-medium text-gray-900">
                      {policy.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {policy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      {/*Footer Start */}

      {/*Footer End */}
    </div>
  )
}
