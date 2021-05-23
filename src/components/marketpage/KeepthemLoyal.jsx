import React, { PureComponent } from "react";
import "../../style.css";
import paperplane from "../../paperplane.PNG";
export default class KeepthemLoyal extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            <div class="col-md-6 col-xs-12">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/keep%20them%20loyal.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="col-md-6 col-xs-12">
              {" "}
              <img src={paperplane} width="120px" />
              <h2 className="nunito market-heading ">
                Keep them <br />
                Loyal.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                <div style={{ display: "inline", lineHeight: "2rem" }}>
                  With our cashbacks, maintain <b>customer loyalty</b> by
                  rewarding them for their action. <b>With DailyKIT Wallets,</b>{" "}
                  provide more than one way to shop for your customer.
                </div>
              </p>
              <div class="row justify-content-evenly">
                <div
                  class="col-md-5 col-xs-12 p-4"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                >
                  <h1 style={{ color: "#4FD153", fontWeight: "bolder" }}>01</h1>
                  <h4 style={{ fontWeight: "bold" }}>Consumer B2C App</h4>
                </div>
                <div
                  class="col-md-5 col-xs-12 p-4"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                >
                  <h1 style={{ color: "#4FD153", fontWeight: "bolder" }}>02</h1>
                  <h4 style={{ fontWeight: "bold" }}>
                    Partner Restaurant Integration
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
