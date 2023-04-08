import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

const useClearCartMutation = () => {
  const queryClient = useQueryClient()

  const clearCartMutation = useMutation({
    mutationFn: () => {
      return axios.delete(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/cart/clear/',
        { withCredentials: true }
      )
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['Cart'] })
    }
  })
  return {
    clearCartMutation,
    isSuccess: clearCartMutation.isSuccess
  }
}

export default useClearCartMutation
