import React from "react";

const testimonials = [
  { name: "Rahul", text: "This gym completely transformed my fitness journey!" },
  { name: "Anjali", text: "Great trainers and amazing environment 💪" },
  { name: "Vikram", text: "Best place to stay fit and motivated!" },
  { name: "Sneha", text: "I love the equipment and friendly vibe!" },
];

export default function Testimonial() {
  return (
    <div className="testimonial-container">
    <h2>Testimonial</h2>
      <div className="testimonial-track"> 
        {[...testimonials, ...testimonials].map((item, index) => (
          <div className="card" key={index}>
            <p>"{item.text}"</p>
            <h4>- {item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}