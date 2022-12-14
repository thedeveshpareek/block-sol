import Navbar from './Component/Navbar';
// import "./Assets/App.css"
import Footer from './Component/Footer';
import Product from "./Pages/Product";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from './Pages/Home';
import {
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
