import React, { PureComponent } from "react";

export default class CustomerorOperator extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <div
          style={{
            color: "#90c345",
            fontWeight: "bolder",
            fontSize: "15px",
            marginBottom: "1rem",
            marginTop: "2rem",
            marginLeft: "4rem",
          }}
        >
          Order Tracking
        </div>
        <h2 className="nunito order-fulfillment-heading">
          Customer or Operator? Track Orders the Same Way!
        </h2>
        <div class="row">
          <div class="col-md-6 col-xs-10 ">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/consumer@2x.png"
              alt="..."
              className="image-responsive-2"
            />
          </div>
          <div class="col-md-6 col-xs-10">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/operator@2x-1.png"
              alt="..."
              className="image-responsive-2"
            />
          </div>
        </div>
      </div>
    );
  }
}
