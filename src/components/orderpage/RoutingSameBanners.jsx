import React, { PureComponent } from "react";
import "../../style.css";
export default class RoutingSameBanners extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            {this.props.image && (
              <div class="col-md-6 col-xs-10">
                <img
                  src={this.props.image}
                  class="d-block right-image-responsive"
                  alt="..."
                />
              </div>
            )}
            <div class="col-md-6 col-xs-10">
              <small
                style={{
                  color: "#8ac03b",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "6rem",
                }}
                class="nunito"
              >
                {this.props.subheading}
              </small>
              <h2
                style={{
                  fontWeight: "bolder",
                  margin: "1rem 0rem 2rem 0rem",
                }}
                className="nunito heading-responsive"
              >
                {this.props.heading}
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8rem",
                }}
              >
                {this.props.para.map((para1) => {
                  return (
                    <div style={{ display: "inline" }}>
                      {para1}
                      <br />
                    </div>
                  );
                })}
              </p>
              {this.props.learn && (
                <button
                  type="button"
                  className="learMore_button2 m-4 pt-2 pb-2"
                  style={{ marginRight: "120px" }}
                >
                  Learn More
                </button>
              )}
            </div>
            {this.props.rightImage && (
              <div class="col-md-6 col-xs-10">
                <img
                  src={this.props.rightImage}
                  class="d-block right-image-responsive"
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
