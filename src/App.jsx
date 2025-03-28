import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Screens/Home";
import AboutUs from "./Screens/AboutUs";
import Products from "./Screens/Products";
import ContactUs from "./Screens/ConatctUs";
import Footer from "./Components/Footer";
import Faq from "./Screens/Faq";
import PrivacyPolicy from "./Components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
