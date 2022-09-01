import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='container'>
        <header id="header" className='HeaderComponent'>
          
          <nav className="navbar navbar-expand-lg navbar-light">

            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={require("../Assets/Images/BlockSol.png")} alt="require" width={220} style={{height:'auto'}}  />
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
