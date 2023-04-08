import React from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import useCategoryFetch from '../../../hooks/useCategory/useCategoryFetch'
import { Link } from 'react-router-dom'
import { useMenuStore } from '../../../zustand/menuStore'

type Props = {}

const CategoryLinks = (props: Props) => {
  const { data, isLoading: productsLoading } = useCategoryFetch()
  const toggleMenuOpen = useMenuStore((state) => state.toggleMenuOpen)

  return (
    <div className="mt-2">
      <div className="border-b border-gray-200 " />
      <ul className="divide-y last:border-b">
        {data?.map((item) => (
          <li
            key={item.category}
            className="space-y-10 group cursor-pointer capitalize "
          >
            <Link
              to={'/categories/products/' + item.category}
              onClick={() => toggleMenuOpen(false)}
              className="font-medium block px-4 py-4  group-hover:text-red-500 text-gray-900"
            >
              {item.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryLinks
