import { useQuery } from 'react-query'

import { useParams, useSearchParams } from 'react-router-dom'

type Response = {
  products: Product[]
  currentPage: number
  totalPages: number
  category: Category
}
type ApiResponse = Promise<Response>

export const useCategoryProductsFetch = () => {
  const { category, page, pageSize } = useParams()
  const [searchParams] = useSearchParams()

  const sortQuery = searchParams.get('sort')

  const key = [
    'products',
    category,
    sortQuery?.length ? sortQuery.split(' ')[0] : 'default',
    sortQuery?.length ? sortQuery.split(' ')[1] : 'default'
  ]

  async function fetchProducts(): ApiResponse {
    const url = `https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/categories/products?category=${category}&page=${
      page || 1
    }&pageSize=${pageSize || 10}${
      sortQuery?.length
        ? `&sort=${sortQuery.split(' ')[0]}+${sortQuery.split(' ')[1]}`
        : ''
    }`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const { error, data, isLoading } = useQuery(key, fetchProducts, {
    onSuccess: (data) => {
      console.log('Successfully fetched products:', data)
    }
  })

  return { isLoading, error, data }
}
