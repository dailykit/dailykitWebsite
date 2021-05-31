import React, { PureComponent } from "react";
import "../../style.css";
import ContactFormSection2 from "./ContactFormSection2";
export default class BannerSection7 extends PureComponent {
  render() {
    return (
      <>
        <h6 className="insight-subheading">-Insights</h6>
        <div className="insight-heading">
          {this.props.heading}

          <button
            type="button"
            className="btn-style-thirteen white learn responsive-button2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Learn More
          </button>
        </div>{" "}
        <ContactFormSection2
          dataAccount={this.props.dataAccount}
          dataForm={this.props.dataForm}
        />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-4 col-xs-10">
              <div class="card redhover">
                <div
                  class={this.props.image[0]}
                  style={{
                    height: "14rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <a href="/" class="btn pl-4 pr-4 list-styling">
                    {this.props.list[0]}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-10">
              <div class="card redhover">
                <div
                  class={this.props.image[1]}
                  style={{
                    height: "14rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <a href="/" class="btn  pl-4 pr-4 list-styling">
                    {this.props.list[1]}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-10">
              <div class="card redhover">
                <div
                  class={this.props.image[2]}
                  style={{
                    height: "14rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <a href="/" class="btn pl-4 pr-4 list-styling">
                    {this.props.list[2]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
