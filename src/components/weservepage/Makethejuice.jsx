import React, { PureComponent } from "react";
import ContactFormSection2 from "../shared/ContactFormSection2";

export default class Makethejuice extends PureComponent {
  render() {
    return (
      <>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-xs-10 trend-responsive">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bolder",
                }}
              >
                {this.props.subheading}
                <br />
              </p>
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "65px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                {this.props.heading}
              </h2>
              <div class="row">
                <div
                  class="col-md-2 col-xs-10 vl"
                  style={{ marginRight: "-70px", paddingRight: "-12px" }}
                ></div>
                <div class="col-md-10 col-xs-10">{this.props.para}</div>
              </div>
              <div className="justify-content-center mt-4">
                <a href={this.props.button1link}>
                  <button type="button" className="weserve_button1">
                    {this.props.button1text}
                  </button>
                </a>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="weserve_button2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {this.props.button2text}
                </button>
              </div>
              <ContactFormSection2
                dataAccount={this.props.dataAccount}
                dataForm={this.props.dataForm}
              />
              <div class="row" style={{ paddingTop: "1rem" }}>
                <div class="col-md-3 col-xs-10">
                  {" "}
                  <img
                    src={this.props.smallimage}
                    alt=""
                    style={{ paddingTop: "2rem", width: "110px" }}
                  />
                </div>
                <div class="col-md-5 col-xs-10" style={{ paddingTop: "2rem" }}>
                  <small>{this.props.smallheading}</small>
                  <h4 style={{ color: "#8ac03b", fontWeight: "bolder" }}>
                    {this.props.smallsubheading}
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-10">
              <img
                src={this.props.image}
                alt="..."
                class="image-responsive-1"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
