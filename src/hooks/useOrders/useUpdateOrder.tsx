import { useMutation, QueryClient, useQueryClient } from 'react-query'
import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useOrderStore } from '../../zustand/orderStore'

// type Props = {
//   refetchCart: () => void
// }
export const useUpdateOrderMutation = () => {
  // const orderId = useOrderStore((state) => state.orderId)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  // const [addingToCart, setAddingToCart] = useState('')
  const { mutate, isSuccess } = useMutation({
    mutationFn: ({
      paymentIntentId,
      orderId
    }: {
      paymentIntentId: string
      orderId: string
    }) => {
      return axios.patch(
        `https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/orders/${orderId}`,
        {
          paymentIntentId
        }
      )
    },

    onError(error) {
      console.log(error)

      if (error instanceof AxiosError)
        if (error.response?.status === 401) {
          navigate('/')
        }
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['Orders'] })
      toast('Order Success!', { type: 'success' })
      // setAddingToCart('')
    }
  })
  return { mutate, orderConfirmed: isSuccess }
}
