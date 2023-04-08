import React, { useState } from 'react'
import SearchIcon from '../icons/Search-icon'
import { Link, useNavigate } from 'react-router-dom'
import useDebounce from '../../../hooks/useDebounce/useDebounce'
import useProductSearch from '../../../hooks/useProductSearch/useProductSearch'
import { useUserStore } from '../../../zustand/userStore'

type Props = {}

const SearchBar = (props: Props) => {
  const { name, userId } = useUserStore((state) => state.user)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)
  // const [searchResults, setSearchResults] = useState([])
  const { SearchResults } = useProductSearch({
    search: debouncedSearch
  })
  const navigate = useNavigate()
  return (
    <form className="ml-auto mr-8 ">
      <div className="relative w-full  cursor-default overflow-hidden rounded-lg  bg-white text-left border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
        <input
          className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          placeholder="Search for products"
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              navigate('/search?' + `q=${search}&page=1`)
            }
          }}
          value={search}
        />
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <SearchIcon search={search} />
        </div>
      </div>
      <div
        className={'relative'}
        // leave="transition ease-in duration-100"
        // leaveFrom="opacity-100"
        // leaveTo="opacity-0"
      >
        {SearchResults && search && (
          <ul className="absolute mt-1 min-h-max w-full  rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-[1000] bg-white">
            {!SearchResults.length && search !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                No products found!
              </div>
            ) : (
              SearchResults.map((item) => (
                <li
                  key={item.id}
                  className="relative hover:bg-gray-200  select-none z-[1000] line-clamp-1  px-2"
                >
                  <div className="flex items-center   justify-between">
                    <img className="h-6 w-6 " src={item.image} />

                    <Link
                      onClick={() => setSearch('')}
                      to={'/product/' + item._id}
                      className="text-start flex-1 h-full inline-block  "
                    >
                      <button className=" pl-2  my-1 py-1   ">
                        <span className="line-clamp-1  text-start inline-block">
                          {item.title}
                        </span>
                      </button>
                    </Link>
                  </div>
                </li>
              ))
            )}
            {SearchResults.length && search ? (
              <div className="flex justify-center  ">
                <Link
                  className="inline-block"
                  to={'/search?' + `q=${search}&page=1`}
                >
                  <button className="w-max font-light  py-1 italic">
                    View all results
                  </button>
                </Link>
              </div>
            ) : null}
          </ul>
        )}
      </div>
    </form>
  )
}

export default SearchBar
