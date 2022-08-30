import React from "react";
import HeaderBreadcrumb from "../Common/HeaderBreadcrumb";
import { ProductXoh, ProductImage } from "../Component/ProductXoh";
import { SwiperSlide } from "swiper/react";
import SliderWrapper from "../Common/Slider";
import Contact1 from "../Component/Contact";
const styles = {
  black: {
    minHeight: "100px",
    fontSize: "54px",
  },
};

const Product = () => {
  return (
    <>
      <HeaderBreadcrumb title="Products" />

      <div className="section s-white container">
        <div className="d-flex flex-row">
          <div className="align-self-center  col-md-9 ">
            <h1 className="title black" style={styles.black}>
              TRADING PLATFORM PROVIDER
            </h1>
            <figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
              <div className="wp-block-embed__wrapper">
                <iframe
                  loading="lazy"
                  title="X Open Hub - The platform your traders deserve."
                  width="100%"
                  height="452"
                  src="https://www.youtube.com/embed/GsmtThtO3os?&amp;autoplay=1&amp;loop=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;playlist=GsmtThtO3os"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
            </figure>
          </div>
          <div className="col-md-2 col-md-offset-1 align-self-end text-left hidden-xs">
            <div className="h-50 d-inline-block " style={{ width: "260px" }}>
              <div className="stars-bg" style={{ minHeight: "120px" }}></div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="align-self-center  col-md-9 ">
            <p>
              We understand that brokers want to differentiate themselves and
              meet all client demand. We know that in this crowded market place
              there is no argument to do the same as every other broker. This is
              why we created the XOH Trader platform - a modern, cutting-edge,
              white-label environment for each type of brokerage.
            </p>
          </div>
        </div>
      </div>

      <div className="section s-white container">
        <div className="d-flex flex-row">
          <div className="col-md-12">
            <div className="big-section-title small-letter mb-4 text-md-left">
              <span className="red">FRONT END</span> OFFICE SYSTEM
            </div>
          </div>
        </div>
      </div>

      <ProductXoh />
      <div className="section container">
        <div className="row">
          <div className="col-md-1 text-center">
            <div className="vl-1"></div>
          </div>
          <div className="col-md-11">
            <div className="d-flex flex-row mt-12">
              <div
                className="big-section-title small-letter col-mb-12 mb-5 text-center text-md-left  "
                // style=" text-align: left; "
              >
                Intuitive and powerful HTML5 platform optimized to deliver{" "}
                <span className="red">
                  high performance, reliability and speed
                </span>{" "}
                across all browsers.
                <div style={{ textAlign: "right" }}>
                  <a href="/try-demo/" className="btn btn-red mt-3">
                    CHECK OUR PLATFORM
                  </a>
                </div>
              </div>
            </div>
            <ProductImage />
          </div>
        </div>
      </div>
      <ProductXoh
        title="XOH MOBILE"
        img1="https://xopenhub.pro/wp-content/themes/xopenhub/images/mobile_apps.png"
        img2=""
        imgLogo="https://xopenhub.pro/wp-content/themes/xopenhub/images/mobile_tech2.png"
        width={{ width: "400px" }}
        rightImg="https://xopenhub.pro/wp-content/themes/xopenhub/images/xs5_mobile.png"
        text="XOH Mobile app offers complete account management, graphs and
      other vital tools required for real time financial trading. The
      platform offers a convenient way to keep up with the market's
      latest developments, analyse them, and make the appropriate
      decision."
      />
      <div className="section container">
        <div className="d-flex flex-row">
          <div className="col-xs-12">
            <img alt="wait_while_loading"
              className="img-fluid"
              src="https://xopenhub.pro/wp-content/themes/xopenhub/images/XOH_Mobile_app.png"
            />
          </div>
        </div>
      </div>
      <div className="section container">
        <ProductImage />
      </div>

      <div className="section container">
        <div className="d-flex flex-row mb-4">
          <div className="col-sm-12 ofset-sm-1 text-left ">
            <div className="big-section-title  mb-3  text-md-left">
              <span className="red">COMPLETE</span> OUTSOURCING SOLUTION
            </div>
          </div>
        </div>
        <div className="d-flex flex-row mb-4">
          <div className="col-sm-6 text-md-left">
            <div >
              <p>
                Offload expensive costs of licensing, ownership, IT
                infrastructure, maintenance and additional staff. With no server
                side software or hardware to install, our solution is
                easily-integrated and instantly scalable, leveraging our
                cloud-based infrastructure (collocated with all major banks and
                liquidity providers) to deliver sub-millisecond precision.
              </p>

              <p>
                We take on integration responsibility almost entirely, leaving
                you to handle the important task of customizing your service
                offering from the back end.
              </p>
            </div>
            <div
              className="h-50  float-left mt-5 hidden-xs"
              style={{width: "63px",marginRight:"50px",float:"left"}}
            >
              <div className="stars-bg" style={{minHeight: "250px"}}></div>
            </div>
            <div className="big-section-title  mb-3 mt-5 small-letter text-md-left   ">
              What makes us
              <br />
              <span className="red">stand out</span>
            </div>
            <ul className="list-red-dot mt-4">
              <li>Extended customization and branding</li>
              <li>Cost effective pricing packages</li>
              <li>Quick set up &amp; Integration</li>
              <li>Easy Localization</li>
            </ul>
          </div>
          <div className="col-sm-6 text-left mt-5 ">
                <img alt="wait_while_loading" className="img-fluid" src="https://xopenhub.pro/wp-content/themes/xopenhub/images/xserver.png"/>
            </div>
        </div>
      </div>

      <div className="section container">
      <div className="d-flex flex-row mb-4">
            <div className="col-sm-12 ofset-sm-1 text-left ">
                <div className="big-section-title small-letter  mb-3">The world's most innovative companies
                     <span className="red">use our technology</span> to boost their business
                </div>
            </div>

        </div>
        <SliderWrapper
            slides={9}
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
                <img
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png"
                  alt="section3"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec image">
                <img
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png"
                  alt="section3"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec image">
                <img
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png"
                  alt="section3"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec image">
                <img
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png"
                  alt="section3"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec image">
                <img
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png"
                  alt="section3"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec image">
                <img
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png"
                  alt="section3"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec image">
                <img
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png"
                  alt="section3"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sec image">
                <img
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/clients/xoh_blue_logos_clients1.png"
                  alt="section3"
                />
              </div>
            </SwiperSlide>
          </SliderWrapper>
        </div>

        <Contact1 />

    </>
  );
};

export default Product;
