import { useQuery } from 'react-query'

type CategoryResponse = {
  category: Category
}
type ApiResponse = Promise<CategoryResponse[]>

const useCategoryFetch = () => {
  const fetchCategories = async (): ApiResponse => {
    const response = await fetch(`/api/v1/categories/`)
    const data = await response.json()
    return data
  }
  const { isLoading, error, data, refetch } = useQuery(
    'Categories',
    fetchCategories,
    {
      onSuccess: (data) => {
        console.log('Successfully fetched Categories:')
      }
    }
  )
  return { data, refetch, error, isLoading }
}

export default useCategoryFetch
