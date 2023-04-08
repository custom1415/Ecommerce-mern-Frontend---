import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

const useClearCartItemMutation = () => {
  const queryClient = useQueryClient()

  const [isClearingFromCart, setIsClearingFromCart] = useState('')

  const clearCartMutation = useMutation({
    mutationFn: (productId: string) => {
      return axios.delete(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/cart/clear/' +
          productId
      )
    },
    onMutate(productId) {
      setIsClearingFromCart(productId)
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['Cart'] })
      setIsClearingFromCart('')
    }
  })
  return {
    clearCartMutation,
    isClearingFromCart,
    isSuccess: clearCartMutation.isSuccess
  }
}

export default useClearCartItemMutation
