import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='container'>
        <header id="header" className='HeaderComponent'>
          <nav className="navbar  justify-content-between hidden-xs">
            <div className=" header-social " style={{marginLeft:'auto'}}>
              <div className="header-contact-us mr-3" style={{ display: 'inline-block' }}>
                <a className="btn btn-red" href="/">Try Demo</a>
              </div>
              <a href="/" >
                <svg xmlns="http://www.w3.org/2000/svg" width={122} height={40} viewBox="0 0 122 40">
                  <g id="Group_4938" data-name="Group 4938" transform="translate(-1658 -26)">
                    <text id="Try_Demo" data-name="Try Demo" transform="translate(1745 50)" fill="#636363" fontSize={14} fontFamily="Roboto-Bold, Roboto" fontWeight={700}><tspan x="-34.156" y={0}>LOG IN</tspan></text>
                    <path id="Path_608" data-name="Path 608" d="M161,237H129a4,4,0,0,1-4-4v-6h2v6a2,2,0,0,0,2,2h32a2,2,0,0,0,2-2V201a2,2,0,0,0-2-2H129a2,2,0,0,0-2,2v6h-2v-6a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v32A4,4,0,0,1,161,237Z" transform="translate(1536 -171)" fill="#636363" />
                    <path id="Path_609" data-name="Path 609" d="M146,236h-2V208.256L162.639,198l.965,1.752L146,209.438Z" transform="translate(1536 -171)" fill="#636363" />
                    <path id="Path_610" data-name="Path 610" d="M132.113,225.3l-1.414-1.414L137.586,217l-6.887-6.887,1.414-1.414,8.3,8.3Z" transform="translate(1536 -171)" fill="#e30513" />
                    <rect id="Rectangle_1692" data-name="Rectangle 1692" width={17} height={2} transform="translate(1658 45)" fill="#e30513" />
                  </g>
                </svg>
              </a>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-light">

            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={require("../Images/Block-Sol.png")} alt="" width={212} height={46} />
              </a>
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="/services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/product">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href='/contact'>Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>


      </div>
    </>
  )
}

export default Navbar
