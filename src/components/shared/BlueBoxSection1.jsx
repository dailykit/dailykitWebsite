import React, { PureComponent } from "react";
import "../../style.css";
export default class BlueBoxSection1 extends PureComponent {
  render() {
    return (
      <div class="nunito bluebox-section1">
        {this.props.subheading && <h6>{this.props.subheading}</h6>}
        {this.props.mainheading && <h1>{this.props.mainheading}</h1>}
        <div class="container">
          <div class="row justify-content-evenly">
            {this.props.boxes &&
              this.props.boxes.map((box) => {
                return (
                  <div class="col-md-4 col-xs-10 box-container">
                    <div class="row justify-content-center ">
                      <div class="col-md-4 col-xs-10 ">
                        <img src={box.image} alt="icon" />
                      </div>
                      <div class="col-8 box">
                        <h5
                          style={{
                            marginTop: "2rem",
                            fontSize: "22px",
                            padding: "0px 0px 10px",
                          }}
                        >
                          {box.heading}
                        </h5>
                        <p style={{ fontSize: "16px", margin: "8px 0px 10px" }}>
                          {box.para}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
