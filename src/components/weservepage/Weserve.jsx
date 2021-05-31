import React, { PureComponent } from "react";
import "../../style.css";

export default class Weserve extends PureComponent {
  render() {
    return (
      <>
        {/* heading */}
        <h6
          style={{
            color: "#8ac03b",
            fontWeight: "bolder",
            textAlign: "center",
            marginTop: "12rem",
          }}
        >
          DailyKIT Does It All
        </h6>
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "3.5rem",
            fontFamily: "'Nunito', sans-serif",
            letterSpacing: "1.5px",
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "4rem",
          }}
        >
          We Serve
        </h1>
        {/* image-box */}
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-3 col-xs-10">
              <div class="card card-responsive">
                <div class="card-body imagebox1">
                  <a class="btn btn-dark p-4 below-image-button">Restaurants</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-xs-10">
              <div class="card card-responsive">
                <div class="card-body imagebox2">
                  <a class="btn btn-dark p-4 below-image-button">
                    SuperMarkets
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-xs-10">
              <div class="card card-responsive">
                <div class="card-body imagebox3">
                  <a class="btn btn-dark p-4 below-image-button">
                    Cloud Kitchens
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-xs-10">
              <div class="card card-responsive">
                <div class="card-body imagebox4">
                  <a class="btn btn-dark p-4 below-image-button">Enterprise</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
