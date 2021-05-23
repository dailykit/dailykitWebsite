import React, { PureComponent } from "react";
import tick from "../../tick.PNG";

export default class EndToEndFoodBusiness extends PureComponent {
  render() {
    return (
      <div
        style={{
          background: "#111B2B",
          color: "white",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            textAlign: "center",
            marginTop: "12rem",
          }}
        >
          <br />
          An End-To-End Food Business Software Solution Provider
        </p>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            margin: "2rem 0rem 2rem 0rem",
            textAlign: "center",
          }}
          className="nunito text-center"
        >
          You've Never Managed Your Food Business
          <br /> Like This Before
        </h2>
        <div className="justify-content-center">
          <form>
            <input
              type="email"
              class="form-control inputbox"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Valid Email Address"
              style={{
                width: "20rem",
                height: "3.29rem",
                display: "inline",
                background: "#E6F8FC",
              }}
            />
            <button
              type="button"
              style={{
                fontSize: "14px",
                width: "150px",
                background: "#8ac03b",
                color: "white",
              }}
              class="btn btn-lg p-3 pl-4 pr-4 form-button"
            >
              Start Now
            </button>
          </form>
        </div>
        <div class="row justify-content-center mt-4 mb-4">
          <div class="col-md-3 col-xs-10 p-4">
            <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
            <h6 style={{ display: "inline" }}>Recipe & Menu Engineering</h6>
            <br />
          </div>
          <div class="col-md-3 col-xs-10 p-4">
            <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
            <h6 style={{ display: "inline" }}> Manufacturing Technology</h6>
            <br />
          </div>
          <div class="col-md-3 col-xs-10 p-4">
            <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
            <h6 style={{ display: "inline" }}>Sales & Marketing Platform</h6>
            <br />
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3 col-xs-10 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
              <h6 style={{ display: "inline" }}>
                Delivery & Packaging Integrations
              </h6>
              <br />
            </div>
            <div class="col-md-3 col-xs-10 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />
              <h6 style={{ display: "inline" }}>Inventory Management</h6>
              <br />
            </div>
            <div class="col-md-3 col-xs-10 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />
              <h6 style={{ display: "inline" }}> Analytics</h6>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
