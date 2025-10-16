import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // 🧠 SEO provider eklendi
import ServiceDetails from "./pages/services/ServiceDetails";

// ✨ Sayfaları lazy-load (tembel yükleme) yap
const Home = lazy(() => import("./pages/home"));
const Testimonials = lazy(() => import("./pages/testimonials"));
const Faq = lazy(() => import("./pages/faq"));
const NoPage = lazy(() => import("./pages/NoPage"));
const About = lazy(() => import("./pages/about"));
const Services = lazy(() => import("./pages/services"));
const ServicesCarousel = lazy(() => import("./pages/services-carousel"));
const Solutions = lazy(() => import("./pages/express-freight-solutions"));
const Logistics = lazy(() => import("./pages/quick-move-logistics"));
const Dispatch = lazy(() => import("./pages/speedy-dispatch"));
const Chain = lazy(() => import("./pages/swift-supply-chain"));
const Distribution = lazy(() => import("./pages/on-point-distribution"));
const TeamCarousel = lazy(() => import("./pages/team-carousel"));
const BlogDetails = lazy(() => import("./pages/blog-details"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/contact"));

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* 💫 Yüklenme sırasında basit loading ekranı */}
        <Suspense
          fallback={
            <div
              style={{
                textAlign: "center",
                padding: "100px 0",
                fontFamily: "Montserrat, sans-serif",
                color: "#ffcc00",
                fontSize: "18px",
              }}
            >
              🚚 
            </div>
          }
        >
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
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<ServiceDetails />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}