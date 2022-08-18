
import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// import required modules
import { Autoplay,Navigation,Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderWrapper = ({
  children,
  slides,
  row,
  spacebetween,
  colors,
  mobile,
  tablet,
  desktop,
  Nav,
  Pag,
}) => {
  return (
    <Swiper
      navigation={Nav}
      pagination={Pag ? {type: "bullets", clickable: true } : false}
      grid={{ rows: row }}
      slidesPerView={slides}
      spaceBetween={spacebetween}
      modules={[Autoplay,Navigation,Pagination]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: mobile,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: tablet,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: desktop,
          spaceBetween: 30,
        },
      }}
      style={{
        "--swiper-navigation-color": colors,
      }}
      autoplay
    >
      {children}
    </Swiper>
  );
};

// deafult props
SliderWrapper.defaultProps = {
  Nav: true,
  Pag: false
}
export default SliderWrapper;
