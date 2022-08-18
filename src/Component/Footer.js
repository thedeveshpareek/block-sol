import React from 'react'
import "../Assets/Footer.css"

const Footer = () => {
  return (
    <>
     <footer className="page-footer" id="footer-main">
  {/* Footer Links */}
  <div className="container text-center text-md-left">
    {/* Grid row */}
    <div className="row">
      {/* Grid column */}
      <div className="col-md-4 mt-md-0 mt-4 ">
        {/* Content */}
        <h5 className="text-uppercase"><img src={require("../Images/Block-Sol.png")}  alt="" width={212} height={46} /></h5>
        <p>X Open Hub is the trading name of XTB Limited which is authorised and regulated by the UK Financial Conduct Authority (FRN522157) with it's registered and trading office at Level 9, One Canada Square, Canary Wharf, E14 5AA, London, United Kingdom (company number 07227848)</p>
      </div>
      {/* Grid column */}
      <hr className="clearfix w-100 d-md-none pb-3 hidden-xs" />
      {/* Grid column */}
      <div className="col-md-2 offset-md-1 mb-md-0 mb-4 hidden-xs">
        {/* Links */}
        <h5 className="text-uppercase">Site map</h5>
        <ul className="list-unstyled  footer-menu-xoh">
          <li>
            <a href="#">Institutional liquidity</a>
          </li>
          <li>
            <a href="#">Trading platforms</a>
          </li>
          <li>
            <a href="#">Reseller program</a>
          </li>
          <li>
            <a href="#">Our company</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-2 mb-md-0 mb-4 hidden-xs">
        {/* Links */}
        <h5 className="text-uppercase">DEDICATED OFFERS</h5>
        <ul className="list-unstyled footer-menu-xoh">
          <li>
            <a href="/startups/">Forex solutions for brokers</a>
          </li>
          <li>
            <a href="/banks/">Forex solutions for banks</a>
          </li>
          <li>
            <a href="/mt4/">MT4 white label</a>
          </li>
          <li>
            <a href="/liquidity-mt4-mt5/">Liquidity for MT4/MT5</a>
          </li>
        </ul>
      </div>
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-3 mb-md-0 mb-4 hidden-xs">
        {/* Links */}
        <h5 className="text-uppercase">Resources</h5>
        <ul className="list-unstyled  footer-menu-xoh">
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Knowleadge base</a>
          </li>
          <li>
            <a href="#">Clients &amp; partners</a>
          </li>
          <li>
            <a href="#">xAPI documentation</a>
          </li>
          <li>
            <a href="#">xAPI testing envoirment</a>
          </li>
        </ul>
      </div>
      {/* Grid column */}
      <div id="accordion" className="accordion d-block d-sm-none  mt-4  mb-4">
        <div className="card mb-0">
          <div className="card-header collapsed " data-toggle="collapse" href="#collapseOne">
            <a className="card-title">
              Site map <i className="fa fa-sort-up" aria-hidden="true" />
            </a>
            <div id="collapseOne" className="card-body collapse show" data-parent="#accordion">
              <ul className="list-unstyled  footer-menu-xoh">
                <li>
                  <a href="#">Institutional liquidity</a>
                </li>
                <li>
                  <a href="#">Trading platforms</a>
                </li>
                <li>
                  <a href="#">Reseller program</a>
                </li>
                <li>
                  <a href="#">Our company</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
            <a className="card-title">
              DEDICATED OFFERS <i className="fa fa-sort-down" aria-hidden="true" />
            </a>
            <div id="collapseTwo" className="card-body collapse" data-parent="#accordion">
              <ul className="list-unstyled footer-menu-xoh">
                <li>
                  <a href="#">Forex solutions for brokers</a>
                </li>
                <li>
                  <a href="#">Forex solutions for banks</a>
                </li>
                <li>
                  <a href="#">MT4 white label</a>
                </li>
                <li>
                  <a href="#">Liquidity for MT4/MT5</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
            <a className="card-title">
              Resources <i className="fa fa-sort-down" aria-hidden="true" />
            </a>
            <div id="collapseThree" className="collapse" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled  footer-menu-xoh">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Knowleadge base</a>
                  </li>
                  <li>
                    <a href="#">Clients &amp; partners</a>
                  </li>
                  <li>
                    <a href="#">xAPI documentation</a>
                  </li>
                  <li>
                    <a href="#">xAPI testing envoirment</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Grid row */}
  </div>
  {/* Footer Links */}
  <div className="text-md-right text-xs-center py-3 mb-5 footer-social container">
    <a href="https://www.facebook.com/"><img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/fb-red.svg" /></a>
    <a href="https://www.linkedin.com/"><img src="https://xopenhub.pro/wp-content/themes/xopenhub/images/in-red.svg" /></a>
  </div>
  <div className="footer-copyright text-center">
    © 2022 X Open Hub.<span className="mobile-break" /> All Rights Reserved | <a href="www.google.com">Privacy Policy</a>
  </div>
</footer>
 
    </>
  )
}

export default Footer
