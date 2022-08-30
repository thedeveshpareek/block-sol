import React from "react";
// import "../Assets/About.css";
import HeaderBreadcrumb from "../Common/HeaderBreadcrumb";
import Contact from "../Component/Contact";
const About = () => {
  return (
    <>
      <HeaderBreadcrumb title="About" />
      <div className="section container">
        <div className="stars stars-left"></div>
        <h1 className="entry-title">About us</h1>
        <div className="row">
          <div className="offset-md-1 col-md-5 text-left">
            <div className="big-section-title small-letter mb-4">
              Who we are
            </div>
            <p className>
              X Open Hub is a regulated London based fin-tech company with a
              technology center in Warsaw, Poland. We provide multi-asset
              liquidity and cutting-edge trading technology while maintaining a
              fully open environment. X Open Hub is a global company with over
              twelve years’ experience in providing world-class trading
              technology for banks, brokers and startups.
            </p>
          </div>
          <div className="align-self-center col-md-5 offset-md-1">
            <img
             alt="wait_while_loading"
              className="img-fluid d-sm-none"
              src="https://xopenhub.pro/wp-content/themes/xopenhub/images/lead/about_us.png"
            />
            <video className="video-fluid" autoplay loop muted>
              <source
                src="https://xopenhub.pro/wp-content/themes/xopenhub/video/xoh_about_us_520x400.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="big-section-title mb-1 mt-5">
              We help businesses
              <br />
              <span className="red">thrive worldwide</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="row mb-5">
          <div className="col-md-1 text-center">
            <div className="vl-1"></div>
            <svg height={6} width={6} className="mt-4 snip-svg">
              <circle cx={3} cy={3} r={3} fill="red"></circle>
            </svg>
            <div className="vertical-text mt-5">Company in numbers</div>
          </div>
          <div className="col-md-11">
            <img 
            alt="wait_while_loading"
              src="https://xopenhub.pro/wp-content/themes/xopenhub/images/about_world.png"
              className="img-fluid mx-auto d-block"
            />
          </div>
        </div>
      </div>

      <div className="container section">
        <div
          className="big-section-title red mb-1"
          style={{ color: "rgba(227,5,19,1)" }}
        >
          Our regulations
        </div>
        <div className="d-flex flex-wrap mt-5 text-center text-sm-left">
          <div className="col-md-4">
            <div className="col-border-light instruments">
              <div className="big-section-title mb-md-4">FCA</div>
              <a
                className
                href="https://register.fca.org.uk/s/firm?id=001b000000NMI9WAAX"
                style={{ marginRight: "60%" }}
              >
                <img
                 alt="wait_while_loading"
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg"
                  className
                />
                <span style={{ padding: "3px" }} className>
                  Learn more
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-border-light instruments">
              <div className="big-section-title  mb-md-4">CYSEC</div>
              <a
                className
                href="https://www.cysec.gov.cy/en-GB/entities/investment-firms/cypriot/37686/"
                style={{ marginRight: "60%" }}
              >
                <img
                 alt="wait_while_loading"
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg"
                  className
                />
                <span style={{ padding: "3px" }} className>
                  Learn more
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-border-light instruments">
              <div className="big-section-title  mb-md-4">KNF</div>
              <a
                className
                href="https://www.knf.gov.pl/en/ENTITIES#1667244"
                style={{ marginRight: "60%" }}
              >
                <img
                 alt="wait_while_loading"
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg"
                  className
                />
                <span style={{ padding: "3px" }} className>
                  Learn more
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap mt-5 text-center text-sm-left">
          <div className="col-md-4">
            <div className="col-border-light instruments">
              <div className="big-section-title  mb-md-4">IFSC</div>
              <a
                className
                href="https://www.ifsc.gov.bz/license-verification-2/?wdt_search=xtb&submit=Submit"
                style={{ marginRight: "60%" }}
              >
                <img
                 alt="wait_while_loading"
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg"
                  className
                />
                <span style={{ padding: "3px" }} className>
                  Learn more
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-border-light instruments">
              <div className="big-section-title  mb-md-4">DFSA</div>
              <a
                className
                href="/"
                style={{ marginRight: "60%" }}
              >
                <img
                 alt="wait_while_loading"
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg"
                  className
                />
                <span style={{ padding: "3px" }} className>
                  Learn more
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-border-light instruments">
              <div className="big-section-title  mb-md-4">FSCA</div>
              <a
                className
                href="https://ir.xtb.com/en/xtb-africa-pty-ltd-licensed-to-operate-in-south-africa/"
                style={{ marginRight: "60%" }}
              >
                <img
                 alt="wait_while_loading"
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg"
                  className
                />
                <span style={{ padding: "3px" }} className>
                  Learn more
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container section s-white">
        <div className="d-flex flex-wrap">
          <div className="col-md-2 align-self-center">
            <div
              className="big-section-title red"
              style={{ textTransform: "unset", color: "rgba(227,5,19,1)" }}
            >
              Corporate governance
            </div>
          </div>
          <div className="col-md-5 offset-md-1 align-self-center">
            <p className>
              X Open Hub is a part of a regulated European financial group with
              a large global presence. XTB capital group is listed on the Warsaw
              Stock Exchange and meets the highest standards of corporate
              governance, financial reporting, and disclosure.
            </p>
          </div>
          <div className="col-md-4 align-self-center">
            <img
             alt="wait_while_loading"
              className="img-fluid"
              src="https://xopenhub.pro/wp-content/themes/xopenhub/images/instruments-cross.svg"
            />
          </div>
        </div>
      </div>

      <div className="container section s-white">
        <div className="d-flex flex-wrap mt-5 text-center">
          <div className="col-md-4 mb-4">
            <div
              className="page-icons col-border-light"
              style={{ paddingTop: "26px", paddingBottom: "26px" }}
            >
              <img
               alt="wait_while_loading"
                className="text-center"
                src="https://xopenhub.pro/wp-content/themes/xopenhub/images/PricewaterhouseCoopers_Logo.png"
              />
              <a
                className
                href="https://ircdn.xtb.com/files/2021/02/03164106/RB-2-2021-Wstepne-wyniki-finansowe-i-operacyjne-2020-ENG-www.pdf"
              >
                <img
                 alt="wait_while_loading"
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg"
                  className
                />
                <span style={{ padding: "3px" }} className>
                  Learn more
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="page-icons col-border-light"
              style={{ paddingTop: "26px", paddingBottom: "26px" }}
            >
              <img
               alt="wait_while_loading"
                className="text-center"
                src="https://xopenhub.pro/wp-content/themes/xopenhub/images/gielda-papierow-wartosciowych-w-warszawie-group-gpw-vector-logo.png"
              />
              <a
                className
                href="https://www.gpw.pl/company-factsheet?isin=PLXTRDM00011"
              >
                <img
                 alt="wait_while_loading"
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg"
                  className
                />
                <span style={{ padding: "3px" }} className>
                  Learn more
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="page-icons col-border-light"
              style={{ paddingTop: "26px", paddingBottom: "26px" }}
            >
              <img
               alt="wait_while_loading"
                className="text-center"
                src="https://xopenhub.pro/wp-content/themes/xopenhub/images/KDPW.png"
              />
              <a
                className
                href="https://www.financemagnates.com/thought-leadership/xtb-awarded-kdpws-prize-best-quality-reporting-2017/"
              >
                <img
                alt="wait_while_loading"
                  src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg"
                  className
                />
                <span style={{ padding: "3px" }} className>
                  Learn more
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <div
          className="stars-bg-grey mb-4 d-sm-none"
          style={{ minHeight: "40px" }}
        ></div>
        <div
          className="big-section-title red mb-1"
          style={{ color: " rgba(227,5,19,1)" }}
        >
          Our leadership
        </div>
        <div className="d-flex flex-wrap mt-5 text-center text-sm-left">
          <div className="col-md-4 mt-5 mt-md-0">
            <div className="col-border-light" style={{ width: "316px" }}>
              <img
              alt="wait_while_loading"
                src="https://xopenhub.pro/wp-content/themes/xopenhub/images/team/mc2.jpg"
                className
              />
              <div className="p-3 text-left">
                <a
                  href="https://www.linkedin.com/in/micha%C5%82-copiuk-48955b79/"
                  className
                >
                  <img
                  alt="wait_while_loading"
                    className="float-right"
                    src="https://xopenhub.pro/wp-content/themes/xopenhub/images/in-red.svg"
                  />
                </a>
                <div className="section-title text-uppercase mb-1">
                  Michał Copiuk
                </div>
                <p className="red mb-0 font-weight-bold">
                  CEO
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5 mt-md-0">
            <div className="col-border-light" style={{ width: "316px" }}>
              <img
              alt="wait_while_loading"
                src="https://xopenhub.pro/wp-content/themes/xopenhub/images/team/lm.png"
                className
              />
              <div className="p-3">
                <a
                  href="https://www.linkedin.com/in/%C5%82ukasz-mazurek-a00aa068/"
                  className
                >
                  <img
                  alt="wait_while_loading"
                    className="float-right"
                    src="https://xopenhub.pro/wp-content/themes/xopenhub/images/in-red.svg"
                  />
                </a>
                <div className="section-title text-uppercase mb-1">
                  Łukasz Mazurek
                </div>
                <p className="red mb-0 font-weight-bold">
                  Broker Solution Specialist
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5 mt-md-0">
            <div className="col-border-light" style={{ width: "316px" }}>
              <img
              alt="wait_while_loading"
                src="https://xopenhub.pro/wp-content/themes/xopenhub/images/team/pn.png"
                className
              />
              <div className="p-3">
                <a
                  href="https://www.linkedin.com/in/pawe%C5%82-nagajek-820bbb9b/"
                  className
                >
                  <img
                  alt="wait_while_loading"
                    className="float-right pl-2"
                    src="https://xopenhub.pro/wp-content/themes/xopenhub/images/in-red.svg"
                  />
                </a>
                <div className="section-title text-uppercase mb-1">
                  Paweł Nagajek
                </div>
                <p className="red mb-0 font-weight-bold">
                  Head of Broker Implementation and Support
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="stars-bg-grey mt-5 d-sm-none"
          style={{ minHeight: "40px" }}
        ></div>
      </div>

      <Contact />
    </>
  );
};

export default About;
