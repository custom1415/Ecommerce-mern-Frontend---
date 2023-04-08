import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

type WishlistResponse = {
  wishlist: Product[]
}
type ApiResponse = Promise<WishlistResponse>

export const useWishlistFetch = () => {
  async function fetchWishlistProducts(): ApiResponse {
    const url = `https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/wishlist`
    const response = await fetch(url)
    const data = await response.json()
    return data
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
