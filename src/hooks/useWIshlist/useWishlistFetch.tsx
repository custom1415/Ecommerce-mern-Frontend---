import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

type WishlistResponse = {
  wishlist: Product[]
}
type ApiResponse = Promise<WishlistResponse>

export const useWishlistFetch = () => {
  async function fetchWishlistProducts(): ApiResponse {
    const url = `https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/wishlist`
    const response = await axios.get(url, { withCredentials: true })

    return response.data
  }

  const { error, data, refetch, isLoading } = useQuery(
    'Wishlist',
    fetchWishlistProducts,
    {
      onSuccess: (data) => {
        console.log('Successfully fetched products:', data)
      }
    }
  )

  return { isLoading, error, data, refetch }
}
