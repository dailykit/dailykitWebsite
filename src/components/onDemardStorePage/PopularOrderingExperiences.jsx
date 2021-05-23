import React, { PureComponent } from "react";
import "../../style.css";
export default class PopularOrderingExperiences extends PureComponent {
  render() {
    return (
      <div class="container" style={{ marginTop: "15rem" }}>
        <div class="row justify-content-center">
          <div class="col-md-6 col-xs-10 trend-responsive">
            <div
              style={{
                color: "#1374f6",
                fontWeight: "bolder",
                fontSize: "15px",
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              {this.props.subheading}
            </div>
            <h2
              style={{
                fontWeight: "400",
                fontSize: "60px",
                marginBottom: "2rem",
              }}
              className="nunito"
            >
              {this.props.heading}
            </h2>
            <p
              style={{
                fontSize: "23px",
              }}
            >
              {this.props.text}
            </p>

            <ul
              className="onDemandCategories"
              style={{
                fontSize: "19px",
                marginTop: "2rem",
              }}
            >
              {this.props.point.map((li) => {
                return <li>{li}</li>;
              })}
            </ul>
          </div>
          <div class="col-md-6 col-xs-10">
            <img
              src={this.props.image}
              alt="image-gif"
              style={{ width: "22rem" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
