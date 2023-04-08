import { useQuery } from 'react-query'

import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

interface OrderedProduct extends Product {
  product: string
  quantity: number
}

interface SingleOrder {
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
type OrderResponse = {
  count: number
  orders: SingleOrder[]
}

type ApiResponse = Promise<OrderResponse>
async function fetchOrders(): ApiResponse {
  const response = await axios.get(
    `https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/orders/showAllMyOrders`
  ,{withCredentials:true})
  return response.data
}

const useOrdersFetch = () => {
  const navigate = useNavigate()
  // const [total, setTotal] = useState(0)
  // const setCartQuantity = useCartStore((state) => state.setCartQuantity)

  const { isLoading, isError, data, refetch } = useQuery(
    'Orders',
    fetchOrders,
    {
      onError(error) {
        console.log(error)
        if (error instanceof AxiosError)
          if (error.response?.status === 401) {
            navigate('/login')
          }
      },
      onSuccess: (data) => {
        console.log(data, 'Orders')

        // const cartTotal = data.cartItems
        //   ? calculateCartTotalServer(data.cartItems)
        //   : 0
        // setTotal(cartTotal)
        // const cartQty = data.cartItems ? calculateCartQty(data.cartItems) : 0
        // setCartQuantity(cartQty)
      }
    }
  )

  return { data, refetchOrders: refetch, isError, isLoading }
}

export default useOrdersFetch
