import React, { PureComponent } from "react";
import "../../style.css";
export default class BannerSection5 extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between nunito">
            {this.props.leftimage && (
              <div class="col-md-6 col-xs-10">
                <img
                  src={this.props.leftimage}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            )}
            <div class="col-md-6 col-xs-10 trend-responsive">
              {this.props.icon && (
                <img src={this.props.icon} width="120px" alt=".." />
              )}
              <h2
                className="nunito blueboxHeading"
                style={{ color: "#111b2b", marginTop: "-112px" }}
              >
                {this.props.heading}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                {this.props.description && (
                  <div style={{ display: "inline" }}>
                    {this.props.description}
                    <br />
                  </div>
                )}
                {this.props.para &&
                  this.props.para.map((i) => {
                    return (
                      <div style={{ display: "inline" }}>
                        {i}
                        <br />
                        <br />
                      </div>
                    );
                  })}
              </p>
              {this.props.box1title && (
                <div class="row justify-content-evenly">
                  <div
                    class="col-md-5 col-xs-10 p-4"
                    style={{ boxShadow: "0 0 10px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    {this.props.box2icon ? (
                      <img src={this.props.box1icon} width="40px" alt="icon" />
                    ) : (
                      <h1 style={{ color: "#4FD153", fontWeight: "bolder" }}>
                        01
                      </h1>
                    )}
                    {this.props.box1title && (
                      <h5 style={{ display: "inline", fontWeight: "bolder" }}>
                        {this.props.box1title}
                      </h5>
                    )}
                    {this.props.box1description && (
                      <p style={{ marginTop: "2rem" }}>
                        {this.props.box1description}
                      </p>
                    )}
                  </div>
                  <div
                    class="col-md-5 col-xs-10 p-4"
                    style={{ boxShadow: "0 0 10px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    {this.props.box2icon ? (
                      <img src={this.props.box2icon} width="40px" alt="icon" />
                    ) : (
                      <h1 style={{ color: "#4FD153", fontWeight: "bolder" }}>
                        02
                      </h1>
                    )}
                    {this.props.box2title && (
                      <h5 style={{ display: "inline", fontWeight: "bolder" }}>
                        {this.props.box2title}
                      </h5>
                    )}
                    {this.props.box2description && (
                      <p style={{ marginTop: "2rem" }}>
                        {this.props.box2description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
            {this.props.rightimage && (
              <div class="col-md-6 col-xs-10">
                <img
                  src={this.props.rightimage}
                  class="d-block w-100"
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
