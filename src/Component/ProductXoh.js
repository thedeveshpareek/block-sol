import React from "react";
import {SVG1,SVG2,SVG3,SVG4} from "../Common/SVG";

export const ProductXoh = (props) => {
  return (
    <>
      <div className="Xoh-component">
        <div className="section s-white container">
          <div className="d-flex flex-row">
            <div className="col-md-6 ">
              <div
                className="d-inline-block hidden-xs float-left "
                style={{ width: "63px", marginRight: "30px",float:'left' }}
              >
                <div className="stars-bg" style={{ minHeight: "390px", }}></div>
              </div>
              <div className="big-section-title  small-letter mb-5  text-md-left " >
                <span className="red">
                  XOH TRADING
                  <br />
                  PLATFORM
                </span>
                </div>
                <div className="mt-5   text-md-left">
                  <img  alt="wait_while_loading" className="img-fluid" src={props.img1} />
                  <img  alt="wait_while_loading" className="img-fluid" src={props.img2} />
                </div>
                <div
                  className="mt-5"
                  style={{ fontSize: "14px", fontWeight: "normal" }}
                >
                  backed by:
                </div>
                <div className="mt-4">
                  <img
                    className="img-fluid"
                    src={props.imgLogo}
                    style={props.width}
                    alt="wait_while_loading"
                  />
                </div>
              </div>
            
            <div className="col-md-6 align-self-center mt-3 mt-md-0">
              <img className="img-fluid" src={props.rightImg}  alt="wait_while_loading" />
            </div>
          </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="col-sm-5 offset-sm-7 text-left ">
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

// default props
ProductXoh.defaultProps = {
  title: "XOH TRADING PLATFORM",
  img1: "https://xopenhub.pro/wp-content/themes/xopenhub/images/windows_logo.png",
  img2: "https://xopenhub.pro/wp-content/themes/xopenhub/images/apple_logo.png",
  imgLogo: "https://xopenhub.pro/wp-content/themes/xopenhub/images/backend.png",
  rightImg:
    "https://xopenhub.pro/wp-content/themes/xopenhub/images/xohtrader2.png",
};

const data = [
    {  
        id: 1,
        title: "High End Design",
        svg1: <SVG1 />,
        title2:'Superior trade execution',
        svg:<SVG2/>,
    },
    {  id:2,
        title: "Fully customizable interface",
        svg1: <SVG3 />,
        title2:'Advanced charting tools',
        svg:<SVG4/>,
    },
    {  id:3,
        title: "Strong regulatory framework",
        svg1: <SVG1 />,
        title2:'Built-in economics news, heat maps, market sentiment',
        svg:<SVG2/>,
    },
    {  id:4,
        title2: "Safety and security",
        svg1: <SVG3 />,
        title:'xAPI – full open front-end',
        svg:<SVG4/>,
    }

];

export const ProductImage = (props) => {
  return (
    <>
    {data.map((item, index) => {
        return (
      <div className="d-flex flex-row mt-5 text-center text-md-left">
        <div className="col-md-2 align-self-center  ">
          <div className="img-fluid">
            {item.svg1}
          </div>
        </div>
        <div className="col-md-4 align-self-center text-lg-start">
          <div className="section-title">{item.title}</div>
        </div>
        <div className="col-md-2 align-self-center  text-center text-md-left ">
          <div className="img-fluid">
            {item.svg}
          </div>
        </div>

        <div className="col-md-4 align-self-center  text-lg-start ">
          <div className="section-title">{item.title2}</div>
        </div>
      </div>
        )
    }
    )}
    </>
  );
};
