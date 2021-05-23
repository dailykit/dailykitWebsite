import React, { PureComponent } from "react";
import "../../style.css";
export default class Yourtryst extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            <div class="col-md-6 col-xs-10">
              <h2 className="nunito market-heading ">
                Your tryst with virality
              </h2>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                <div class="vl"></div>
                <div style={{ display: "inline" }}>
                  Experience accelerated growth using customer referrals as your
                  trusted marketing strategy
                </div>
                <div
                  class="row"
                  style={{ marginTop: "2rem", marginLeft: "2rem" }}
                >
                  <ul class="col-md-6 col-xs-10 onDemandCategories">
                    <li>Supercharge Word of Mouth</li>
                    <li>Get more customers from your customers</li>
                  </ul>
                  <ul class="col-md-6 col-xs-10 onDemandCategories">
                    <li>Drive repeated growth</li>
                    <li>Keep them coming back</li>
                  </ul>
                </div>
              </p>
            </div>
            <div class="col-md-6 col-xs-10">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Your%20tryst%20with%20virality.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
