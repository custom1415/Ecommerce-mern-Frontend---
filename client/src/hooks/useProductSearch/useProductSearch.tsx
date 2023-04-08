import React, { useState } from 'react'
import { useQuery } from 'react-query'

type Props = {
  search: string
  page?: number
}

type ApiResponse = Promise<Product[]>
async function searchProducts(search: string, page?: number): ApiResponse {
  const response = await fetch(
    `https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/products/search?q=${
      search || ''
    }${page ? `&page=${page}` : ''}`
  )
  const data = await response.json()
  return data
}

const useProductSearch = ({ search, page }: Props) => {
  //   function useProductSearch(search: string = '', page: number = 1) {
  // let url = `https://jsonplaceholder.typicode.com/todos?_page=${page}`

  // see https://react-query.tanstack.com/guides/important-defaults
  // see https://react-query.tanstack.com/guides/paginated-queries
  const { data, isFetching, isFetched, isLoading } = useQuery(
    ['search', { search, page }],
    //   ['search', { page, search }],
    () => {
      if (!page) {
        return searchProducts(search)
      } else {
        return searchProducts(search, page)
      }
    },
    {
      onSuccess(data) {},
      enabled: !!search || !!page,
      keepPreviousData: !!search
    }

    // the following can be used to avoid refetches on already fetched data (see paginated queries docs)
    // { keepPreviousData: true, staleTime: 5 * 60 * 1000 }
  )
  //   }
  return { SearchResults: data, isLoading }
}

export default useProductSearch
