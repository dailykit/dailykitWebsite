import React, { PureComponent } from "react";
import "../../style.css";
export default class OurPricing extends PureComponent {
  render() {
    return (
      <div>
        <h6
          style={{
            color: "#8ac03b",
            fontWeight: "bold",
            paddingTop: "7rem",
            textAlign: "center",
            marginBottom: "6rem",
          }}
        >
          Our Pricing
        </h6>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-xs-10 mb-4">
              <div
                class="card"
                style={{
                  background: "#F1F1EF",
                  boxShadow: "0px 5px 10px 0px #888888",
                  textAlign: "center",
                  borderColor: "#F1F1EF",
                }}
              >
                <div class="card-body mt-4 mb-4">
                  <h6
                    class="card-subtitle nunito strong mb-4 text-muted"
                    style={{ fontWeight: "700" }}
                  >
                    One Time Setup Fees
                  </h6>
                  <h1 class="card-title mb-4" style={{ fontWeight: "700" }}>
                    $999
                  </h1>

                  <h6
                    class="card-subtitle nunito strong mb-4 text-muted"
                    style={{ fontWeight: "700" }}
                  >
                    Store Setup, Menu Building, Includes Onboarding
                  </h6>
                  <h6
                    class="card-subtitle nunito mb-4 text-muted"
                    style={{ fontWeight: "700" }}
                  >
                    Staff Training, Data Upload
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-10 ourpricing">
              <div
                class="card"
                style={{
                  background: "#F1F1EF",
                  boxShadow: "0px 5px 10px 0px #888888",
                  textAlign: "center",
                  borderColor: "#F1F1EF",
                }}
              >
                <div class="card-body mb-4 mt-4">
                  <h6
                    class="card-subtitle nunito mb-4 text-muted"
                    style={{ fontWeight: "700" }}
                  >
                    Monthly Subscription
                  </h6>
                  <h1 class="card-title mb-4" style={{ fontWeight: "700" }}>
                    $99
                  </h1>

                  <h6
                    class="card-subtitle nunito mb-4 text-muted"
                    style={{ fontWeight: "700" }}
                  >
                    * 4.7% + 30c per transaction
                  </h6>
                  <h6
                    class="card-subtitle nunito mb-4 text-muted"
                    style={{ fontWeight: "700" }}
                  >
                    Includes Every feature Listed Above
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-content-center">
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "1.5rem",
                fontFamily: "'Nunito', sans-serif",
                letterSpacing: "1.5px",
                textAlign: "center",
                margin: "4rem 0rem 0.7rem 0rem",
              }}
            >
              Sign up Now
            </h1>
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "1.5rem",
                fontFamily: "'Nunito', sans-serif",
                letterSpacing: "1.5px",
                textAlign: "center",
                margin: "0rem 0rem 2rem 0rem",
              }}
            >
              To start now, get in touch
            </h1>
            <form>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Valid Email Address"
              />
              <button
                type="button"
                style={{
                  fontSize: "14px",
                  width: "150px",
                  marginTop: "2rem",
                }}
                class="btn btn-dark btn-lg p-3 pl-4 pr-4"
              >
                Start Now
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
