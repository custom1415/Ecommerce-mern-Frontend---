import React from 'react'

type Props = {}

import { useMutation } from 'react-query'
import axios from 'axios'

const useGoogleLogin = () => {
  const loginMutation = useMutation({
    mutationFn: async () => {
      try {
        const { data } = await axios.get(
          'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/auth/google',
          { withCredentials: true }
        )
        return data
      } catch (error) {
        console.log(error)
      }
    }
  })

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isLoading,
    error: loginMutation.error,
    isSuccess: loginMutation.isSuccess,
    data: loginMutation.data
  }
}

export default useGoogleLogin
