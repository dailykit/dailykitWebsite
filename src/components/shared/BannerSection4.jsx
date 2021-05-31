import React, { PureComponent } from "react";
import "../../style.css";
export default class BannerSection4 extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
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
              {this.props.bluesubheading && (
                <div class="bluesubheading">{this.props.bluesubheading}</div>
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
              <p class="descriptiontype3">
                {this.props.description && (
                  <div class="row">
                    <div
                      class="col-md-2 col-xs-10 vl"
                      style={{ marginRight: "-80px", marginTop: "8px" }}
                    ></div>
                    <div class="col-md-10 col-xs-10">
                      {this.props.description}
                    </div>
                  </div>
                )}
                {this.props.points && (
                  <div
                    class="row"
                    style={{ marginTop: "2rem", marginLeft: "2rem" }}
                  >
                    {this.props.points.map((point) => {
                      return (
                        <ul class="col-md-6 col-xs-10 onDemandCategories">
                          {point.map((li) => {
                            return <li>{li}</li>;
                          })}
                        </ul>
                      );
                    })}
                    {this.props.buttonlink && (
                      <a href={this.props.buttonlink}>
                        {this.props.greenbuttontext && (
                          <button
                            type="button"
                            className="btn-style-thirteen green"
                          >
                            {this.props.greenbuttontext}
                          </button>
                        )}
                        {this.props.blackbuttontext && (
                          <button
                            type="button"
                            className="btn-style-thirteen black"
                          >
                            {this.props.blackbuttontext}
                          </button>
                        )}
                      </a>
                    )}
                  </div>
                )}
              </p>
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
