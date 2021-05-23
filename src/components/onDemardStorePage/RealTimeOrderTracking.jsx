import React, { PureComponent } from "react";
import "../../style.css";
export default class RealTimeOrderTracking extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            <div class="col-md-6 col-xs-10">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/Real-TimeOrderTracking@2x.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="col-md-6 col-xs-10 trend-responsive">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "50px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                Real-Time Order Tracking
              </h2>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                <div class="vl"></div>
                <div style={{ display: "inline" }}>
                  Cater to consumer habits of tracking order lifecycle from
                  Kitchen to Delivery leading to higher retention.
                </div>
                <div
                  class="row"
                  style={{ marginTop: "2rem", marginLeft: "2rem" }}
                >
                  <ul class="col-md-6 col-xs-10 onDemandCategories">
                    <li>Kitchen Order Status</li>
                    <li>Delivery Personnel Info</li>
                  </ul>
                  <ul class="col-md-6 col-xs-10 onDemandCategories">
                    <li>ETA & Map Tracking</li>
                    <li>Review & Rating</li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
