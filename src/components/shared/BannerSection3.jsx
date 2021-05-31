import React, { PureComponent } from "react";
import TrialForm from "./TrialForm";

export default class BannerSection3 extends PureComponent {
  render() {
    return (
      <>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-xs-10 trend-responsive">
              {this.props.subheading && (
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {this.props.subheading}
                </p>
              )}
              {this.props.heading && (
                <h2
                  style={{
                    fontWeight: "bolder",
                    fontSize: "50px",
                    margin: "2rem 0rem 2rem 0rem",
                  }}
                  className="nunito"
                >
                  {this.props.heading}
                </h2>
              )}
              {this.props.text && (
                <p
                  style={{
                    fontSize: "17px",
                    marginBottom: "4rem",
                  }}
                >
                  {this.props.text}
                </p>
              )}
              <div className="justify-content-center">
                {this.props.button2 ? (
                  <div className="justify-content-center mb-4">
                    <a href={this.props.button1link}>
                      <button type="button" class="btn-style-thirteen black">
                        {this.props.button2[0]}
                      </button>
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href={this.props.button2link}>
                      <button type="button" class="btn-style-thirteen white">
                        {this.props.button2[1]}
                      </button>
                    </a>
                  </div>
                ) : (
                  <div class="form-banner">
                    <TrialForm
                      dataAccount={"3161173:g2o5g2c3i8"}
                      dataForm={"4175542:d4z0s3"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div class="col-md-6 col-xs-10">
              {this.props.image && (
                <img
                  src={this.props.image}
                  class="d-block w-100 image-responsive"
                  alt="..."
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
