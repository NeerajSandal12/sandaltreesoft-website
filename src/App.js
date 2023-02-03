import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error_404 from "./components/Error_404";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error_404 />} />
      </Routes>
      <Services />
      <Footer />
    </>
  );
}

export default App;
