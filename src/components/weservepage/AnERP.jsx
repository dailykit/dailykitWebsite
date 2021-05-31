import React, { PureComponent } from "react";
import "../../style.css";
export default class AnERP extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "12rem" }}>
          <div class="row justify-content-between">
            <div class="col-md-6 col-xs-10 trend-responsive">
              <h2 className="nunito we-serve-heading">{this.props.heading}</h2>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "bolder",
                  color: "silver",
                }}
              >
                {this.props.para}
              </p>
              <a href={this.props.button1link}>
                <button type="button" className="weserve_button1">
                  {this.props.button1text}
                </button>
              </a>
            </div>
            <div class="col-md-6 col-xs-10 right-image-margintop">
              <img
                src={this.props.rightImage}
                alt="..."
                class="enterprise-image"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
