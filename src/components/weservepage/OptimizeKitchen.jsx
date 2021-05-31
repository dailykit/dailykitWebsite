import React, { PureComponent } from "react";
import "../../style.css";
export default class OptimizeKitchen extends PureComponent {
  render() {
    return (
      <div>
        <div className="container container_weserve">
          <div className="sideBar_left">
            <h6>{this.props.subheading}</h6>
            <h2
              className="nunito blueboxHeading"
              style={{ color: "#fefdfc", marginTop: "-112px" }}
            >
              {this.props.heading}
            </h2>

            <h5>{this.props.para}</h5>
            <a href={this.props.button1link}>
              <button type="button" className="weserve_button1">
                {this.props.button1text}
              </button>
            </a>
            <a href={this.props.button1link}>
              <button type="button" className="weserve_button2">
                {this.props.button2text}
              </button>
            </a>
            <img className="weserve_img" src={this.props.image} alt="..." />
          </div>
          <div className="sideBar_right">
            <div
              class="container"
              style={{
                marginTop: "6rem",
                padding: "2rem 0rem 6rem 0rem",
                color: "white",
                textAlign: "center",
              }}
            >
              <div class="row justify-content-evenly mb-4">
                {this.props.points[0].map((point) => {
                  return (
                    <div class="col-md-4 col-xs-8 p-4 column3 justify-content-center">
                      <h5
                        style={{
                          display: "inline",
                          fontWeight: "bolder",
                        }}
                        class="nunito"
                      >
                        {point.heading}
                      </h5>
                      <br />
                      <p
                        style={{
                          fontSize: "14px",
                          marginTop: "2rem",
                        }}
                      >
                        {point.para}
                      </p>
                      <img
                        alt="icon"
                        src={point.link}
                        style={{
                          width: "90px",
                          display: "block",
                          margin: "2rem 40% 2rem 30%",
                        }}
                      />
                    </div>
                  );
                })}

                <div class="row justify-content-evenly mt-8">
                  {this.props.points[1].map((point) => {
                    return (
                      <div class="col-md-4 col-xs-8 p-4 column3 justify-content-center">
                        <h5
                          style={{
                            display: "inline",
                            fontWeight: "bolder",
                          }}
                          class="nunito"
                        >
                          {point.heading}
                        </h5>
                        <br />
                        <p
                          style={{
                            fontSize: "14px",
                            marginTop: "2rem",
                          }}
                        >
                          {point.para}
                        </p>
                        <img
                          alt="icon"
                          src={point.link}
                          style={{
                            width: "90px",
                            display: "block",
                            margin: "2rem 40% 2rem 30%",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
