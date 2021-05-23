import React, { PureComponent } from "react";
import "./../../style.css";
export default class Heading extends PureComponent {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "10rem",
          marginBottom: "1.2rem",
        }}
      >
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "3rem",
            fontFamily: "'Nunito', sans-serif",
            letterSpacing: "1.5px",
          }}
        >
          {this.props.text ? this.props.text : "Built For Food Businesses"}
        </h1>
      </div>
    );
  }
}
