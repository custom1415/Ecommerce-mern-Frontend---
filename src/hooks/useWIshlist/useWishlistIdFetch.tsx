import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useWishlistStore } from '../../zustand/wishlistStore'

type ApiResponse = Promise<string[]>
export const useWishlistIdFetch = () => {
  const setWishlist = useWishlistStore((state) => state.setWishlist)

  async function fetchWishlistProducts(): ApiResponse {
    const url = `https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/wishlist/product-ids`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const { error, data, refetch, isLoading } = useQuery(
    'Wishlist-ids',
    fetchWishlistProducts,

    {
      onSuccess: (data) => {
        console.log('Successfully fetched wishlist:', data)
        setWishlist(data)
      }
    }
  )

  return { loading: isLoading, error, data, refetch }
}
