import React, { PureComponent } from "react";

export default class StoreThatSells extends PureComponent {
  render() {
    return (
      <>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-6 col-xs-10 trend-responsive">
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {this.props.subheading && this.props.subheading}
              </p>
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "50px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                {this.props.heading && this.props.heading}
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  marginBottom: "4rem",
                }}
              >
                {this.props.text && this.props.text}
              </p>
              <div className="justify-content-center">
                <form>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Valid Email Address"
                    style={{
                      width: "20rem",
                      height: "3.29rem",
                      display: "inline",
                      background: "#E6F8FC",
                    }}
                  />
                  <button
                    type="button"
                    style={{ fontSize: "14px", width: "150px" }}
                    class="btn btn-dark btn-lg p-3 pl-4 pr-4 homebutton"
                  >
                    Start Now
                  </button>
                </form>
              </div>
            </div>
            <div class="col-md-6 col-xs-10">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={this.props.image}
                      class="d-block w-100 image-responsive"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
