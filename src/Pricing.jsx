import React from "react";
import { useNavigate } from "react-router-dom";
import App from "./App";

function Pricing() {
 const navigate = useNavigate();
  return (
    <section className="pricing">
      <section id="plans" className="pricing"></section>
      <h2>Membership Plans</h2>

      <div className="pricing-container">

        <div className="price-card">
          <h3>Basic</h3>
          <h1>₹999</h1>
          <p>1 Month Access</p>
          <button onClick={() => navigate("/signin")}>Join Now</button>
        </div>

        <div className="price-card">
          <h3>Standard</h3>
          <h1>₹2499</h1>
          <p>3 Months Access</p>
          <button onClick={() => navigate("/signin")}>Join Now</button>
        </div>

        <div className="price-card">
          <h3>Premium</h3>
          <h1>₹4999</h1>
          <p>6 Months + Personal Trainer</p>
          <button onClick={() => navigate("/signin")}>Join Now</button>
        </div>
        
      </div>
    </section>
  );
}

export default Pricing;