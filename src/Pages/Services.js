import React from "react";
import HeaderBreadcrumb from "../Common/HeaderBreadcrumb";
import ServicesCategory from "../Component/ServicesCategory";
import {NFT,DEFI,Crypto,ICO,Blockchain,Marketing} from "../Component/serviceData";

const Services = (props) => {
  // const [data, setData] = React.useState(null);
  return (
    <div className="container">
      <div className=" section">
        <HeaderBreadcrumb title="Services" />
        <h1 className="title" style={styles.title}>
          Our Services
        </h1>
        <p className="p_tag" style={styles.p_tag}>
          These are the full range of end-to-end solutions and services we have
          provided our global clients across the years. You can find all our
          capabilities related to blockchains, cryptocurrencies, non-fungible
          tokens, decentralized finance, and associated applications here.
        </p>
      </div>
      <div className="section s-white">
        <div className="big-section-title small-letter mb-4 text-md-left">
          <span className="red">Non-Fungible</span> Tokens
        </div>
        <ServicesCategory data={NFT} />
      </div>
      <div className="section">
        <div className="big-section-title small-letter mb-4 text-md-left">
          <span className="red">Decentralized</span> Finance
        </div>
        <ServicesCategory data={DEFI} />
      </div>
      <div className="section">
        <div className="big-section-title small-letter mb-4 text-md-left">
          <span className="red">ICO/STO/IDO</span> 
        </div>
        <ServicesCategory data={ICO} />
      </div>
      <div className="section">
        <div className="big-section-title small-letter mb-4 text-md-left">
          <span className="red">Cryptocurrency</span> 
        </div>
        <ServicesCategory data={Crypto} />
      </div>
      <div className="section">
        <div className="big-section-title small-letter mb-4 text-md-left">
          <span className="red">Blockchain</span> 
        </div>
        <ServicesCategory data={Blockchain} />
      </div>
      <div className="section">
        <div className="big-section-title small-letter mb-4 text-md-left">
          <span className="red">Marketing</span>
        </div>
        <ServicesCategory data={Marketing} />
      </div>
    </div>
  );
};

export default Services;
const styles = {
  title: {
    fontSize: "2.8125em",
    fontWeight: "bold",
    marginBottom: "1em",
    display: "block",
    width: "100%",
    lineHeight: "1.2",
    fontfamily: "Poppins, sans-serif",
    textAlign: "left",
    fontStyle: "normal",
    color: "rgba(227,5,19,1)",
  },
  p_tag: {
    fontSize: "1.435em",
    fontWeight: "normal",
    marginBottom: "1em",
    display: "block",
    width: "100%",
    lineHeight: "1.2",
    fontfamily: "Poppins, sans-serif",
    textAlign: "left",
    fontStyle: "normal",
  },
  bigTitle: {
    fontWeight: "bold",
  },
};
