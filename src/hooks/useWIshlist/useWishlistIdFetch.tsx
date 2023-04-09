import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useWishlistStore } from '../../zustand/wishlistStore'
import axios from 'axios'

type ApiResponse = Promise<string[]>
export const useWishlistIdFetch = () => {
  const setWishlist = useWishlistStore((state) => state.setWishlist)

  async function fetchWishlistProducts(): ApiResponse {
    const url = `/api/v1/wishlist/product-ids`
    const response = await axios.get(url, { withCredentials: true })

    return response.data
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
