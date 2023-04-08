import { AiFillStar } from 'react-icons/ai'
type Props = {
  rating: number
  reviewCount: number
}

const Rating = ({ rating, reviewCount }: Props) => {
  const starPercentage = (rating / 5) * 100
  const starStyle = `${starPercentage}%`

  return (
    <div
      className="relative flex items-center gap-1"
      aria-labelledby="rating-label"
    >
      <span className="sr-only" id="rating-label">
        Product rating: {rating} out of 5 stars
      </span>
      <div className="w-max ">
        <div className="overflow-hidden" style={{ width: `${starStyle}` }}>
          <div className="flex text-yellow-400 min-w-max  z-10 relative  ">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="flex text-gray-300 absolute top-1/2 -translate-y-1/2">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>

      <p className="text-xs text-gray-400">({reviewCount})</p>
    </div>
  )
}

export default Rating
