import React, { PureComponent } from "react";
import "./../../style.css";
export default class SubHeading1 extends PureComponent {
  render() {
    return (
      <>
        <h5 class="SubHeading1 nunito">{this.props.text && this.props.text}</h5>
      </>
    );
  }
}
