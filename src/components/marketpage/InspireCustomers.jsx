import React, { PureComponent } from "react";
import "../../style.css";
import paperplane from "../../paperplane.PNG";
export default class InspireCustomers extends PureComponent {
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
              <img src={paperplane} width="120px" />
              <h2 className="nunito market-heading ">
                Inspire customers to take action.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                <div style={{ display: "inline" }}>
                  Customers are always looking for fresh new deals. With
                  DailyKIT's <b>Custom Coupons</b> become a lead magnet with
                  exclusive offers and motivate customers to <b>take action</b>{" "}
                  <br />
                  <br />
                  Use DailyKIT's <b>Smart Coupon Generation</b> to experiment
                  with various actions that you think<b> your customers</b>will
                  perform.
                </div>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
