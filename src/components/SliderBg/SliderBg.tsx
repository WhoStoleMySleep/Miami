// Import component styles
import './SliderBg.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Controller, Mousewheel, Parallax } from 'swiper'

// Import Swiper styles
import 'swiper/css';

// Import images
const imgs = [
  require('../../assets/images/one.jpg'),
  require('../../assets/images/two.jpg'),
  require('../../assets/images/three.jpg'),
  require('../../assets/images/four.jpg'),
  require('../../assets/images/five.jpg'),
  require('../../assets/images/six.jpg'),
  require('../../assets/images/seven.jpg'),
  require('../../assets/images/eight.jpg'),
  require('../../assets/images/nine.jpg'),
]

const SliderBg = (props: any) => {
  const params = {
    modules: [ Mousewheel, Parallax, Controller ],
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
    onSwiper: props.setControlledSwiper,
  }
  
  return (
    <Swiper className="slider slider_bg" {...params}>
      <SwiperSlide className="slider__item">
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[0]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__img" data-swiper-parallax="30%" style={{backgroundImage: `url(${imgs[1]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[2]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__img" data-swiper-parallax="30%" style={{backgroundImage: `url(${imgs[3]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[4]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__img" data-swiper-parallax="30%" style={{backgroundImage: `url(${imgs[5]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[6]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__img" data-swiper-parallax="30%" style={{backgroundImage: `url(${imgs[7]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[8]})`}}></div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderBg;
