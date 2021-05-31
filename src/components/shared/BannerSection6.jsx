import React, { PureComponent } from "react";
import "../../style.css";
import ContactFormSection2 from "./ContactFormSection2";
export default class BannerSection6 extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            {this.props.leftImage && (
              <div class="col-md-5 col-xs-10">
                <img
                  src={this.props.leftImage}
                  class="d-block image-responsive-size"
                  alt="..."
                />
              </div>
            )}
            <div class="col-md-5 col-xs-10 trend-responsive">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "50px",
                  margin: "1rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                {this.props.heading}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                {this.props.para.map((para) => {
                  return (
                    <p style={{ display: "inline" }}>
                      {para}
                      <br />
                      <br />
                    </p>
                  );
                })}
                {this.props.buttonlink ? (
                  <a href={this.props.buttonlink}>
                    <button type="button" className="btn-style-thirteen green">
                      {this.props.buttontext}
                    </button>
                  </a>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn-style-thirteen green"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      {this.props.greenbuttontext}
                    </button>
                  </>
                )}
              </p>
              <ContactFormSection2
                dataAccount={this.props.dataAccount}
                dataForm={this.props.dataForm}
              />
            </div>
            {this.props.rightImage && (
              <div class="col-md-5 col-xs-10">
                <img
                  src={this.props.rightImage}
                  class="d-block image-responsive-size"
                  width="480px"
                  alt="..."
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
