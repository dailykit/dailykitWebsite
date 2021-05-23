import React, { PureComponent } from "react";

export default class DeliverExcellence extends PureComponent {
  render() {
    return (
      <div className="container">
        <div class="row justify-content-between">
          <div class="col-md-6 col-xs-10 trend-responsive">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/Operate-hero@2x.png"
              alt="women"
              style={{ width: "30vh" }}
              class="deliever-excellence-img"
            />
          </div>
          <div class="col-md-6 col-xs-10 trend-responsive">
            <div style={{ fontSize: "18px" }}>
              Trend-Agnostic Supply Platform
            </div>
            <h2 style={{ fontWeight: "bolder", fontSize: "50px" }}>
              Deliver Excellence With DailyOS
            </h2>
            <br />
            <button type="button" class="btn btn-outline-success btn-lg">
              <a
                href="/operate/order-fulfillment"
                style={{ textDecoration: "none" }}
              >
                TELL ME MORE
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
