import React from "react";
import Slides from "../Common/Sides";
import Section2 from "../Component/Section2/Section2";
import Section3 from "../Component/Section3/Section3";
import "../Assets/Home.css";
import SliderWrapper from "../Common/Slider";
import { SwiperSlide } from 'swiper/react';
import Contact from "../Component/Contact";

const Home = () => {
  return (
    <>
      <Slides />
      <Section2 />
      <Section3 />
      {/* section 3 */}
      <div className="container section">
      <SliderWrapper 
      slides={5}
      row={1}
      spacebetween={0}
      colors="#fff"
      mobile={1}
      tablet={1}
      desktop={5}
      Nav={true}
      Pag={true}
      >
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
          </SliderWrapper>
</div>
{/* section 4 */}
<div className="container section">
<div className="section  homepage-map text-center hidden-xs">
  <a href="/partners-stories/" className="btn btn-black" style={{position: 'relative', top: '95%'}}>Our partners
  </a>
</div>
{/* section 5 */}
<div className="section  container">
  <div className="d-flex flex-row mb-4">
    <div className="col-sm-5 text-left  col-xs-12 ">
      <div className="mobile-grey-stars d-sm-none mb-3 " />
      <div className="big-section-title text-md-left mb-md-5">Featured by</div>
      <p>Learn more about X Open Hub and our team from media coverage and newest interviews.</p>
    </div>
    {/* <div className="col-sm-7 col-xs-12"> */}
    </div>
    <SliderWrapper 
      slides={5}
      row={1}
      spacebetween={0}
      colors="#fff"
      mobile={1}
      tablet={1}
      desktop={5}
      Nav={true}
      Pag={true}
      >
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="sec image">
            <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png" alt="section3" />
          </div>
          </SwiperSlide>
          </SliderWrapper>

  </div>
  {/* </div> */}
  <Contact />

  </div>
    </>
  );
};

export default Home;
