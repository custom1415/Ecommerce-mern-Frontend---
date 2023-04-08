import React from 'react'
import { ImageGrid } from '../Image-grid/ImageGrid'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Summer styles are finally here
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
        </div>
        <div>
          <div className="mt-10">
            {/* Decorative image grid */}
            <ImageGrid />

            <Link
              to="/categories/products/women's clothing"
              className="inline-block rounded-md border border-transparent bg-red-500 py-3 px-8 text-center font-medium text-white hover:bg-red-600"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
