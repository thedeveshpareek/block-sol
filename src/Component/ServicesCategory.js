import React from "react";


const ServicesCategory = (props) => {
  return (
        <div className="row">
        {props.data&&props.data.map((item, index) => {
          return (
        <div className="col-lg-4 col-sm-12 col-md-12 mt-3">
          <ul className="tree">
            <li>
              <strong>
                <a href="/services" >
                  <span className="small-section-title ">{item.title}</span>
                </a>
              </strong>
              <ul>
                <li>
                  <a href="/services" >
                    {item.l1}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                   {item.l2}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                    {item.l3}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                    {item.l4}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                    {item.l5}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                    {item.l6}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                   {item.l7}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                    {item.l8}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                   {item.l9}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                    {item.l10}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                  {item.l11}
                  </a>
                </li>
                <li>
                  <a href="/services">
                    {item.l12}
                  </a>
                </li>
                <li>
                  <a href="/services">
                    {item.l13}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                    {item.l14}
                  </a>
                </li>
                <li>
                  <a href="/services" >
                    {item.l15}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        );
      }
      )}
      </div>
       
  );
};

export default ServicesCategory;
