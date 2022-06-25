// Import component styles
import './SliderMain.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Controller, FreeMode, Mousewheel, Parallax } from 'swiper'

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

const SliderMain = (props: {controlledSwiper: any}) => {
  const params = {
    modules: [ FreeMode, Mousewheel, Parallax, Controller ],
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 20 
      },
      680: {
        slidesPerView: 3.5,
        spaceBetween: 60 
      }
    },
    controller: { control: props.controlledSwiper }
  }

  const openSlide = (event: any) => {
    const thisItem = event.target

    thisItem.classList.toggle('opened')
  }

  const onSlideChange = (slider: any) => {
    const description = document.querySelector('.description')

    if (description) {
      slider.activeIndex > 0 ? description.classList.add('hidden') : description.classList.remove('hidden')
    }
  }
  
  return (
    <Swiper className="slider slider_main" {...params} onSlideChange={onSlideChange}>
      <SwiperSlide className="slider__item" onClick={openSlide}>
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[0]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" onClick={openSlide}>
        <div className="slider__img" data-swiper-parallax="30%" style={{backgroundImage: `url(${imgs[1]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" onClick={openSlide}>
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[2]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" onClick={openSlide}>
        <div className="slider__img" data-swiper-parallax="30%" style={{backgroundImage: `url(${imgs[3]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" onClick={openSlide}>
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[4]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" onClick={openSlide}>
        <div className="slider__img" data-swiper-parallax="30%" style={{backgroundImage: `url(${imgs[5]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" onClick={openSlide}>
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[6]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" onClick={openSlide}>
        <div className="slider__img" data-swiper-parallax="30%" style={{backgroundImage: `url(${imgs[7]})`}}></div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" onClick={openSlide}>
        <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: `url(${imgs[8]})`}}></div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderMain;
