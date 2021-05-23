import React from "react";
import "./../../style.css";
const VideoBanner = () => {
  return (
    <div className="image video" style={{ background: "#212529" }}>
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        style={{ opacity: "0.1" }}
      >
        <source
          src="https://www.dailykit.org/hubfs/dailykit-assets/home-video-3.mp4"
          type="video/mp4"
        />
      </video>
      <div className="videoTag_text">
        <h2 style={{ color: "lightblue" }}>Time to EVOLVE with</h2>
        <h2 style={{ color: "white" }}>DailyKIT</h2>
        <br />
        <h5 style={{ color: "white" }}>
          The only Trend-Responsive Food-tech solution You'll Ever Need
        </h5>
        <br />
        <h4 style={{ color: "lightgreen" }}>Multiple Your Brand Awareness</h4>
        <br />
        <br />
        <button type="button" className="btn btn-light btn-lg">
          <a href="/" style={{ textDecoration: "none", color: "#0a58ca" }}>
            Schedule Demo
          </a>
        </button>
        &ensp;
        <button type="button" className="btn btn-primary btn-lg homebutton">
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            Start Now With A 3-Month Trail
          </a>
        </button>
        <br />
        <br />
        <h6 style={{ color: "lightblue" }}>
          Available for a Limited time Only
        </h6>
      </div>
    </div>
  );
};

export default VideoBanner;
