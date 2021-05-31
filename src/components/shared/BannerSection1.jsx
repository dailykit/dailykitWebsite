import React, { PureComponent } from "react";
import "../../style.css";
import ContactFormSection2 from "./ContactFormSection2";

export default class BannerSection1 extends PureComponent {
  render() {
    return (
      <div className="container nunito" style={{ marginTop: "12rem" }}>
        <div class="row justify-content-center text-center">
          <div class="col-md-5 col-xs-10">
            <div class="row justify-content-around">
              <div
                class="col-md-5 col-xs-10 "
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
                  {this.props.boximage1subheading}
                </div>
                <h4>{this.props.boximage1heading}</h4>
                <br />

                <img
                  src={this.props.boximage1url}
                  style={{ width: "10rem", marginBottom: "2rem" }}
                  alt="trending"
                />
              </div>

              <div
                class="col-md-5 col-xs-10"
                style={{ background: "#FFF4FA", borderRadius: "5%" }}
              >
                <br />
                <img
                  src={this.props.boximage2url}
                  style={{ width: "10rem", marginBottom: "2rem" }}
                  alt="trending2"
                />
                <div>{this.props.boximage2subheading}</div>
                <h4>{this.props.boximage2heading}</h4>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col-12 col-xs-10 box-image3">
                <img
                  src="https://www.dailykit.org/hubfs/dailykit-assets/accompaniments.gif"
                  alt="box-image3"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-10 trend-responsive banner-section1-description">
            <div class="subheading2">
              {this.props.subheading && this.props.subheading}
            </div>
            <h2>{this.props.heading && this.props.heading}</h2>
            <br />
            <a>
              <button
                type="button"
                className="btn-style-thirteen green"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {this.props.buttontext && this.props.buttontext}
              </button>
            </a>
            <ContactFormSection2
              dataAccount={this.props.dataAccount}
              dataForm={this.props.dataForm}
            />
          </div>
        </div>
      </div>
    );
  }
}
