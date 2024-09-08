import React from 'react'
import './Testimonials.css'
// import { Data } from './Data'
// Import Swiper React components
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

import image1 from '../../assets/testimonial1.png'
import image2 from '../../assets/testimonial2.png'
import image3 from '../../assets/testimonial3.png'

const Testimonials = () => {
  const { t } = useTranslation()

  const testimonials = t('testimonials', { returnObjects: true })

  return (
    <section className='testimonial container section' id='testimonials'>
      <h2 className='section__title'>
        {' '}
        <h2 className='section__title'>{t('testimonial_title')}</h2>
      </h2>
      <span className='section__subtitle'>{t('testimonial_subtitle')}</span>

      <Swiper
        className='testimonial__container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {/* {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='testimonial__card' key={id}>
              <img src={image} alt='' className='testimonial__img' />

              <h3 className='testimonial__name'>{title}</h3>
              <p className='testimonial__description'>{description}</p>
            </SwiperSlide>
          )
        })} */}

        <>
          {testimonials.map(({ title, description }, index) => {
            const imageMap = {
              1: image1,
              2: image2,
              3: image3,
            }
            const imageSrc = imageMap[index + 1]
            return (
              <SwiperSlide className='testimonial__card' key={index}>
                <img src={imageSrc} alt='' className='testimonial__img' />
                <h3 className='testimonial__name'>{title}</h3>
                <p className='testimonial__description'>{description}</p>
              </SwiperSlide>
            )
          })}
        </>
      </Swiper>
    </section>
  )
}

export default Testimonials
