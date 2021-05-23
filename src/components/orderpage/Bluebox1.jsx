import React, { PureComponent } from "react";
import "../../style.css";
import display from "../../assets/display.PNG";

import kitchen from "../../assets/kitchen.PNG";
export default class Bluebox1 extends PureComponent {
  render() {
    return (
      <div
        style={{ background: "#111B2B", textAlign: "center", color: "white" }}
      >
        <div style={{ color: "#111B2B" }}>.</div>
        <div class="bluebox-heading">{this.props.heading}</div>
        <small
          style={{
            color: "#8ac03b",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "6rem",
          }}
          class="nunito"
        >
          {this.props.subheading}
        </small>
        <div class="row justify-content-center mb-4 mt-4">
          <p
            class="col-md-5 col-xs-10"
            style={{ fontSize: "19px", lineHeight: "2rem", textAlign: "right" }}
          >
            {" "}
            <div class="row justify-content-end mb-4 mt-4">
              <div class="col-md-10 col-xs-10 bluebox-col1heading">
                {this.props.col1heading}
              </div>
              <div class="col-md-2 col-xs-10">
                <img
                  src={display}
                  alt=".."
                  width="80px"
                  class="bluebox-imageicon"
                />
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-8 col-xs-10 bluebox-col1para">
                {this.props.col1para}
              </div>{" "}
            </div>
            {!this.props.learn && (
              <div class="row justify-content-end mt-4">
                <div class="col-md-3 col-xs-10 bluebox-imagecontainer">
                  <div class="card">
                    <div class="card-body imagebox12 bluebox-image"></div>
                  </div>
                </div>
                <div class="col-md-3 col-xs-10 bluebox-imagecontainer">
                  <div class="card">
                    <div class="card-body imagebox13 bluebox-image"></div>
                  </div>
                </div>
                <div class="col-md-3 col-xs-10 bluebox-imagecontainer">
                  <div class="card">
                    <div class="card-body imagebox14 bluebox-image"></div>
                  </div>
                </div>
              </div>
            )}
            {!this.props.learn && (
              <button
                type="button"
                className="learMore_button2 mt-4 mb-4"
                style={{ marginRight: "120px" }}
              >
                Learn More
              </button>
            )}
          </p>
          <p class="col-1 blackline2"></p>
          <p
            class="col-md-5 col-xs-10"
            style={{ fontSize: "19px", lineHeight: "2rem", textAlign: "right" }}
          >
            {" "}
            <div class="row justify-content-start mb-4 mt-4">
              <div class="col-md-2 col-xs-10 ml-2">
                <img
                  src={kitchen}
                  alt=".."
                  width="90px"
                  class="bluebox-imageicon"
                />
              </div>

              <div
                class="col-md-10 col-xs-10"
                style={{ fontWeight: "bolder", textAlign: "left" }}
              >
                {this.props.col2heading}
              </div>
            </div>
            <div
              class="row justify-content-start"
              style={{ textAlign: "left" }}
            >
              <div class="col-md-8 col-xs-10" style={{ marginBottom: "5rem" }}>
                {this.props.col2para}
              </div>
              {!this.props.learn && (
                <div class="row justify-content-start mt-4">
                  <div class="col-md-3 col-xs-10 bluebox-imagecontainer">
                    <div class="card">
                      <div class="card-body imagebox15 bluebox-image"></div>
                    </div>
                  </div>
                  <div class="col-md-3 col-xs-10 bluebox-imagecontainer">
                    <div class="card">
                      <div class="card-body imagebox16 bluebox-image"></div>
                    </div>
                  </div>
                  <div class="col-md-3 col-xs-10 bluebox-imagecontainer">
                    <div class="card">
                      <div class="card-body imagebox17 bluebox-image"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>{" "}
            {!this.props.learn && (
              <button
                type="button"
                className="learMore_button2 mt-4 learn bluebox-learnMore"
              >
                Learn More
              </button>
            )}
          </p>{" "}
        </div>{" "}
        {this.props.learn && (
          <button type="button" className="learMore_button2 mt-4 mb-4">
            Learn More
          </button>
        )}
      </div>
    );
  }
}
