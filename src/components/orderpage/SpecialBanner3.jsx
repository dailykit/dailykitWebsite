import React, { PureComponent } from "react";
import Heading1 from "../shared/Heading";
import SubHeading1 from "../shared/SubHeading";

export default class SpecialBanner3 extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "6rem" }}>
        <div class="container bluebox2-container">
          {this.props.SubHeading2text && (
            <SubHeading1 text={this.props.SubHeading2text} />
          )}
          {this.props.Heading1text && (
            <Heading1 text={this.props.Heading1text} />
          )}
          {this.props.SubHeading1text && (
            <SubHeading1 text={this.props.SubHeading1text} />
          )}

          <div class="row">
            <div class="col-md-6 col-xs-10 ">
              <img
                src={this.props.imageurl1}
                alt="..."
                className="image-responsive-2"
              />
            </div>
            <div class="col-md-6 col-xs-10">
              <img
                src={this.props.imageurl2}
                alt="..."
                className="image-responsive-2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
