import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import Testimonials from "./pages/testimonials";
import Faq from "./pages/faq";
import NoPage from "./pages/NoPage";
import About from "./pages/about";
import Services from "./pages/services";
import ServicesCarousel from "./pages/services-carousel";
import Solutions from "./pages/express-freight-solutions";
import Logistics from "./pages/quick-move-logistics";
import Dispatch from "./pages/speedy-dispatch";
import Chain from "./pages/swift-supply-chain";
import Distribution from "./pages/on-point-distribution";

import TeamCarousel from "./pages/team-carousel";


import BlogDetails from "./pages/blog-details";
import Blog from "./pages/blog";
import Contact from "./pages/contact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
        
        <Route path="services-carousel" element={<ServicesCarousel />} />
        <Route path="express-freight-solutions" element={<Solutions />} />
        <Route path="quick-move-logistics" element={<Logistics />} />
        <Route path="speedy-dispatch" element={<Dispatch />} />
        <Route path="swift-supply-chain" element={<Chain />} />
        <Route path="on-point-distribution" element={<Distribution />} />
        <Route path="faq" element={<Faq />} />
        <Route path="team-carousel" element={<TeamCarousel />} />
        <Route path="about" element={<About />} />
        <Route path="testimonials" element={<Testimonials />} />
  
        <Route path="services" element={<Services />} />
        
        <Route path="blog-details" element={<BlogDetails />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
