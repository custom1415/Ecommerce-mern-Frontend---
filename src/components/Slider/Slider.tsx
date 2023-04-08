import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
// import './styles.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

const slides = [
  {
    id: 1,
    text: 'Slide 1',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
  },

  {
    id: 3,
    text: 'Slide 3',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/004/299/815/large_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg'
  },
  {
    id: 4,
    text: 'Slide 4',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/004/417/428/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg'
  }
]

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{ delay: 1000 }}
      loop={true}
      className="lg:max-w-5xl max-w-md h-[400px] my-12"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="w-full h-full container  ">
            <img
              src={slide.imageUrl}
              className=" w-full h-full object-center object-contain "
              alt={slide.text}
            />
            <div className="">{slide.text}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
