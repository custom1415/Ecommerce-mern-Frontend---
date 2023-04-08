import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/20/solid'
// import './Checkout.css'
import useCartFetch from '../../hooks/useCart/useCartFetch'
import useRemoveFromCartMutation from '../../hooks/useCart/useRemoveFromCartMutation'

export default function Checkout(): JSX.Element {
  const { data, isLoading, total } = useCartFetch()

  const { removeFromCartMutation } = useRemoveFromCartMutation()

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
                    {data?.cartItems?.map(({ product, quantity}) => (
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
