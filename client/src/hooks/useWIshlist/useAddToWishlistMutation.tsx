import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const useAddToWishlistMutation = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [addingToWishlist, setAddingToWishlist] = useState('')
  const addToWishlistMutation = useMutation({
    mutationFn: ({ wishlistItem }: { wishlistItem: Product }) => {
      return axios.patch(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/wishlist',
        { wishlistItem }
      )
    },
    onMutate({ wishlistItem }) {
      setAddingToWishlist(wishlistItem._id)
    },
    onError(error) {
      if (error instanceof AxiosError)
        if (error.response?.status === 401) {
          navigate('/login')
        }
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['Wishlist'] })
      queryClient.invalidateQueries({ queryKey: ['Wishlist-ids'] })
      setAddingToWishlist('')
    }
  })
  return { addToWishlistMutation, addingToWishlist }
}

export default useAddToWishlistMutation
