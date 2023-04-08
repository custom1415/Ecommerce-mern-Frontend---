import React, { useState } from 'react'
import { useMutation, QueryClient, useQueryClient } from 'react-query'
import axios from 'axios'

const useRemoveFromCartMutation = () => {
  const queryClient = useQueryClient()

  const [isRemovingFromCart, setIsRemovingFromCart] = useState('')

  const removeFromCartMutation = useMutation({
    mutationFn: (productId: string) => {
      return axios.delete(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/cart/' +
          productId,
        {
          withCredentials: true
        }
      )
    },
    onMutate(productId) {
      setIsRemovingFromCart(productId)
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['Cart'] })
      setIsRemovingFromCart('')
    }
  })
  return { removeFromCartMutation, isRemovingFromCart }
}

export default useRemoveFromCartMutation
