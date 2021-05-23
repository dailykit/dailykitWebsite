import React, { PureComponent } from "react";
import "../../style.css";
export default class SellEverythingWithEveryWARE extends PureComponent {
  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: "12rem", textAlign: "center" }}
      >
        <div class="row justify-content-between">
          <div class="col-md-5 col-xs-10">
            <div class="row justify-content-center">
              <div
                class="col-md-5 col-xs-10 justify-content-center"
                style={{ background: "#F4F9FF", borderRadius: "5%" }}
              >
                <div
                  style={{
                    color: "#1374f6",
                    fontWeight: "bolder",
                    fontSize: "12px",
                    marginBottom: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  Product Presentation
                </div>
                <h4>Trending & Customizeable</h4>
                <br />

                <img
                  src="https://www.dailykit.org/hubfs/dailykit-assets/trending@2x.png"
                  style={{ width: "10rem", marginBottom: "2rem" }}
                  alt="trending"
                />
              </div>

              <div
                class="col-md-5 col-xs-10 justify-content-center"
                style={{ background: "#FFF4FA", borderRadius: "5%" }}
              >
                <br />
                <img
                  src="https://www.dailykit.org/hubfs/dailykit-assets/trending@2x.png"
                  style={{ width: "10rem", marginBottom: "2rem" }}
                  alt="trending2"
                />{" "}
                <div
                  style={{
                    color: "#ff8c8c",
                    fontWeight: "bolder",
                    fontSize: "12px",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  Add Combos
                </div>
                <h4>Add Accompaniments</h4>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-10 trend-responsive">
            <div class="title">Trend-Responsive Demand Platform</div>
            <h2 style={{ fontWeight: "bolder", fontSize: "60px" }}>
              Sell Everything With EveryWARE
            </h2>
            <br />
            <button type="button" class="btn btn-outline-success btn-lg">
              <a
                href="/enterprise/meal-kit-startups"
                style={{ textDecoration: "none" }}
              >
                TELL ME MORE
              </a>
            </button>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-6 col-xs-12 accompaniments_image">
            <div style={{ height: "13rem" }} />
          </div>
        </div>
      </div>
    );
  }
}
