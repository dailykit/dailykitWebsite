import React, { PureComponent } from "react";
import "../../style.css";
import Heading1 from "./Heading";
import SubHeading1 from "./SubHeading";
export default class ImageBox1 extends PureComponent {
  render() {
    return (
      <div class="container image-section-1">
        {this.props.SubHeading2text && (
          <SubHeading1 text={this.props.SubHeading2text} />
        )}
        {this.props.Heading1text && <Heading1 text={this.props.Heading1text} />}
        {this.props.SubHeading1text && (
          <SubHeading1 text={this.props.SubHeading1text} />
        )}
        <div class="row justify-content-center">
          <div class="col-md-6 col-xs-10">
            <div class="card">
              <div class="card-body inner-box">
                <img alt={this.props.imagetext1} src={this.props.image1url} />

                {this.props.imagetext1 && (
                  <a
                    href="/we_serve#restaurants"
                    class="btn btn-dark image1-button"
                  >
                    {this.props.imagetext1}
                  </a>
                )}
                {this.props.imagepara && (
                  <a href="/" class="btn btn-dark image1-button">
                    <h4 class="card-title nunito">
                      {" "}
                      {this.props.imagepara[0].heading}
                    </h4>
                    <p class="card-text nunito" style={{ fontSize: "16px" }}>
                      {this.props.imagepara[0].para}
                    </p>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-10">
            <div class="card">
              <div class="card-body inner-box">
                <img alt={this.props.imagetext2} src={this.props.image2url} />

                {this.props.imagetext2 && (
                  <a
                    href="/we_serve#supermarkets"
                    class="btn btn-dark image2-button"
                  >
                    {this.props.imagetext2}
                  </a>
                )}
                {this.props.imagepara && (
                  <a href="#" class="btn btn-dark image2-button">
                    <h4 class="card-title nunito">
                      {" "}
                      {this.props.imagepara[1].heading}
                    </h4>
                    <p class="card-text nunito" style={{ fontSize: "16px" }}>
                      {this.props.imagepara[1].para}
                    </p>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
