import React, { SetStateAction, useRef } from 'react'
import {
  Bars3Icon,
  CheckIcon,
  ChevronUpDownIcon
} from '@heroicons/react/24/outline'
import { useState, Fragment } from 'react'
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'
import SearchIcon from './icons/Search-icon'
import CartIcon from './icons/Cart-icon'
import AuthLinks from './links/auth-links'
import Logo from './logo/Logo'
import HamburgerIcon from './icons/Hamburger-icon'
import HeartIcon from './icons/HeartIcon'
import { useCartStore } from '../../zustand/cartStore'
import { useUserStore } from '../../zustand/userStore'
import { useQuery } from 'react-query'
import useDebounce from '../../hooks/useDebounce/useDebounce'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import CartSidebar from '../Cart-Sidebar/CartSidebar'
import useProductSearch from '../../hooks/useProductSearch/useProductSearch'
import { Combobox, Transition } from '@headlessui/react'
import { set } from 'react-hook-form'
import MobileMenu from './mobile/Mobile-menu'
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'

// async function searchProducts(search: string) {
//   const response = await fetch(`/api/v1/products/search?q=${search}`)
//   const data = await response.json()
//   return data
// }
// function useProductSearch(search: string = '', page: number = 1) {
//   // let url = `https://jsonplaceholder.typicode.com/todos?_page=${page}`

//   // see https://react-query.tanstack.com/guides/important-defaults
//   // see https://react-query.tanstack.com/guides/paginated-queries
//   return useQuery(
//     ['search', { page, search }],
//     () => searchProducts(search),
//     {
//       onSuccess(data) {

//       },
//       refetchOnMount: false
//     }

//     // the following can be used to avoid refetches on already fetched data (see paginated queries docs)
//     // { keepPreviousData: true, staleTime: 5 * 60 * 1000 }
//   )
// }
const Navbar = () => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)
  const [open, setOpen] = useState(false)
  // const [searchResults, setSearchResults] = useState([])
  const { SearchResults } = useProductSearch({
    search: debouncedSearch
  })
  const [showSearchBar, setShowSearchBar] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <nav
        aria-label="Top"
        className="relative z-[1000] bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter"
      >
        <MobileMenu />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between  items-center">
            <HamburgerIcon />
            <Logo />

            <form className="ml-auto mr-4  ">
              <Combobox value={search}>
                <div
                  className={`${
                    showSearchBar
                      ? 'block fixed top-0 left-0 z-[1000] bg-white h-full'
                      : 'sm:inline-block hidden relative'
                  } sm:relative w-full   cursor-default overflow-hidden rounded-lg  bg-white text-left border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm`}
                >
                  <input
                    className={`w-full h-full border-none sm:inline-block  outline-none focus:ring-red-400 focus:ring-2 sm:py-2 px-4 text-sm leading-5 text-gray-900  `}
                    placeholder="Search for products"
                    onChange={(event) => {
                      setSearch(event.target.value)
                      setOpen(true)
                    }}
                    onBlur={() => setOpen(false)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        if (!search) return

                        navigate('/search?' + `q=${search}&page=1`)
                      }
                    }}
                  />
                  <div
                    tabIndex={-1}
                    onClick={() => setShowSearchBar(!setShowSearchBar)}
                    role="button"
                    className="absolute top-1/2 sm:hidden scale-150  sm:right-0 right-6 bg-gray-900 text-white rounded-full p-1 shadow-xl -translate-y-1/2"
                  >
                    <IoMdClose />
                  </div>
                </div>

                <Transition
                  show={open}
                  as={'div'}
                  className={' relative w-auto z-[1000] bg-white'}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  {SearchResults && search && (
                    <Combobox.Options className="sm:absolute fixed mt-1 sm:top-0 top-[110%] left-0   min-h-max w-full  rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-[1000] bg-white">
                      {!SearchResults.length && search !== '' ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          No products found!
                        </div>
                      ) : (
                        SearchResults.map((item) => (
                          <Combobox.Option
                            onClick={() => setOpen(false)}
                            key={item.id}
                            className="relative hover:bg-gray-200   select-none z-[1000]  sm:px-2 px-4"
                            value={item}
                          >
                            <div className="flex items-center   justify-between">
                              <img className="h-6 w-6 " src={item.image} />

                              <Link
                                to={'/product/' + item._id}
                                className="text-start flex-1 h-full inline-block overflow-hidden   "
                              >
                                <button className=" pl-2  my-1 sm:py-1 py-3  ">
                                  <span className="line-clamp-1  text-start ">
                                    {item.title}
                                  </span>
                                </button>
                              </Link>
                            </div>
                          </Combobox.Option>
                        ))
                      )}
                      {SearchResults.length && search ? (
                        <Link
                          className="block text-center font-light  py-1 italic "
                          to={'/search?' + `q=${search}&page=1`}
                        >
                          <span>View all results</span>
                        </Link>
                      ) : null}
                    </Combobox.Options>
                  )}
                </Transition>
              </Combobox>
            </form>
            <div className="w-max flex items-center gap-4 ">
              <MagnifyingGlassIcon
                className="h-6 w-6  text-gray-400 sm:hidden"
                onClick={() => setShowSearchBar(!showSearchBar)}
              />
              <AuthLinks />
              {/* {name && userId && <HeartIcon />} */}
              {/* Search */}
              {/* Cart */}
              <CartIcon />
            </div>
          </div>
        </div>
      </nav>
      {/* <CartSidebar /> */}
      <Outlet />
    </>
  )
}

export default Navbar
