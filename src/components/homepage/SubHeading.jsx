import React, { PureComponent } from "react";
import "./../../style.css";
export default class SubHeading extends PureComponent {
  render() {
    return (
      <>
        <h5
          style={{
            textAlign: "center",
            color: "#8ac03b",
            fontWeight: "600",
            marginBottom: "3rem",
          }}
        >
          Whether You Are A Start-Up Or An Existing Food Business, We've Got You
          Covered.
        </h5>
      </>
    );
  }
}
