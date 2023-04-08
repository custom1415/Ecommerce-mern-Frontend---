import { Fragment } from 'react'
import ProdList from '../../Product-List-Page/ProductList.js'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Footer from '../../components/landing-page/sections/Footer.js'
import { useParams, useNavigate } from 'react-router-dom'
import useCategoryFetch from '../../hooks/useCategory/useCategoryFetch.js'
import { Menu, Transition } from '@headlessui/react'
import { useCategoryProductsFetch } from '../../hooks/useCategory/useCategoryProductsFetch.js'
// import { useCategoryProductsFetch } from '../hooks/useCategoryProductsFetch';
import Loader from '../../components/loader.js'

const sortOptions = [
  {
    name: 'Most Popular',
    field: 'rating.count',
    sortOrder: 'dec',

    current: true
  },
  {
    name: 'Best Rating',
    field: 'rating.rate',
    sortOrder: 'dec'
  },
  {
    name: 'Newest',

    field: 'updatedAt',
    sortOrder: 'dec'
  },
  {
    name: 'Price: Low to High',
    field: 'price',

    sortOrder: 'asc'
  },
  {
    name: 'Price: High to Low',
    sortOrder: 'dec',
    field: 'price'
  }
]

export default function Category() {
  const params = useParams()
  const navigate = useNavigate()

  const { data, isLoading: productsLoading } = useCategoryFetch()

  const { isLoading } = useCategoryProductsFetch()

  if (isLoading || productsLoading) {
    return <Loader />
  }

  return (
    <div className="bg-white">
      <div>
        <main>
          <div className="bg-gray-100 overflow-y-hidden overflow-x-scroll  ">
            <div className="mx-auto max-w-7xl px-4 sm:flex sm:items-center sm:px-6 lg:px-8 justify-center">
              <div className="-m-1 sm:flex hidden items-center justify-evenly w-full  ">
                {data?.map(({ category }: any) => {
                  return (
                    <div
                      key={category}
                      className="p-6  hover:bg-slate-200 cursor-pointer"
                      onClick={() => {
                        navigate('/categories/products/' + category)
                      }}
                    >
                      <h1 className=" whitespace-nowrap capitalize flex-1 text-center ">
                        {category}
                      </h1>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200   ">
            <div className="mx-auto py-8 flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <h1 className="capitalize text-4xl font-bold">
                {params.category}
              </h1>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute lg:-left-24 -left-28 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          <button
                            onClick={() => {
                              navigate(
                                `?sort=${option.field} ${option.sortOrder}`
                              )
                            }}
                            className="
                                   text-gray-500 hover:text-gray-900 w-full text-start hover:bg-gray-100   block px-4 py-2 text-sm"
                          >
                            {option.name}
                          </button>
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <ProdList />
        </main>
        <Footer />
      </div>
    </div>
  )
}
