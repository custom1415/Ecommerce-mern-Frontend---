import React from 'react'

import { useMutation } from 'react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../zustand/userStore'

const useGoogleLogout = () => {
  const setUser = useUserStore((state) => state.setUser)
  const navigate = useNavigate()
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/auth/social/logout',
        {},
        { withCredentials: true }
      )

      return data
    },
    onSuccess(data) {
      console.log(data)
      setUser({ name: '', photo: '', userId: '' })
      navigate(data.redirectURI)
    },
    onError(error, variables, context) {
      console.log(error)
    }
  })

  return {
    logout: logoutMutation.mutate,
    isLoading: logoutMutation.isLoading,
    error: logoutMutation.error,
    isSuccess: logoutMutation.isSuccess,
    data: logoutMutation.data
  }
}

export default useGoogleLogout
