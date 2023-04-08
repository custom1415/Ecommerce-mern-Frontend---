import React from 'react'

type Props = {}

const Pagination = (props: Props) => {
  const totalPages = 6
  const currentPage = 1
  const totalProducts = 123

  const pages = []

  // Calculate page numbers to show
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  // Show ... for long lists of pages
  const ellipsisStart = currentPage > 4 ? '...' : ''
  const ellipsisEnd = currentPage < totalPages - 3 ? '...' : ''

  // Handle page click
  const handlePageClick = () => {
    // onPageChange(page)
  }

  // Render pagination
  return (
    // <ul>
    //   <li>
    //     Showing {currentPage} of {totalPages} pages ({totalProducts} products)
    //   </li>
    //   {pages.map((page) => {
    //     if (
    //       page === 1 ||
    //       page === totalPages ||
    //       (page >= currentPage - 2 && page <= currentPage + 2)
    //     ) {
    //       return (
    //         <li
    //           key={page}
    //           className={page === currentPage ? 'active' : ''}
    //           onClick={() => handlePageClick()}
    //         >
    //           {page}
    //         </li>
    //       )
    //     } else if (page === 2 || page === totalPages - 1) {
    //       return (
    //         <li key={page} onClick={() => handlePageClick()}>
    //           {page}
    //         </li>
    //       )
    //     } else if (page === 3 && currentPage > 5) {
    //       return <li key={page}>{ellipsisStart}</li>
    //     } else if (page === totalPages - 2 && currentPage < totalPages - 4) {
    //       return <li key={page}>{ellipsisEnd}</li>
    //     }
    //   })}
    // </ul>
    <nav
      aria-label="Pagination"
      className="mx-auto my-12 flex max-w-7xl justify-between px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
    >
      <div className="min-w-0 flex-1">
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          Previous
        </a>
      </div>
      <div className="hidden space-x-2 sm:flex">
        {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          1
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-indigo-600 bg-white px-4 ring-1 ring-indigo-600 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          3
        </a>
        <span className="inline-flex h-10 items-center px-1.5 text-gray-500">
          ...
        </span>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          10
        </a>
      </div>
      <div className="flex min-w-0 flex-1 justify-end">
        <a
          href="#"
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          Next
        </a>
      </div>
    </nav>
  )
}

export default Pagination
