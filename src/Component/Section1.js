import React from "react";
import "../Assets/Section1.css";

const Section1 = ({ alighToggle }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="homepage-bg-a">
            <div className={`${alighToggle?'flex-row-reverse':''} section container d-flex`}>
              <div className="col-lg-7">
              <div className="d-flex flex-row">
                <div className="offset-md-1">
                  <h1 className="homepage-section-title small-letter mb-4">
                    Smart Technology for
                    <span className="red">Capital Markets</span>
                  </h1>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="offset-md-1 text-center">
                  <p className="text-left" style={{ textAlign: "left" }}>
                    Our reliable trading technology and transparent liquidity
                    fee structure ensure financial institutions to achieve
                    cost-optimized business models, increase profitability, and
                    improve the efficiency of their operations.
                  </p>
                  <div
                    className="d-block mt-2 mt-md-5"
                    style={{ textAlign: "left" }}
                  >
                    <a
                      href="/liquidity-provider/"
                      className="btn btn-white-red"
                    >
                      Liquidity offer
                    </a>
                  </div>
                  <div
                    className="d-block mt-4 text-left"
                    style={{ textAlign: "left" }}
                  >
                    <a href="/trading-platform/" className="btn btn-white-red">
                      Technology offer
                    </a>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-lg-5">
                <img src={require("../Images/homepage_img2.png")} alt="homepage-bg-a" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Section1.defaultProps = {
  alighToggle: false,
};

export default Section1;
