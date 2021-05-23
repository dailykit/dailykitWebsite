import React, { PureComponent } from "react";
import "../../style.css";
export default class MarketingMadeEasy extends PureComponent {
  render() {
    return (
      <>
        <div class="container">
          <div class="row justify-content-evenly">
            <div class="col-md-6 col-xs-10 trend-responsive">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                <br />
                {this.props.subheading}
              </p>
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "50px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                {this.props.heading}
              </h2>

              <div className="justify-content-center mb-4">
                <button type="button" className="weserve_button1">
                  Get Started Now
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="weserve_button2">
                  Free Demo
                </button>
              </div>
            </div>
            {this.props.image ? (
              <div class="col-4 imagebox11"></div>
            ) : (
              <div class="col-md-6 col-xs-10">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={this.props.imageurl}
                        class="d-block w-80"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
