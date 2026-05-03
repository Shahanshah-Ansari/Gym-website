import React,{ useEffect }  from "react";
import Navba from "./Navba";
import Heading from "./Heading";
import About from "./About";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function Home(){
useEffect(() => {
  const sections = document.querySelectorAll(".scroll-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);
  return (
    <div>
      <Navba />
      <Heading />
      <div className="scroll-section"><About /></div>
      <div className="scroll-section"><Pricing /></div>
      <div className="scroll-section"><Testimonial /></div>
       <div className="scroll-section"><Contact /></div>
      <div className="scroll-section"><Footer /></div>
    </div>
  );
}

export default Home;