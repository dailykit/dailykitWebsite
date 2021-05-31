import React, { PureComponent } from "react";
import "../../style.css";
export default class SpecialBanner5 extends PureComponent {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "10.3rem",
          marginBottom: "1.2rem",
        }}
      >
        {this.props.heading && (
          <h1 className="nunito blueboxHeading" style={{ color: "#111b2b" }}>
            {this.props.heading}
          </h1>
        )}
        {this.props.subpara && <p class="why_choose">{this.props.subpara}</p>}
        {/* categories */}
        <div class="container" style={{ textAlign: "left" }}>
          <div class="row justify-content-center">
            {this.props.points[0].map((point) => {
              console.log(point);
              return (
                <div class="col-md-3 col-xs-10 p-4 column">
                  <img alt="icon" src={point.icon} style={{ width: "30px" }} />
                  <h5>{point.heading}</h5>
                  <br />
                  <small>{point.para}</small>
                </div>
              );
            })}
          </div>
          <div class="row justify-content-center">
            {this.props.points[1].map((point) => {
              return (
                <div class="col-md-3 col-xs-10 p-4 column">
                  <img alt="icon" src={point.icon} style={{ width: "30px" }} />
                  <h5>{point.heading}</h5>
                  <br />
                  <small>{point.para}</small>
                </div>
              );
            })}
          </div>
        </div>
        <a href={this.props.buttonlink}>
          <button type="button" class="btn-style-thirteen green">
            {this.props.buttontext}
          </button>
        </a>

        {/* second_categories */}

        <div
          style={{
            background: "#111b2b",
            color: "white",
            marginTop: "6rem",
          }}
        >
          <div class="container whychoose-container2">
            <div class="row justify-content-evenly">
              {this.props.points[2].map((point) => {
                return (
                  <div class="col-md-3 col-xs-10 p-4 column2">
                    <img
                      alt="icon"
                      src={point.icon}
                      style={{ width: "30px" }}
                    />{" "}
                    <h5 style={{ display: "inline" }}>{point.heading}</h5>
                    <br />
                    <small>{point.para}</small>
                  </div>
                );
              })}
            </div>
            <div class="row justify-content-evenly">
              {this.props.points[3].map((point) => {
                return (
                  <div class="col-md-3 col-xs-10 p-4 column2">
                    <img
                      alt="icon"
                      src={point.icon}
                      style={{ width: "30px" }}
                    />{" "}
                    <h5 style={{ display: "inline" }}>{point.heading}</h5>
                    <br />
                    <small>{point.para}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
