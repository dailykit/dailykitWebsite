import React, { PureComponent } from "react";
import "./../../style.css";
export default class Heading1 extends PureComponent {
  render() {
    return (
      <>
        <h1 class="Heading1 nunito">{this.props.text && this.props.text}</h1>
      </>
    );
  }
}
