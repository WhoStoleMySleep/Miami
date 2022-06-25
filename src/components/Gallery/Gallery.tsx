// Import component styles
import React, { useState } from 'react';
import Description from '../Description/Description';
import SliderBg from '../SliderBg/SliderBg';
import SliderMain from '../SliderMain/SliderMain';
import './Gallery.scss'

const Gallery = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  
  return (
    <>
      <Description />

      <SliderMain controlledSwiper={controlledSwiper} />
      <SliderBg setControlledSwiper={setControlledSwiper} />
    </>
  );
}

export default Gallery;
