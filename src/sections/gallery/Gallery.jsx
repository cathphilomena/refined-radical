import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './gallery.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image10.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image11.jpg'
import image7 from '../../assets/image12.jpg'

const Gallery = () => {
  return (
    <section id="gallery">
        <div class="container gallery__container swiper mySwiper">
            <h2 class="gallery__title">Gallery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolorem exercitationem. Expedita libero non rerum consectetur nemo sint? Minima quisquam minus commodi quidem, pariatur ea accusamus architecto necessitatibus maiores esse ut itaque quae nesciunt veniam ab, quis, nam nemo odio!</p>
            <div className='gallery__swiper'>
                <Swiper
                  slidesPerView= {1}
                  spaceBetween={25}
                  breakpoints={{
                    601: {slidesPerView: 2},
                    1025: {slidesPerView: 3}
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                <SwiperSlide><img src={image1}/></SwiperSlide>
                <SwiperSlide><img src={image2}/></SwiperSlide>
                <SwiperSlide><img src={image3}/></SwiperSlide>
                <SwiperSlide><img src={image4}/></SwiperSlide>
                <SwiperSlide><img src={image5}/></SwiperSlide>
                <SwiperSlide><img src={image6}/></SwiperSlide>
                <SwiperSlide><img src={image7}/></SwiperSlide>
                ...
              </Swiper>
            </div>
          </div>
    </section>
  )
}

export default Gallery