import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// css
import "../src/Assets/Css/Footer.css";
import "../src/Assets/Css/Section1.css";
import "../src/Assets/Css/Nav.css";
import "../src/Assets/Css/Section2.css";
import "../src/Assets/Css/Section3.css";
import "../src/Assets/Css/Home.css";
import "../src/Assets/Css/About.css";
import "../src/Assets/Css/Contact.css";

// common components css
import "../src/Assets/CommonCss.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
  </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
