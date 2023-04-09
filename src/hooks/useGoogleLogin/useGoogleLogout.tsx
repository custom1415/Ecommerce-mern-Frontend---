import React from 'react'

import { useMutation } from 'react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../zustand/userStore'

const useGoogleLogout = () => {
  const setUser = useUserStore((state) => state.setUser)
  const navigate = useNavigate()
  const logoutMutation = useMutation({
    mutationFn: async ({ isSocialLogout }: { isSocialLogout: boolean }) => {
      const url = isSocialLogout
        ? '/api/v1/auth/social/logout'
        : '/api/v1/auth/logout'
      const { data } = await axios.get(url, { withCredentials: true })

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
