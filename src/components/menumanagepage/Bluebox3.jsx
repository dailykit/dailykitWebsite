import React, { PureComponent } from "react";
import "../../style.css";
export default class Bluebox extends PureComponent {
  render() {
    return (
      <div
        style={{ background: "#111B2B", textAlign: "center", color: "white" }}
      >
        <div style={{ color: "#111B2B" }}>.</div>
        <div
          style={{
            fontWeight: "bolder",
            fontSize: "50px",
            margin: "5rem 0rem 2rem 0rem",
          }}
        >
          {this.props.heading}
        </div>
        <a href={this.props.buttonlink}>
          <button
            type="button"
            class="btn-style-thirteen green p-3 pl-4 pr-4 mb-4"
          >
            {this.props.buttontext}
          </button>
        </a>
        <div className="container">
          <div class="row justify-content-center mb-4 mt-4">
            <p class="col-md-5 col-xs-10 bluebox-right">
              {this.props.leftpara}
            </p>
            <p class="col-md-1 blackline"></p>
            <p class="col-md-5 col-xs-10 bluebox-left">
              {this.props.rightpara}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
