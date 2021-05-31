import React from "react";
import "./../../style.css";
import $ from "jquery";
const VideoBanner = (props) => {
  return (
    <div className="image video-1">
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
      <div className="header">
        <div class="heading-1">{props.heading1text}</div>
        <h2 class="nunito">{props.heading2text}</h2>
        <br />
        <h5>{props.subheadingtext}</h5>
        <br />
        <h4
          id="yourElem"
          class="all-text"
          onclick={setInterval(() => {
            $("#yourElem").text(
              props.toggletextarr[Math.floor(Math.random() * 4) + 0]
            );
          }, 2000)}
        >
          {props.toggletextarr[0]}
        </h4>
        <br />
        <br />
        <a href={props.whitebuttonlink}>
          <button type="button" className="btn-style-thirteen white">
            {props.whitebuttontext}
          </button>
        </a>
        &ensp;
        {/* <a href="/">
          <button type="button" className="btn-style-ten purple">
            {props.purplebuttontext}
          </button>
        </a>
        <br />
        <br />
        <div class="offer">{props.offertext}</div> */}
      </div>
    </div>
  );
};

export default VideoBanner;
