import React, { PureComponent } from "react";

export default class PartnerWithDailyKIT extends PureComponent {
  render() {
    return (
      <div className="container" style={{ marginTop: "12rem" }}>
        <div class="row justify-content-between">
          <div class="col-md-6 col-xs-10 trend-responsive">
            <div style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Are You A Reseller?
            </div>
            <h2 style={{ fontWeight: "bolder", fontSize: "60px" }}>
              Partner with DailyKIT.
            </h2>
            <br />
            <p style={{ fontWeight: "400", fontSize: "18px" }}>
              We <b>offer very attractive</b> incentives to anyone who wishes to{" "}
              <b>Resell</b>
              our platform to prospective clients anywhere in the world{" "}
              <b>Click on the button</b> below to talk to us about this
              opputunity.
            </p>
            <button
              type="button"
              class="btn btn-dark btn-lg p-4"
              style={{
                fontSize: "15px",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <a
                href="https://share.hsforms.com/1nmDk2BV3Teql1yIVH7gpqw3fqrt"
                style={{ textDecoration: "none", color: "white" }}
              >
                Schedula A Meeting
              </a>
            </button>
          </div>
          <div class="col-md-6 col-xs-10">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Reseller.png"
              alt="women"
              style={{ width: "45vh", marginLeft: "3rem" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
