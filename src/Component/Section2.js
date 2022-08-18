import React from 'react'

const Section2 = () => {
  return (
    <>
      <div className="section  container mb-5">
  <div className="d-flex flex-row mb-5 ">
    <h1 className="big-section-title text-xs-center">
      Deep institutional liquidity<br /><span className="red">on 5000+ global instruments</span>
    </h1>
  </div>
  <div className="d-flex flex-row  mb-2 mt-2 ">
    <div className="col-sm-1 text-center hidden-xs ">
      <div className="vl-1" />
      <svg height={6} width={6} className="mt-4">
        <circle cx={3} cy={3} r={3} fill="red" />
      </svg>
      <div className="vertical-text mt-5">
        Our Offer</div>
    </div>
    <div className="col-sm-11 text-left ">
      <div className="row ">
        <div className="col-lg-12">
          <div className="row pt-5 pb-5">
            <div className="col-sm-3 ">
              <div className="section-title">Most Popular</div>
              <p className="pt-4">Here you can see the most traded financial instruments among our wide liquidity offering. Check our deep liquidity on forex, indices, cryptocurriences, commodities, shares and ETFs.</p>
              <a href="/liquidity-provider/" className="btn btn-red">See More</a>
            </div>
            <div className="col-sm-8 offset-sm-1 ">
              <div className="text-left bhoechie-tab-container js-widget-container" id="instrumentsWidget" style={{opacity: 1}}>
                <span className="loader instruments-loader" />
              
              </div>
              {/*start*/}
              <div className="instruments-homepage-widget-container">
              </div>
              {/*koniec*/}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 offset-md-1">
          <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/multiasset.png" className="img-fluid d-sm-none" />
          <video className="video-fluid z-depth-1 hidden-xs" autoPlay loop muted>
            <source src="https://xopenhub.pro/wp-content/themes/xopenhub/video/XOH_animacja_03_520x400.mp4" type="video/mp4" />
          </video>
          <div className="big-section-title small-letter mb-md-5 mb-0">Multi-asset Liquidity</div>
          <p>Our liquidity solution comes equipped with advanced capabilities and features, helping you to maximize your profit and diversify your revenue streams.</p>
          <a className="lear-more-play hidden-xs" href="/liquidity-provider/"><img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg" /><span style={{padding: '3px'}}>Learn more</span></a>
          <a href="/liquidity-provider/" className="btn btn-black d-sm-none text-uppercase ">Learn more <i className="fas fa-caret-right" aria-hidden="true" /></a>
        </div>
        <div className="col-md-5 mt-5 ">
          <img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/wl-platform.png" className="img-fluid mt-5 d-sm-none" />
          <video className="video-fluid z-depth-1 hidden-xs" autoPlay loop muted>
            <source src="https://xopenhub.pro/wp-content/themes/xopenhub/video/XOH_animacja_04_520x400.mp4" type="video/mp4" />
          </video>
          <div className="big-section-title small-letter  mb-md-5 mb-0">White Label Platform</div>
          <p>We provide a complete front &amp; back end technology and to help you convert your IB business or White Label into your own fully branded, customized brokerage.</p>
          <a className="lear-more-play hidden-xs" href="/trading-platform/"><img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/play.svg" /><span style={{padding: '3px'}}>Learn more</span></a>
          <a href="/trading-platform/" className="btn btn-black d-sm-none text-uppercase ">Learn more <i className="fas fa-caret-right" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Section2
