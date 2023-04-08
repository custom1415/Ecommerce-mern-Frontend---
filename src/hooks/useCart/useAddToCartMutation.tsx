import { useMutation, QueryClient, useQueryClient } from 'react-query'
import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// type Props = {
//   refetchCart: () => void
// }
export const useAddToCartMutation = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const [addingToCart, setAddingToCart] = useState('')
  const addToCartMutation = useMutation({
    mutationFn: ({ productId }: { productId: string }) => {
      console.log(productId, 'prodid')

      return axios.post('https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/cart', { productId })
    },
    onMutate({ productId }) {
      setAddingToCart(productId)
      console.log(productId)
    },
    onError(error) {
      console.log(error)

      if (error instanceof AxiosError)
        if (error.response?.status === 401) {
          navigate('/login')
        }
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['Cart'] })
      setAddingToCart('')
    }
  })
  return { addToCartMutation, addingToCart }
}
