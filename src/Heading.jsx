import React from "react";
import logo from "./image/Logo_image.png";
function Heading() {
  return (
    <section className="hero">
      <section id="home" className="hero"></section>
      <img
          className="gym-logo"
          src={logo} alt="Gym"/>
      <div className="hero-text">
           <h1>Your Fitness<br></br><span className="sp">Journey Begins!</span></h1>
        <p>Join the best fitness gym and transform your life.</p>
      </div>
    </section>
  );
}

export default Heading;