import { FormEvent, useState } from 'react'
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { StripeLinkAuthenticationElementChangeEvent } from '@stripe/stripe-js'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useClearCartMutation from '../../hooks/useCart/useClearCartMutation'
import { useNavigate } from 'react-router-dom'
import { useOrderStore } from '../../zustand/orderStore'
import { useUpdateOrderMutation } from '../../hooks/useOrders/useUpdateOrder'

// import './Checkout.css'
type Props = {
  orderId: string
}
export default function CheckoutForm({ orderId }: Props) {
  const stripe = useStripe()
  const elements = useElements()

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { clearCartMutation, isSuccess } = useClearCartMutation()
  const navigate = useNavigate()
  const setPaymentIntentId = useOrderStore((state) => state.setPaymentIntentId)
  const setOrderId = useOrderStore((state) => state.setOrderId)
  const { mutate: confirmOrder, orderConfirmed } = useUpdateOrderMutation()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }
    if (!elements) return
    setIsLoading(true)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/orderdetails'
      },
      redirect: 'if_required'
    })
    if (paymentIntent?.status == 'succeeded') {
      setMessage('Success!')
      setIsLoading(false)
      setOrderId(orderId)
      // setOrder(order)
      setPaymentIntentId(paymentIntent.id)

      confirmOrder(
        { paymentIntentId: paymentIntent.id, orderId },
        {
          onSuccess() {
            navigate('/orderdetails')
            clearCartMutation.mutate()
          }
        }
      )
    }

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    else if (
      error?.type === 'card_error' ||
      error?.type === 'validation_error'
    ) {
      setMessage(`${error.message}`)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: 'tabs'
  }

  return (
    <form
      id="payment-form"
      className="shadow-lg shadow-gray-300 p-10 rounded-sm  "
      onSubmit={handleSubmit}
    >
      <h1 className="mb-8 text-2xl font-semibold">Billing Details</h1>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e: StripeLinkAuthenticationElementChangeEvent) => {
          setEmail(e.value.email)
        }}
      />

      {/* @ts-ignore $scope */}
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      {/* <button id="submit"></button> */}
      <button
        disabled={isLoading || !stripe || !elements}
        type="submit"
        className="w-full my-3 rounded-md border border-transparent bg-red-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none"
      >
        <span id="button-text">
          {isLoading ? (
            <AiOutlineLoading3Quarters className="inline-block text-xl animate-spin" />
          ) : (
            'Confirm order'
          )}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}
