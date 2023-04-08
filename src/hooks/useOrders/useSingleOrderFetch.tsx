import { useQuery } from 'react-query'

import axios, { AxiosError } from 'axios'

import { useOrderStore } from '../../zustand/orderStore'

interface OrderedProduct extends Product {
  product: string
  quantity: number
}

type OrderResponse = {
  order: {
    _id: string
    clientSecret: string
    createdAt: Date
    orderItems: OrderedProduct[]
    paymentIntentId: string
    status: 'pending' | 'failed' | 'paid' | 'delivered' | 'canceled'
    subtotal: number
    total: number
    updatedAt: Date
    user: string
  }
}
type ApiResponse = Promise<OrderResponse>

async function fetchOrders(orderId: string): ApiResponse {
  console.log('callleddddd', orderId)

  const response = await axios.get(
    `https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/orders/${orderId}`,
    { withCredentials: true }
  )
  return response.data
}

const useSingleOrderFetch = () => {
  const orderId = useOrderStore((state) => state.orderId)

  const { isLoading, isError, data, refetch } = useQuery(
    ['Orders', orderId],
    () => {
      return fetchOrders(orderId)
    },
    {
      onError(error) {
        console.log(error)
        if (error instanceof AxiosError)
          if (error.response?.status === 401) {
            window.open(`${window.location.origin}/login`)
          }
      },
      onSuccess: (data) => {
        console.log(data, 'Single Order')
      },
      enabled: !!orderId
    }
  )

  return {
    data: data?.order,
    orderId: data?.order?._id,
    refetchOrders: refetch,
    isError,
    isLoading
  }
}

export default useSingleOrderFetch
