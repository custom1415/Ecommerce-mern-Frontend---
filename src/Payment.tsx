import { useEffect, useState } from 'react'

import { Elements } from '@stripe/react-stripe-js'
import CheckoutItems from './pages/Checkout/Checkout-Items'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './pages/Checkout/CheckoutForm'
import useCartFetch from './hooks/useCart/useCartFetch'
import axios from 'axios'
import Loader from './components/loader'
// import './pages/Checkout.css'
import { AxiosError } from 'axios'
import { useUserStore } from './zustand/userStore'
import { useOrderStore } from './zustand/orderStore'
import { Link, useNavigate } from 'react-router-dom'
const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`)
function Payment() {
  const [clientSecret, setClientSecret] = useState()

  const [order, setOrder] = useState([])
  const [orderId, setOrderIdTemp] = useState('')
  const { data: cart, isLoading, isError } = useCartFetch()

  const { userId, name } = useUserStore((state) => state.user)

  const navigate = useNavigate()

  useEffect(() => {
    if (cart && name && userId) {
      try {
        const fetch = async () => {
          console.log('called')

          const { data } = await axios.post(
            'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/orders',
            {
              items: cart?.cartItems
            },
            { withCredentials: true }
          )
          console.log(data, 'ordeeeerrrrrr')
          setOrder(data.order)
          setClientSecret(data.clientSecret)

          setOrderIdTemp(data.order._id)
        }
        fetch()
      } catch (error) {
        if (error instanceof AxiosError) console.log(error.message)
      }
    } else if (!name && !userId) {
      navigate('/login')
    }
  }, [cart])

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <h1 className="text-center my-12 text-xl">Something went wrong</h1>
  }
  return (
    <div className="flex w-full lg:h-screen lg:flex-nowrap flex-wrap-reverse ">
      {userId && name ? (
        <>
          {cart && cart?.cartItems?.length < 1 ? (
            <div className="mx-auto max-w-2xl flex flex-col items-center  px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
              <h1 className="py-8 text-4xl font-medium">Your cart is empty.</h1>

              <Link
                to={'/categories/products/electronics'}
                className="whitespace-nowrap  rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-600"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            <>
              {' '}
              <div className="lg:w-1/2 w-full grid h-max lg:place-items-center  justify-items-center lg:h-screen relative lg:pb-0 pb-24 mx-auto max-w-7xl px-4   sm:px-6 lg:px-8 ">
                <div className="lg:fixed lg:w-auto w-full   max-w-lg  mb-24 ">
                  {/* <main className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none"> */}
                  {clientSecret && stripePromise && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                      <CheckoutForm orderId={orderId} />
                    </Elements>
                  )}
                </div>
              </div>
              <CheckoutItems />
            </>
          )}
        </>
      ) : (
        <div className="mx-auto max-w-2xl flex flex-col items-center  px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
          <button className=" rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-600">
            <Link to={'/login'} className="whitespace-nowrap text-white">
              Login
            </Link>
          </button>
        </div>
      )}
    </div>
  )
}

export default Payment
