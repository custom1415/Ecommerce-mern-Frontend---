import axios from 'axios'
import { UseBaseQueryOptions, UseQueryOptions, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

type ApiResponse = {
  product: Product
  moreFromTheCategory: Product[]
}

type FetchProductsResponse = Promise<ApiResponse>

export const useSingleProductFetch = () => {
  const { id } = useParams()

  async function fetchProducts(): FetchProductsResponse {
    const url = `/api/v1/products/${id}`
    const { data } = await axios.get(url)

    return data
  }

  const { isError, data, refetch, isLoading } = useQuery<ApiResponse>(
    ['Single Product', id],
    fetchProducts,

    {
      onSuccess: (data) => {
        console.log('Successfully fetched products:', data)
      }
    }
  )

  return { isLoading, isError, data, refetch }
}
