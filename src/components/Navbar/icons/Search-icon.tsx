import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import useDebounce from '../../../hooks/useDebounce/useDebounce'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

type Props = {
  search: string
}

const SearchIcon = ({ search }: Props) => {
  return (
    <div className="flex ">
      <Link
        to={'/search?' + `q=${search}&page=1`}
        className="p-2 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  )
}

export default SearchIcon
