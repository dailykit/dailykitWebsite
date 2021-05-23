import React, { PureComponent } from "react";
import "../../style.css";
export default class CreateRewardingExperiences extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            <div class="col-md-6 col-xs-10">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/takingyourStoreAbove%26Beyond@2x.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="col-md-6 col-xs-10 trend-responsive">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "50px",
                  margin: "1rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                Taking Your Store Beyond & Above
              </h2>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                <div style={{ display: "inline" }}>
                  Incorporate Multiple Instructional or about us pages along
                  with any other information suiting your brand.
                </div>
              </p>{" "}
              <div class="row justify-content-evenly">
                <div
                  class="col-md-5 col-xs-10 p-4"
                  style={{ boxShadow: "0 0 10px 0px rgba(0, 0, 0, 0.3)" }}
                >
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/subscription-logos/About%20Pages.svg"
                    width="40px"
                    alt="icon"
                  />
                  <h5 style={{ display: "inline" }}> About Pages</h5>
                  <p style={{ marginTop: "2rem" }}>
                    Showcase as much Information you want eg: Chef, Sourcing,
                    etc.
                  </p>
                </div>
                <div
                  class="col-md-5 col-xs-10 p-4"
                  style={{ boxShadow: "0 0 10px 0px rgba(0, 0, 0, 0.3)" }}
                >
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/subscription-logos/FAQ%20Pages.svg"
                    width="40px"
                    alt="icon"
                  />
                  <h5 style={{ display: "inline" }}> FAQ Pages</h5>
                  <p style={{ marginTop: "2rem" }}>
                    Easily Highlight FAQs and How it Work Pages to Your
                    Customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
