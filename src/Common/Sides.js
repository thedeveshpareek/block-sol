import React from 'react'
import Section1 from "../Component/Section1";
import SliderWrapper from "../Common/Slider";
import { SwiperSlide } from 'swiper/react';

const Sides = () => {
  return (
    <div>
       <SliderWrapper
            slides={1}
            row={1}
            spacebetween={0}
            colors="#fff"
            mobile={1}
            tablet={1}
            desktop={1}
            Nav={true}
            Pag={true}
        >
            <SwiperSlide>
                <Section1 />
            </SwiperSlide>
            <SwiperSlide>
                <Section1 alighToggle={true} />
            </SwiperSlide>
        </SliderWrapper>
    </div>
  )
}

export default Sides
