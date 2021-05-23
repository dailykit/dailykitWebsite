import React, { PureComponent } from "react";
import "../../style.css";
export default class ImageBox extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <div class="card">
              <div
                class="card-body imagebox1"
                style={{
                  height: "23rem",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
              </div>
              <a
                href="/we_serve"
                class="btn btn-dark restaurant-button"
                style={{
                  fontSize: "25px",
                }}
              >
                Restaurants
              </a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div
                class="card-body imagebox2"
                style={{
                  height: "23rem",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
              </div>
              <a
                href="/we_serve"
                class="btn btn-dark supermarket-button"
                style={{ fontSize: "25px", border: "0 2px 0 2px green" }}
              >
                SuperMarkets
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
