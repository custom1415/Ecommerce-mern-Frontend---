import { useQuery } from 'react-query'
import { useState } from 'react'
import {
  calculateCartQty,
  calculateCartTotalServer,
  useCartStore
} from '../../zustand/cartStore'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

type CartItem = {
  _id: string
  user: string
  product: Product
  quantity: number
}

type CartItems = {
  cartItems: CartItem[]
}
type ApiResponse = Promise<CartItems>
async function fetchCart(): ApiResponse {
  const response = await fetch(`/api/v1/cart`, {
    credentials: 'include'
  })
  const data = await response.json()
  return data
}

const useCartFetch = () => {
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const setCartQuantity = useCartStore((state) => state.setCartQuantity)

  const { isLoading, isError, data, refetch } = useQuery('Cart', fetchCart, {
    onError(error) {
      console.log(error)
      if (error instanceof AxiosError)
        if (error.response?.status === 401) {
          navigate('/login')
        }
    },
    onSuccess: (data) => {
      const cartTotal = data?.cartItems
        ? calculateCartTotalServer(data.cartItems)
        : 0
      setTotal(cartTotal)
      const cartQty = data.cartItems ? calculateCartQty(data.cartItems) : 0
      setCartQuantity(cartQty)
    }
  })

  return { data, refetchCart: refetch, isError, isLoading, total }
}

export default useCartFetch
