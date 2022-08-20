import Navbar from './Component/Navbar';
import "./Assets/App.css"
import Footer from './Component/Footer';
import About from "./Pages/About";
import Contact from "./Component/Contact";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
