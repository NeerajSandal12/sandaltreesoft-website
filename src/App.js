import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error_404 from "./components/Error_404";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Ser from "./components/ser";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useParams } from "react-router-dom";
// useParams
function App() {
  // let =useParams();
  // console.log("UseParams : ",useParams())
  return (
    <>
      <Navbar />
      
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/services" element={<Ser />} />
        <Route path="*" element={<Error_404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
