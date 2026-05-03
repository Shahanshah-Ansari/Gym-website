import React, { useState } from "react";
import training from "./image/Training_image.png";
import gain from "./image/Wet gain_image.png";
import cardio from "./image/Cardio_image.png";

function About() {

  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  return (

    <div className="about">
     <section id="programs" className="about"></section>
      <h2>Our Training Programs</h2>
      <div className="about-item">
        <img src={gain}/>
        <div className="about-text">
          <h3>Weight Training</h3>
          <p>
            Weight training is a form of physical exercise that involves using resistance to develop muscle strength, endurance, and overall fitness. 
            {showMore && " It is one of the most popular and effective ways to improve physical health, and it is practiced by people of all ages, from beginners to professional athletes. Unlike simple aerobic activities such as walking or running, weight training focuses on making muscles work against a force, which can come from dumbbells, barbells, machines, or even one's own body weight."}
          </p>
          <button
        className="btn"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
        </div>
      </div>
      <div className="about-item reverse">
        <img src={cardio} />
        <div className="about-text">
          <h3>Cardio Training</h3>
          <p>
            The main purpose of cardio training is to strengthen the heart so that it can pump blood more efficiently throughout the body.
            When a person engages in cardio exercise, the muscles require more oxygen to sustain movement. 
            {showMore1 && "In response, the heart beats faster and the lungs work harder to deliver oxygen-rich blood to the muscles. Over time, this repeated process conditions the cardiovascular system, making it more efficient. As a result, the resting heart rate often decreases, and the body becomes better at handling physical exertion without getting tired quickly."}
          </p>
          <button
        className="btn"
        onClick={() => setShowMore1(!showMore1)}
      >
        {showMore1 ? "Show Less" : "Show More"}
      </button>
        </div>
      </div>
      <div className="about-item">
        <img src={training} />
        <div className="about-text">
          <h3>Personal Coaching</h3>
          <p>
            Personal coaching is a guided process in which an individual works with a trained coach to improve specific areas of life, achieve goals, and unlock their full potential. 
            {showMore2 && " It is a collaborative relationship built on trust, communication, and continuous development. Unlike teaching or advising, personal coaching does not simply provide answers; instead, it helps individuals discover their own solutions by increasing self-awareness, clarity, and confidence."}
          </p>
          <button
        className="btn"
        onClick={() => setShowMore2(!showMore2)}
      >
        {showMore2 ? "Show Less" : "Show More"}
      </button>
        </div>
      </div>
    </div>
  );
}
export default About;